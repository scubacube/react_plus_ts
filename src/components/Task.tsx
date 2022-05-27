import React from 'react'

interface Task {
    id: number;
    name: string;
    description: string;
}

interface Props {
    task: Task;
}

const Task: React.FC<Props> = ({task}) => {
    return (
        <li>
            <h2>{task.name}</h2>
            <p>{task.description}</p>
        </li>
    );
}

export default Task;