import React from "react";
import "../styles/ContextMenu.scss";

interface Action {
  label: string;
  handler: () => void;
}

interface ContextMenuProps {
  visible: boolean;
  position: { x: number; y: number };
  actions: Action[];
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  visible,
  position,
  actions,
}) => {
  if (!visible) return null;

  return (
    <div
      className="context-menu"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <ul>
        {actions.map((action, index) => (
          <li key={index} onClick={action.handler}>
            {action.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContextMenu;
