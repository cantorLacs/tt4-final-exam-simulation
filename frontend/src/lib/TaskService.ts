import type { Task } from './types';

// When running in Docker, the nginx configuration will handle the proxy
const API_URL = '/api/tasks';

export const TaskService = {
    async getTasks(): Promise<Task[]> {
        const response = await fetch(API_URL);
        return response.json();
    },

    async createTask(task: Omit<Task, 'id'>): Promise<Task> {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        return response.json();
    },

    async updateTask(task: Task): Promise<void> {
        await fetch(`${API_URL}/${task.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
    },

    async deleteTask(id: number): Promise<void> {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
    }
};