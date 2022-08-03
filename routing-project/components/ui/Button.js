import style from "./Button.module.css";
import Link from "next/link";
const Button = ({ link, children,onClick }) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={style.btn}>{children}</a>
      </Link>
    );
  }
  else{
    return <button onClick={onClick} className={style.btn}>{children}</button>
  }
};

export default Button;
