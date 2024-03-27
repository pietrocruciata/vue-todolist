const { createApp } = Vue

createApp({
    data() {
        return {
            todos: [],
            newTodo:''
        }
    },

// TOGLIERE IL LIST ITEM SUL CLICK SELLA X
    methods: {
        removeTodo(todo, i) {
            this.todos.splice(i, 1)
        },

        //CREARE UN NUOVO ARRAY DOVE PUSCHARE QUELLO CHE SCRIVE L'UTENTE NELL'INPUT
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

        // CAMBIARE LO STATO DA TRUE A FALSE E VICEVERSA PER SBARRARE IL LIST ITEM AL CLICK SU DI ESSO
        done(todo) {
            if (todo.done === false) {
                todo.done = true
            } else {
                todo.done = false
            }
        }
    }

}).mount('#app')