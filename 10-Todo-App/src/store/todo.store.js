import { Todo } from "../todos/models/todo.model";


const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending:'Pending'

}

const state = {
    todos:[
        new Todo('Piedra de alma'),
        new Todo('Piedra de infinito'),
        new Todo('Piedra de tiempo'),
    ],
    filter: Filters.All
}

const initStore = ()=>{
    console.log(state)
    console.log('initStore 🐱‍🐉')
}

export default {
    initStore,
}