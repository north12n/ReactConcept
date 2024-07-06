import Logo from "../image/logo.jpg";
import "./Header.css";

//รับ props มาจาก component App
//กระจายค่าออกมา title, major



export default function Header(pros) {
  const {title, major} = pros;
  return (
    <nav>
      <img src={Logo} alt="logo" className="logo" />
      <a href="/">{title} {major}</a>
    </nav>
  );
}