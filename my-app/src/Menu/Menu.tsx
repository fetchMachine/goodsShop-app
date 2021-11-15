import css from "./styles.module.css";
import { Link } from 'react-router-dom';
export const Menu: React.FC = () =>{
return(
    <ul className={css.menu}>
        <li ><Link to="./"> Меню </Link></li>
    </ul>
)
}