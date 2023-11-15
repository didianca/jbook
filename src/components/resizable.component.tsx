import "./resizable.component.css";
import { ResizableBox, ResizableBoxProps } from "react-resizable";
import React, { useEffect, useState } from "react";

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
  children?: React.ReactNode;
}

const ResizableComponent: React.FunctionComponent<ResizableProps> = ({
  direction,
  children,
}) => {
  let resizableProps: ResizableBoxProps;
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState(window.innerWidth * 0.75);

  useEffect(() => {
    let timer: any;
    const listener = () => {
      timer = setTimeout(() => {
        if (timer) {
          clearTimeout(timer);
        }
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);
      }, 100);
    };

    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

  if (direction === 'horizontal') {
    resizableProps = {
      className: 'resize-horizontal',
      minConstraints: [innerWidth * 0.2, Infinity],
      maxConstraints: [innerWidth * 0.75, Infinity],
      height: Infinity,
      width: innerWidth * 0.75,
      resizeHandles: ["e"],
    };
  } else {
    resizableProps = {
      minConstraints: [Infinity, 24],
      maxConstraints: [Infinity, innerHeight * 0.9],
      height: 300,
      width: Infinity,
      resizeHandles: ['s'],
    };
  }
  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default ResizableComponent;
