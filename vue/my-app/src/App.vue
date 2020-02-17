<template>
  <div id="app">
    <TodoListItem
      v-for="item in items"
      :key="item.id"
      :todoItem="item"
    ></TodoListItem>
  </div>
</template>

<script>
import TodoListItem from './components/TodoListItem';
import { GetAll, DemoInit } from './api/localStorage';

export default {
  name: 'App',
  data: () => ({
    items: /** @type {import('./api/todotype').TodoItem[]} */ ([]),
  }),
  components: {
    TodoListItem,
  },
  created() {
    DemoInit();
    this.items = GetAll();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: lightgray;
}
</style>
