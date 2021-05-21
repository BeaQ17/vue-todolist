const app = new Vue ({
    el: "#app",
    data:{
        newTask: "",
        tasks: [
            "First task",
            "Second task",
            "Third task"
        ]
    },
    methods:{
        addTask(){
            this.tasks.push(this.newTask)
        },
    }
});