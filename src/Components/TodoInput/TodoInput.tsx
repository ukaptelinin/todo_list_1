import style from './TodoInput.module.css';
import { useContext,useRef } from 'react';
import {MainContext} from '../../context';



const TodoInput = () => {

    const {itemsList,setItemsList} = useContext(MainContext);
    const textRef = useRef();


    const handleSubMit = (event:React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
       let itemsListCopy:string[] = itemsList.slice();
       itemsListCopy.unshift(textRef.current.value);
       textRef.current.value = '';
       setItemsList(itemsListCopy);
    }

   return (
    <div>
        <form onSubmit={handleSubMit}>
            <input name = 'text'
            ref = {textRef}
            className={style.todoinput}  
            placeholder='Что надо сделать?'>
            </input>
        </form>
        
    </div>
   )
}

export default TodoInput;