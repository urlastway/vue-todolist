const app = new Vue({
    el: "#root",
    data: {
        todos: [
            {
            text: 'andare in piscina',
            done: false,
        },
        {    
            text:'comprare la macchina',
            done: false,
        },
        {    
            text: 'cucinare da mangiare',
            done: false,
        },
        ],
        addTodo: "",
        currentIndex: 0, 
    },
    methods: {
        pushTodo(){
            if(this.addTodo !== ""){
                const addTodo = {
                    text: this.addTodo,
                    done: false,
                };
                this.todos.push(addTodo);
                this.addTodo = "";
            }
        },
        remove(index){
            this.todos.splice(index, 1);
        },
    },
});