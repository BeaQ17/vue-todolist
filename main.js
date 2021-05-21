const app = new Vue ({
    el: "#root",
    data:{
        newTask: "",
        tasks: [
            "First task",
            "Second task",
            "Third task"
        ],
        logoImg: "https://www.boolean.careers/images/misc/logo.png",
        completed: [

        ]
    },
    methods:{
        /*
        addTask(){
            if (task.length > 0) {
                this.tasks.push(this.newTask)
                this.newTask=""
            } else {
                alert("Please write out the task")
            }*/
            
        addTask(){
            this.tasks.push(this.newTask)
            this.newTask=""
        },
        deleteTask(index){
            console.log("Delete task " + index);
            this.tasks.splice(index, 1)
        },
        doneTask(index, task){
            this.completed.unshift(task)
            this.tasks.splice(index, 1)
        }
    }
});