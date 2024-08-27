const data = {
    tasks:[{
        text: "Grocery shopping",
        completed: true,
    },{
        text:"Clean yard",
        completed: false,
    },
    {
        text: "film Course",
        completed:false
    }
    ],

    getTaskTodo(){
    return this.tasks.filter(task =>task.completed !== true)
    }
}

// const getTaskToDO = (datas) =>{
//     return datas.filter(task => task.completed !== true)
// }