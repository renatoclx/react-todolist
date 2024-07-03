import { Trash } from 'phosphor-react';
import style from './Task.module.css'

export function Task() {

    return (
        <div className={style.task}>
            <div className={style.checkTask}>
                <div className={style.customCheck}>
                    <input type="checkbox" id="01" />
                    <div className={style.contentTask}>
                        <label className={style.contentTask} htmlFor="01">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis aliquam sint tenetur consequuntur nisi velit dicta rerum autem eveniet temporibus corporis quisquam sunt repudiandae voluptate, eum nam dolorem, illo repellat?</label>
                    </div>
                </div>
            </div>
            <div className={style.deleteTask}>
                <Trash size={24} />
            </div>
        </div>
    );
}