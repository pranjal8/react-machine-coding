import { useState } from "react";
import { produce } from "immer";

const OUTER_BOX = {
  margin: "12px",
  width: "300px",
  height: "300px",
  border: "1px solid black",
  backgroundColor: "rgba(200, 200, 0, 0.2)",
  position: "relative",
};

const INNER_BOX = {
  width: "100px",
  height: "100px",
  cursor: "grab",
  border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
};

const initialPosition = { x: 0, y: 0 };

const COLORS = [
  { name: "Orange", value: "orange" },
  { name: "Yellow", value: "yellow" },
  { name: "Light Pink", value: "lightpink" },
  { name: "Light Grey", value: "lightgrey" },
  { name: "Light Green", value: "lightgreen" },
];

const DraggableBox = () => {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  });

  function handleColorChange(e) {
    setShape((prev) => ({ ...prev, color: e.target.value }));
  }

  function handlePositionChange(dx, dy) {
    /* 
          setShape((prev) => ({
          ...prev,
          position: {
            x: Math.max(0, Math.min(198, prev.position.x + dx)),
            y: Math.max(0, Math.min(198, prev.position.y + dy)),
          },
        }));
  
    */

    //You can use Immer's produce to update position directly in the draft, without spreading prev or creating a new position object manually.

    setShape(
      produce((draft) => {
        draft.position.x = Math.max(0, Math.min(198, draft.position.x + dx));
        draft.position.y = Math.max(0, Math.min(198, draft.position.y + dy));
      }),
    );
  }

  return (
    <div>
      <select value={shape.color} onChange={handleColorChange}>
        {COLORS.map((item) => (
          <option key={item.value} value={item.value}>
            {" "}
            {item.name}{" "}
          </option>
        ))}
      </select>

      <div style={OUTER_BOX}>
        <Box
          color={shape.color}
          position={shape.position}
          onPositionChange={handlePositionChange}
        >
          Drag me!
        </Box>
      </div>
    </div>
  );
};

export default DraggableBox;

function Box({ color, position, onPositionChange, children }) {
  const [lastCoordinates, setLastCoordinates] = useState(null);

  const handlePointerDown = (e) => {
    e.target.setPointerCapture(e.pointerId);

    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handlePointerMove = (e) => {
    if (lastCoordinates === null) return;

    const dx = e.clientX - lastCoordinates.x;
    const dy = e.clientY - lastCoordinates.y;

    onPositionChange(dx, dy);

    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handlePointerUp = () => {
    setLastCoordinates(null);
  };
  return (
    <div
      style={{
        ...INNER_BOX,
        backgroundColor: color,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {children}
    </div>
  );
}
