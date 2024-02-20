import style from "./ListItem.module.css";
import { useContext } from "react";
import { TodosStateContext } from "../../../context";
import TodoDeleteButton from "../../TodoDeleteButton/TodoDeleteButton";
import TodoDoneToggle from "../../TodoDoneToggle/TodoDoneToggle";

const ListItem = ()=>{
const { itemsList } = useContext(TodosStateContext);
const todoElements  = itemsList.map((item) =>{ 
    let {id,text,isDone} = item;
    let doneStyle;
    if(!isDone){
        doneStyle = style.item_text;
     } else {
        doneStyle = style.item_text + ' ' + style.item_text_is_done;
    }

    return (<li key = {id} className={style.list_item}>
               <TodoDoneToggle id = {id} isDone = {isDone}/>
               <p className={doneStyle}>{text}</p>
               <TodoDeleteButton id = {id} symbol ={"X"}/></li>)});
    if(itemsList.length > 0){
        return (
            <ul 
                className={style.list_items}>
                {todoElements}
            </ul>
        )
    }
}

export default ListItem;