import style from './EmptyTask.module.css'
import { ClipboardText } from 'phosphor-react';

export function EmptyTask() {
    return(
        <div className={style.tasks}>
            <ClipboardText size={56}/>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    );
}