const {createApp} = Vue;

createApp({
    data(){
        return{
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ],
            taskMessage: {
                text: "",
                done: false
            },
        }
    },
    methods: {
        addTask(){
            this.todos.unshift(this.taskMessage);
            this.taskMessage = "";
        },
        removeTask(index){
            this.todos.splice(index, 1);
        },
        changeDone(i){
            if(this.todos[i].done === true){
                this.todos[i].done = false;
            } else{
                this.todos[i].done = true;
            }
        }
    }
}).mount("#app")