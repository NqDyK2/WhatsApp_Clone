import React, { useRef } from "react";

function ContextMenu({ options, cordinates, context, setContextMenu }) {
  const contextMenuRef = useRef(null);
  const handleClick = (e, callback) => {};
  return (
    <div
      className={` bg-dropdown-background fixed py-2 z-[100] shadow-xl`}
      ref={contextMenuRef}
      style={{
        top: cordinates.y,
        left: cordinates.x,
      }}
    >
      <ul>
        {options.map(({ name, callback }) => (
          <li key={name} onClick={() => handleClick(e, callback)}>
            <span className="text-white">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContextMenu;
