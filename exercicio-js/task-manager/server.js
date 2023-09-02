const taskManager = {
  tasks: [
    {
      id: 1,
      title: "Comprar mantimentos",
      description: "Comprar itens para o jantar",
      deadline: "2023-07-30",
      completed: false,
    },
    {
      id: 2,
      title: "Estudar JavaScript",
      description: "Revisar funções e arrays",
      deadline: "2023-08-05",
      completed: false,
    },
    {
      id: 3,
      title: "Enviar relatório",
      description: "Enviar relatório de vendas do mês",
      deadline: "2023-07-31",
      completed: false,
    },
  ],
};

taskManager.tasks.push({
  id: 4,
  title: "Estudar Python",
  description: "Ler sobre os conceitos de Machine Learning",
  deadline: "2023-08-02",
  completed: false,
})


// taskManager.tasks[0] = {
//   id: 4,
//   title: "Estudar Python",
//   description: "Ler sobre os conceitos de Machine Learning",
//   deadline: "2023-08-02",
//   completed: false,
// }

function editTask(id, task){
  
  const taskIndex = taskManager.tasks.findIndex((item) => {
    return item.id === id
  })

  taskManager.tasks[taskIndex] = {
    id: task.id,
    title: task.title,
    description: task.description,
    deadline: task.deadline,
    completed: task.completed,
  }
}

editTask(1, {
  id: 4,
  title: "Estudar Python",
  description: "Ler sobre os conceitos de Machine Learning",
  deadline: "2023-08-02",
  completed: false,
})

console.log(taskManager);









