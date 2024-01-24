import style from "./TodoFooter.module.css";
import { useContext } from 'react';
import {MainContext} from '../../context';

const TodoFooter = () => {
  const {itemsList} = useContext(MainContext);
  if(itemsList.length > 0){
    return <div className={style.Footer}>
             <p>Подвал</p>
           </div>
  }
}

export default TodoFooter;