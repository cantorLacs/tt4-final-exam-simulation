<!-- TaskList.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    import { TaskService } from './TaskService';
    import type { Task } from './types';

    let tasks: Task[] = [];
    let newTaskTitle = '';
    let newTaskDescription = '';

    onMount(async () => {
        tasks = await TaskService.getTasks();
    });

    async function addTask() {
        if (!newTaskTitle.trim()) return;
        
        const task = await TaskService.createTask({
            title: newTaskTitle,
            description: newTaskDescription,
            completed: false
        });
        
        tasks = [...tasks, task];
        newTaskTitle = '';
        newTaskDescription = '';
    }

    async function toggleTask(task: Task) {
        const updatedTask = { ...task, completed: !task.completed };
        await TaskService.updateTask(updatedTask);
        tasks = tasks.map(t => t.id === task.id ? updatedTask : t);
    }

    async function deleteTask(id: number) {
        await TaskService.deleteTask(id);
        tasks = tasks.filter(t => t.id !== id);
    }
</script>

<div class="task-manager">
    <div class="add-task">
        <input
            bind:value={newTaskTitle}
            placeholder="Task title"
            class="input"
        />
        <input
            bind:value={newTaskDescription}
            placeholder="Task description"
            class="input"
        />
        <button on:click={addTask} class="button">Add Task</button>
    </div>

    <div class="task-list">
        {#each tasks as task (task.id)}
            <div class="task-item">
                <input
                    type="checkbox"
                    checked={task.completed}
                    on:change={() => toggleTask(task)}
                />
                <div class="task-content">
                    <h3 class:completed={task.completed}>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
                <button on:click={() => deleteTask(task.id)} class="delete-button">
                    Delete
                </button>
            </div>
        {/each}
    </div>
</div>

<style>
    .task-manager {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
    }

    .add-task {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }

    .input {
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        flex: 1;
    }

    .button {
        padding: 8px 16px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .button:hover {
        background-color: #45a049;
    }

    .task-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .task-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .task-content {
        flex: 1;
    }

    .completed {
        text-decoration: line-through;
        color: #888;
    }

    .delete-button {
        padding: 4px 8px;
        background-color: #f44336;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .delete-button:hover {
        background-color: #da190b;
    }
</style>