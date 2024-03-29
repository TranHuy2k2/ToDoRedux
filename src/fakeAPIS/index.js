import { createServer, Model } from "miragejs"

export const setUpServer = () => {
    let server = createServer({
        models: {
            todos: Model
        },
        routes() {
            this.get('/api/todos',(schema) => {
                return schema.todos.all();
            })
            this.post('/api/addtodo', (schema, request) => {
                const payload = JSON.parse(request.requestBody);
                return schema.todos.create(payload);
            })
            this.post('/api/updateTodo', (schema, request) => {

                const payload = JSON.parse(request.requestBody);
                const currentToDo = schema.todos.findBy({name: payload.name});
                currentToDo.update({completed: payload.completed});
                return currentToDo;
            })
            this.post('/api/deleteTodo', (schema, request) => {
                const payload = JSON.parse(request.requestBody);
                const currentToDo = schema.todos.findBy({name: payload});
                currentToDo.destroy();
                return currentToDo;
            })
        }
    });
    
}