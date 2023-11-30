import { FC, MouseEvent, useState } from "react";
import "./styles/Button.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FC<Props> = ({ children, ...attributes }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleEffect = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setPosition({ top: clientY, left: clientX });
  };

  return (
    <>
      <button className="button" onMouseEnter={handleEffect} {...attributes}>

        <span className="btnTxt ">{children}</span>
        <span
          style={{ top: position.top, left: position.left }}
          className="btnBg"
        ></span>
      </button>
    </>
  );
};

export default Button;
