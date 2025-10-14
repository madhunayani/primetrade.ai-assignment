// frontend/src/components/tasks/TaskList.jsx

import { useAuth } from '../../context/AuthContext';
import TaskCard from './TaskCard';
import '../../styles/Tasks.css';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const { isAdmin } = useAuth();

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tasks found</h3>
        <p>Create your first task to get started!</p>
      </div>
    );
  }

  return (
    <div className="tasks-grid">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          canDelete={isAdmin}
        />
      ))}
    </div>
  );
};

export default TaskList;
