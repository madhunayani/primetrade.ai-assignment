// frontend/src/components/tasks/TaskCard.jsx

import '../../styles/Tasks.css';

const TaskCard = ({ task, onEdit, onDelete, canDelete }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'status-completed';
      case 'In Progress':
        return 'status-in-progress';
      default:
        return 'status-pending';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'priority-high';
      case 'Medium':
        return 'priority-medium';
      default:
        return 'priority-low';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="task-card">
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <div className="task-badges">
          <span className={`badge ${getStatusColor(task.status)}`}>
            {task.status}
          </span>
          <span className={`badge ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </span>
        </div>
      </div>

      <p className="task-description">
        {task.description || 'No description provided'}
      </p>

      <div className="task-meta">
        <span className="task-due-date">
          📅 {formatDate(task.dueDate)}
        </span>
        {task.user && (
          <span className="task-owner">
            👤 {task.user.username}
          </span>
        )}
      </div>

      <div className="task-actions">
        <button className="btn-edit" onClick={() => onEdit(task)}>
          Edit
        </button>
        {canDelete && (
          <button className="btn-delete" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
