import { useState } from 'react';

function useTodoListState() {
    const [value, setValue] = useState('');
    const [itemsList, setItemsList] = useState<string[]>(['Погулять с собакой','Съездить в маркет', 'Сыграть в шахматы'])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
      }

      const handleKeyPress =(event: React.KeyboardEvent<HTMLDivElement>) => {
        if(event.key === "Enter") 
        {
           alert(value)
        }
     }  

     return {
        value,
        handleChange,
        handleKeyPress,
        itemsList
     }
}

export default useTodoListState;