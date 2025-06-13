
import React from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash } from 'lucide-react';
import { Task } from './TodoApp';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  return (
    <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 bg-white/50 hover:bg-white/80 transition-all duration-200 group hover:shadow-md">
      <Checkbox
        checked={task.completed}
        onCheckedChange={() => onToggle(task.id)}
        className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-600 data-[state=checked]:to-blue-600 data-[state=checked]:border-purple-600"
      />
      
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium transition-all duration-200 ${
          task.completed 
            ? 'line-through text-muted-foreground' 
            : 'text-gray-900'
        }`}>
          {task.text}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Added {task.createdAt.toLocaleDateString()}
        </p>
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => onDelete(task.id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-red-500 hover:text-red-700 hover:bg-red-50"
      >
        <Trash className="w-4 h-4" />
      </Button>
    </div>
  );
};
