import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((item) => (
        <Task
          key={item.id}
          task={item}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

// Beim map() ist es wichtig, dass jedes child, das dadurch kreiert wird, einen einzigartigen key hat, deshalb key={item.id} oder den uuid verwenden bei extrem großen Datensätzen.

export default Tasks;
