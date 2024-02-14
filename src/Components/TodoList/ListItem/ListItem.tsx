import style from "./ListItem.module.css";
import {useContext} from "react";
import {TodosStateContext} from "../../../context";
import TodoButton from "../../TodoButton/TodoButton";



const ListItem = ()=>{

const {itemsList} = useContext(TodosStateContext);
const todoElements  = itemsList.map((item) =>{ 
  let {id,text} = item;
  return (<li key = {id} className={style.list_item}>
    <TodoButton symbol ={"V"}/>
    <p className={style.item_text}>{text}</p>
    <TodoButton symbol ={"X"}/></li>)});

if(itemsList.length > 0){
  
 return (
         <ul className={style.listItem}>
           {todoElements}
         </ul>
 )
 }
}

export default ListItem;