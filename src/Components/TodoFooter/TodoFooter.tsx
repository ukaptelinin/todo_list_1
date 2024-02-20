import style from "./TodoFooter.module.css";
import { useContext } from "react";
import { TodosStateContext } from "../../context";
import ButtonTypeRender from "../ButtonTypeRender/ButtonTypeRender";
import ButtonClearTodoList from "../ButtonClearTodoList/ButtonClearTodoList";

const TodoFooter = () => {
  const { itemsList } = useContext(TodosStateContext);
  if(itemsList.length > 0){
    return (
      <footer className = {style.footer}>
            <div className = {style.item_number}>
                1 item
            </div>
          <div className = {style.buttons_block}>
              <ButtonTypeRender typeRender = "ALL" title="ALL"/>
              <ButtonTypeRender typeRender = "ACTIVE" title="Active"/>
              <ButtonTypeRender typeRender = "COMPLETED" title="Completed"/>
          </div>
          <div className={style.reset_button}>
              <ButtonClearTodoList/>
          </div> 
      </footer>
    )
  }
}

export default TodoFooter;