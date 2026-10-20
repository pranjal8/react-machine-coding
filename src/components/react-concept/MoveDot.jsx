import { useState } from "react";

const MoveDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMove(e) {
    //to trigger re-render, create a new object and pass it to the state setting function:
  
    const nextPosition={};
    nextPosition.x =e.clientX;
    nextPosition.y =e.clientY;
    setPosition(nextPosition)

    //above code equivalent to:
    /*  
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });  
    */


  }

  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "50vh",
          border: "1px dotted black",
          borderRadius: "4px",
        }}
        onPointerMove={(e) => handleMove(e)}
      >
        <div
          style={{
            backgroundColor: "red",
            borderRadius: "50%",
            width: 20,
            height: 20,
            position: "absolute",
            left: -10,
            top: -10,
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />
      </div>

      <div>
        {" "}
        <p>
          clientX:{position.x} clientY:{position.y}
        </p>
        <p>
          box left:{} box top:{}{" "}
        </p>
        <p> translate(x,y):{} </p>{" "}
      </div>
    </div>
  );
};

export default MoveDot;
