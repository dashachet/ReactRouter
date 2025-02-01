import React from 'react';

type SuperTodolistProps={
    tasks: TaskProps[]
    children: React.ReactNode
}
type TaskProps= {
    id: number
    title: string
    isDone: boolean
}
export const SuperTodolist:React.FC<SuperTodolistProps> = (props) => {
    const{tasks,children,...restProps}=props
    return (
        <div>
            <ul>
                {tasks.map(el=>{
                    return(
                        <li>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <input type="checkbox" checked={el.isDone} />
                        </li>
                    )
                })}
            </ul>
            {children}
            <hr/>
        </div>
    );
};

