// import { EmptyTask } from './EmptyTask';
import style from './ListTask.module.css'
import { EmptyTask } from './EmptyTask';

export function ListTask() {

    return (
        <div className={style.listTask}>
            <div className={style.info}>
                <div className={style.createdTasks}>
                    <label htmlFor="createdTasks">
                        Tarefas Criadas
                    </label>
                    <div className={style.badge}>0</div>
                </div>

                <div className={style.doneTasks}>
                    <label htmlFor="doneTasks">
                        Tarefas Concluídas
                    </label>
                    <div className={style.badge}>0 de 0</div>
                </div>
            </div>
            <EmptyTask/>
        </div>
    );
}