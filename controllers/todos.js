import { Todo } from '../models/todo.js'

class todoController {
    constructor (){
        this.TODOS = []
    }
    createTodo(req, res){
        //get data from POST request
        const task = req.body.task
        //loo läbi ToDo mudeli uus objekt
        //mudeli konstructor kasutab unik id ja nime taski parameetrina
        const newToDo = new Todo(Math.random().toString(), task)
        //lisa uus todo nende massiivi
        this.TODOS.push(newToDo)
            //loo vastus
            res.json({
                message: 'created new todo object',
                newTask: newToDo
            })
        
    }
}
export const TodoController = new todoController()