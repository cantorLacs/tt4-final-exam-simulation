
<script lang="ts">
  import TaskList from './lib/TaskList.svelte';
</script>

<main>
  <h1>Task Manager</h1>
  <TaskList />
</main>

<style>
  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
  }

  :global(body) {
    background-color: #f5f5f5;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
```
