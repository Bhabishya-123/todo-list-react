import React, { useState } from "react";
import { Item as ItemType } from "../types/Item";
import "../styles/Item.scss";

interface ItemProps {
  item: ItemType;
  editItem: (id: number, newText: string) => void;
  deleteItem: (id: number) => void;
  toggleComplete: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({
  item,
  editItem,
  deleteItem,
  toggleComplete,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newText, setNewText] = useState<string>(item.text);

  const handleEdit = () => {
    if (newText.trim()) {
      editItem(item.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <li className={`item ${item.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => toggleComplete(item.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEdit}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleEdit();
            }
          }}
        />
      ) : (
        <span className="item" onDoubleClick={() => setIsEditing(true)}>
          {item.text}
        </span>
      )}
      <button onClick={() => deleteItem(item.id)}>-</button>
    </li>
  );
};

export default Item;
