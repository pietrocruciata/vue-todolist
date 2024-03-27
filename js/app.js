const { createApp } = Vue

createApp({
    data() {
        return {
            todos: [
                {
                    text: 'fare la spesa',
                    done: false
                },
                {
                    text: 'fare benzina',
                    done: true
                },
                {
                    text: 'tagliare i capelli',
                    done: false
                },
                {
                    text: 'prelevare',
                    done: false
                },
                {
                    text: 'passare da donato',
                    done: true
                }
            ]

        }



    },

    methods: {
        removeTodo(todo, i) {
            this.todos.splice(i, 1)
        },

        addTodo() {
            if (this.newTodo !== '') {
                this.newTodo = {
                    text: this.newTodo,
                    done: false
                };
                this.todos.push(this.newTodo)
                this.newTodo = ''
            } else {
                alert("inserisci una cosa da fare")
            }
        },

        done(todo) {
            if (todo.done === false) {
                todo.done = true
            } else {
                todo.done = false
            }
        }
    }

}).mount('#app')