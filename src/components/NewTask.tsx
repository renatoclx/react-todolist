import style from './NewTask.module.css'
import { PlusCircle } from 'phosphor-react';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>;
//type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>

export function NewTask({...input}: InputProps, value: string, addTask: any) {
    return (
        <div className={style.addTask}>
            <input 
                type="text" 
                placeholder='Adicione uma tarefa'
                value={value}
                {...input}
            />
            <button onClick={addTask}>
                Criar&nbsp;
                <PlusCircle size={28} weight='bold'/>
            </button>
        </div>
    );
}