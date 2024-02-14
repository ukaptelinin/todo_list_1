import style from "./TodoFooter.module.css";
import { useContext } from 'react';
import {TodosStateContext} from '../../context';

const TodoFooter = () => {
  const {itemsList} = useContext(TodosStateContext);
  if(itemsList.length > 0){
    return (
      <footer className={style.footer}>
             <p>Подвал</p>
      </footer>
    )
  }
}

export default TodoFooter;