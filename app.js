let todo = [];

while(true){
    let func = prompt("Enter the function");
    if(func == "list"){
        console.log("The task are:");
        console.log("----------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("----------");
    }
    else if(func == "add"){
        let task = prompt("Enter the task needed to be added");
        todo.push(task);
        console.log("Task added");
        
    }
    else if(func == "delete"){
        let ind = prompt("which indexed task to delete")
            todo.splice(ind,1);
            console.log("Task Deleted");
    }
    else if(func == "quit"){
        console.log("quitting the todo");
        break;
    }

}