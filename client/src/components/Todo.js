import React from "react";

function Todo() {
  const handleDrag = (ev) => {
    ev.dataTransfer.setData("text/plain", ev.target.id);
  };
  const handleDragOver = (ev) => {
    ev.preventDefault();
  };

  const handleDrop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    const draggableElement = document.getElementById(data);
    console.log(data);
    ev.target.appendChild(draggableElement);

    // ev.target.appendChild(document.getElementById(data));
  };
  return (
    <div>
      <div onDrop={handleDrop} onDragOver={handleDragOver}>
        <p
          id="draggable"
          draggable={true}
          onDragStart={handleDrag}
          onDragOver={handleDragOver}
        >
          Damn boi
        </p>
      </div>
      <div onDrop={handleDrop} onDragOver={handleDragOver}></div>
    </div>
  );
}

export default Todo;
