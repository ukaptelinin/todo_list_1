import { FC } from 'react';
import style from './TodoHeader.module.css';

const TodoHeader: FC = () => (
    <header className={style.header}>
        <h1>Список дел</h1>
    </header>
);

export default TodoHeader;
