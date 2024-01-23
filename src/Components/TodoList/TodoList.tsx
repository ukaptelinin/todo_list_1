import style from '../TodoList/TodoList.module.css';
import ListItem from './ListItem/ListItem';

const TodoList = () => {
    
 return (
    <div className={style.list}>
         <ListItem/>
    </div>
 )

}

export default TodoList;
