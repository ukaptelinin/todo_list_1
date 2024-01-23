import style from './ListItem.module.css';
import { useContext } from 'react';
import {MainContext} from '../../../context';



const ListItem = ()=>{

 const {itemsList} = useContext(MainContext);
let todoElements  = itemsList.map( (item:string) =>{ return (<p>{item}</p>)});


 return (
<div className={style.listItem}>
  {todoElements}
</div>
 )

}

export default ListItem;