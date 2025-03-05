import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useDrag, useDrop } from "react-dnd";
import {
  deleteTask,
  editTask,
  toggleTaskComplete,
  moveTask,
} from "../store/taskSlice";
import Item from "./Item";
import ContextMenu from "./ContextMenu";
import "../styles/List.scss";

const List: React.FC = () => {
  const items = useSelector((state: RootState) => state.tasks.items);
  const filter = useSelector((state: RootState) => state.tasks.filter);
  const dispatch = useDispatch();

  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    position: { x: number; y: number };
    item: any | null;
  }>({
    visible: false,
    position: { x: 0, y: 0 },
    item: null,
  });

  const handleEdit = (id: number, newText: string) => {
    dispatch(editTask({ id, newText }));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };

  const handleToggleComplete = (id: number) => {
    dispatch(toggleTaskComplete(id));
  };

  const filteredItems = items.filter((item) => {
    if (filter === "completed") return item.completed;
    if (filter === "incomplete") return !item.completed;
    return true;
  });

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    dispatch(moveTask({ dragIndex, hoverIndex }));
  };

  const handleContextMenu = (e: React.MouseEvent<HTMLLIElement>, item: any) => {
    e.preventDefault();
    setContextMenu({
      visible: true,
      position: { x: e.pageX, y: e.pageY },
      item,
    });
  };

  const handleClickOutside = () => {
    setContextMenu({ visible: false, position: { x: 0, y: 0 }, item: null });
  };

  const actions = [
    {
      label: "Edit",
      handler: () => {
        if (contextMenu.item) {
          const newText = prompt("Edit Task:", contextMenu.item.text);
          if (newText) {
            dispatch(editTask({ id: contextMenu.item.id, newText }));
          }
        }
        setContextMenu({ ...contextMenu, visible: false });
      },
    },
    {
      label: "Delete",
      handler: () => {
        if (contextMenu.item) {
          dispatch(deleteTask(contextMenu.item.id));
        }
        setContextMenu({ ...contextMenu, visible: false });
      },
    },
    {
      label: "Toggle Complete",
      handler: () => {
        if (contextMenu.item) {
          dispatch(toggleTaskComplete(contextMenu.item.id));
        }
        setContextMenu({ ...contextMenu, visible: false });
      },
    },
  ];

  return (
    <div onClick={handleClickOutside}>
      <ul className="list">
        {filteredItems.map((item, index) => (
          <DraggableItem
            key={item.id}
            item={item}
            index={index}
            editItem={handleEdit}
            deleteItem={handleDelete}
            toggleComplete={handleToggleComplete}
            moveItem={moveItem}
            handleContextMenu={handleContextMenu}
          />
        ))}
      </ul>
      <ContextMenu
        visible={contextMenu.visible}
        position={contextMenu.position}
        actions={actions}
      />
    </div>
  );
};

const DraggableItem: React.FC<{
  item: any;
  index: number;
  editItem: (id: number, newText: string) => void;
  deleteItem: (id: number) => void;
  toggleComplete: (id: number) => void;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  handleContextMenu: (e: React.MouseEvent<HTMLLIElement>, item: any) => void;
}> = ({
  item,
  index,
  editItem,
  deleteItem,
  toggleComplete,
  moveItem,
  handleContextMenu,
}) => {
  const [, ref] = useDrag({
    type: "ITEM",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "ITEM",
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <li
      ref={(node) => ref(drop(node))}
      onContextMenu={(e) => handleContextMenu(e, item)}
    >
      <Item
        item={item}
        editItem={editItem}
        deleteItem={deleteItem}
        toggleComplete={toggleComplete}
      />
    </li>
  );
};

export default List;
