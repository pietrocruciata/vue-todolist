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
        }
    }

}).mount('#app')