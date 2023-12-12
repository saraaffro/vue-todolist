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
            error: false
        }
    },
    methods: {
        addTask(){
            if(this.taskMessage.text.length < 5){
                this.error = true;
            } else{
                this.todos.unshift(this.taskMessage);
                this.taskMessage = {
                    text: "",
                    done: "false"
                };
                this.error = false;
            }
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