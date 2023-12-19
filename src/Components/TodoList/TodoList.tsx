import style from '../TodoList/TodoList.module.css';
import useTodoListState from '../../Store/store';

const TodoList = () => {
    const {
        itemsList
    } = useTodoListState();

    let todoElements = itemsList.map( (item) =>{ return (`<p>${item}</p>`)});
 return (
    <div className={style.list}>
         {todoElements}
    </div>
 )

}

export default TodoList;
