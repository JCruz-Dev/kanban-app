const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Take out the garbage'},
        'task-2': { id: 'task-2', content: 'Watch my favorite Movie'},
        'task-3': { id: 'task-3', content: 'Charge my phone'},
        'task-4': { id: 'task-4', content: 'Cook dinner'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'todo',
            taskIds: ['task-1','task-2','task-3', 'task-4']
        }
    },
    columnOrder: ['column-1']
    
}

// {
//     "todo": [
//         {
//             "id": "1",
//             "assignee": "jcruz",
//             "date": "12321312312312",
//             "title": "Tarea para todo 1",
//             "description": "description tarea 1",
//             "tag": "long form"
//         },
//         {
//             "id": "2",
//             "assignee": "jcruz",
//             "date": "12321312312312",
//             "title": "Tarea para todo 2",
//             "description": "description tarea 2",
//             "tag": "long form"
//         },
//         {
//             "id": "3",
//             "assignee": "jcruz",
//             "date": "12321312312312",
//             "title": "Tarea para todo 3",
//             "description": "description tarea 1",
//             "tag": "long form"
//         },
//         {
//             "id": "4",
//             "assignee": "jcruz",
//             "date": "12321312312312",
//             "title": "Tarea para todo 4",
//             "description": "description tarea 4",
//             "tag": "long form"
//         }
//     ],
//     "progress": [{}],
//     "done": [{}]
// }
export default initialData;