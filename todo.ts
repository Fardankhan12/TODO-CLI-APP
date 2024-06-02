import inquirer from "inquirer";

let list = [];
  while (true) {
    const option = await inquirer.prompt({
      name: "action",
      type: "list",
      message: "Enter the task you wanna do",
      choices: ["ADD_TASK", "REMOVE_TASK", "EXIT"]
    });

    if (option.action === "ADD_TASK") {
      const add = await inquirer.prompt({
        name: "add",
        type: "input",
        message: "Enter the task you wanna add"
      });
      list.push(add.add);
      console.log(`Task added: ${add.add}`);
    } else if (option.action === "REMOVE_TASK") {

        const remove = await inquirer.prompt({
          name: "remove",
          type: "list",
          message: "Select the task to remove",
          choices: list
        });
        const index = list.indexOf(remove.remove);
        if (index!== -1) {
          list.splice(index, 1);
          console.log(`Task removed: ${remove.remove}`);
        } else {
          console.log("Task not found");
        }
      }
      else if (option.action === "EXIT") {
      console.log("Exiting...");
        break;
    } 
  }
