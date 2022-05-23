const app = new Vue({
    el: "#root",
    data: {
        todos: [
            'andare in piscina',
            'comprare la macchina',
            'cucinare da mangiare',
            'fare la doccia',
            'andare a dormire',
        ],
        addTodo: "",
    },
    methods: {
        pushTodo(){
            if(this.addTodo !== ""){
                this.todos.push(this.addTodo);
                this.addTodo = "";
            }
        },
        remove(index){
            this.todos.splice(index, 1);
        }
    },
});