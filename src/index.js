import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Text, Group, Rect } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {/*  blue group*/}
        <Group>
          <Rect
            x={50}
            y={50}
            width={180}
            height={50}
            fill={"#aaf"}
            stroke={"black"}
            strokeWidth={4}
          />
          <Text
            x={50}
            y={50}
            fontSize={26}
            fontFamily={"Calibri"}
            text={"bound below"}
            fill={"black"}
            padding={10}
          />
        </Group>
      </Layer>
      <Layer>
        {/*  yellow group*/}
        <Group>
          <Rect
            x={250}
            y={50}
            width={180}
            height={50}
            fill={"yellow"}
            stroke={"black"}
            strokeWidth={4}
          />
          <Text
            x={250}
            y={50}
            fontSize={26}
            fontFamily={"Calibri"}
            text={"bound in circle"}
            fill={"black"}
            padding={10}
          />
        </Group>
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
