import { ResizableBox } from "react-resizable";
import React from "react";

interface ResizableProps {
  direction: "horizontal" | "vertical";
  children?: React.ReactNode;
}

const ResizableComponent: React.FunctionComponent<ResizableProps> = ({
  direction,
  children,
}) => {
  return (
    <ResizableBox height={300} width={300}>
      {children}
    </ResizableBox>
  );
};

export default ResizableComponent;
