const app = new Vue ({
    el: "#root",
    data:{
        newTask: "",
        tasks: [
            "First task",
            "Second task",
            "Third task"
        ],
        logoImg: "https://www.boolean.careers/images/misc/logo.png"
    },
    methods:{
        addTask(){
            this.tasks.push(this.newTask)
            this.newTask=""
        },
        deleteTask(index){
            console.log("Delete task " + index);
            this.tasks.splice(index, 1)
        }
    }
});