import "./resizable.component.css";
import { ResizableBox, ResizableBoxProps } from "react-resizable";
import React from "react";

interface ResizableProps {
  direction: "horizontal" | "vertical";
  children?: React.ReactNode;
}

const ResizableComponent: React.FunctionComponent<ResizableProps> = ({
  direction,
  children,
}) => {
  let resizableProps: ResizableBoxProps;

  if (direction === "horizontal") {
    resizableProps = {
      className: "resize-horizontal",
      minConstraints: [window.innerWidth * 0.2, Infinity],
      maxConstraints: [window.innerWidth * 0.75, Infinity],
      height: Infinity,
      width: window.innerWidth * 0.75,
      resizeHandles: ["e"],
    };
  } else {
    resizableProps = {
      minConstraints: [Infinity, 50],
      maxConstraints: [Infinity, window.innerHeight * 0.9],
      height: 300,
      width: Infinity,
      resizeHandles: ["s"],
    };
  }
  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default ResizableComponent;
