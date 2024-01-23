import { useState } from 'react';

function useTodoListState() {
    const [inputValueCopy,setInputValueCopy] = useState<string>('');
    const [inputValue, setInputValue] = useState<string>('');
    const [itemsList, setItemsList] = useState<string[]>(['Погулять с собакой Погулять с собакой Погулять с собакой Погулять с собакой','Съездить в маркет', 'Сыграть в шахматы'])

    

      const handleSubMit =(event: React.FormEvent<HTMLFormElement>) => {
          
            event.preventDefault();
            setInputValueCopy(inputValue);
            setInputValue('');   
     }  

     const handleOnChange = (event:React.FormEvent<HTMLFormElement>) => {
          setInputValue(event.currentTarget.value);
     }

     return {
        handleSubMit,
        handleOnChange,
        inputValue,
        inputValueCopy,
        itemsList,
        
     }
}

export default useTodoListState;