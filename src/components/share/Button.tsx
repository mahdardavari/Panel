import { FC } from "react";
import "./styles/Button.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  cls?: string | null;
}

const Button: FC<Props> = ({ children, cls, ...attributes }) => {
  return (
    <>
      <button className={`custom-btn primary ${cls}`} {...attributes}>
        {children}
      </button>
    </>
  );
};

export default Button;
