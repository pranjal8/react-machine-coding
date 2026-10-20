import { useState } from "react";

const initialShapes = [
  { id: 0, type: "circle", x: 50, y: 100 },
  { id: 1, type: "square", x: 150, y: 100 },
  { id: 2, type: "circle", x: 250, y: 100 },
];

const TransformingArrayInState = () => {
   const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    const newShape = shapes.map((item) => {
      if (item.type === "square") return item;
      else {
        return {
          ...item,
          y: item.y + 50,
        };
      }
    });

    setShapes(newShape);
  }
  return (
    <div style={{ position: "relative" }}>
      <div>
        <button onClick={handleClick}>Move circles down!</button>
      </div>

      <div>
        {shapes.map((item) => (
          <>
            <div
              key={item.id}
              style={{
                background: "purple",
                width: 40,
                height: 40,
                position: "absolute",
                top: item.y,
                left: item.x,
                borderRadius: item.type === "circle" ? "50%" : "",
              }}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default TransformingArrayInState