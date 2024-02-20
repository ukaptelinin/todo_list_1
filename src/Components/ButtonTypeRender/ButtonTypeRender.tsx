import style from "./ButtonTypeRender.module.css";
import { useContext, FC } from "react";
import { TodosStateContext, TodoRenderType } from "../../context";

const ButtonTypeRender: FC<{ typeRender: TodoRenderType, title: string }> = ({ typeRender, title }) => {
    const{ toggleRenderType } = useContext(TodosStateContext);
    const handleOnClick = () => {
        toggleRenderType(typeRender);
    };
      
    return ( 
        <button 
            className={style.type_button}
            onClick={handleOnClick}
        >
            {title}
        </button>
    );
};

export default ButtonTypeRender;