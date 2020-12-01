function todolist() {
    const todo = [];
    let newItem = null;   
    let removeIndex = null; 
    while (action !== "quit") {
        var action = prompt("What would you like to do?");
            if (action.toLowerCase() === "new"){
                while (newItem === null || newItem.trim() === "" || newItem.trim() === " ") {
                    newItem = prompt("What todo item do you want to add?");
                }
                todo.push(newItem.trim());
                console.log(`${newItem.trim()} is added to the list`);
                console.log("**************")
                for (let item of todo) {
                    console.log(`${todo.indexOf(item)}: ${item}`);
                }
                console.log("**************")
                newItem = null;
            } else if (action.toLowerCase() === "list") {
                console.log("**************")
                for (let item of todo) {
                    console.log(`${todo.indexOf(item)}: ${item}`);
                }
                console.log("**************")
            } else if  (action.toLowerCase() === "delete") {
                removeIndex = prompt("Which item to remove? (input number)")
                console.log(`${todo[removeIndex]} removed`);
                todo.splice(removeIndex,1);
                console.log("**************")
                for (let item of todo) {
                    console.log(`${todo.indexOf(item)}: ${item}`);
                }
                console.log("**************")
            } else if (action.toLowerCase() === "quit") {
                console.log("QUIT");
            }
    }
}


