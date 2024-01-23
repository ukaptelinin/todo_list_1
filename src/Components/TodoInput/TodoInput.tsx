import style from './TodoInput.module.css';
import { useState,useContext } from 'react';
import {MainContext} from '../../context';



const TodoInput = () => {

    /*const {
    handleOnChange
    } = useTodoListState();*/
    const {itemsList,setItemsList} = useContext(MainContext);
    const [inputValue, setInputValue] = useState<string>('');

    const handleOnChange = (event:React.FormEvent<HTMLFormElement>) => {
        setInputValue(event.currentTarget.value);
   }

    const handleSubMit = (event:React.FormEvent<HTMLFormElement>) => {
       let itemsListCopy:string[] = itemsList.slice();
       itemsListCopy.unshift(inputValue);
       setInputValue('');
       setItemsList(itemsListCopy);
    }

   return (
    <div>
        <form onSubmit={handleSubMit}>
            <input name = 'text'
            onChange={handleOnChange} 
            className={style.todoinput}  
            placeholder='Что надо сделать?'>
            </input>
        </form>
        
    </div>
   )
}

export default TodoInput;