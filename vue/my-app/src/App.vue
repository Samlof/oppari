<template>
  <div id="app">
    <AddItemComponent v-on:new-added="newAdded"></AddItemComponent>
    <TodoListItemComponent
      v-for="item in items"
      :key="item.id"
      :todoItem="item"
    ></TodoListItemComponent>
  </div>
</template>

<script>
import TodoListItemComponent from './components/TodoListItem';
import AddItemComponent from './components/AddItem';
import { GetAll, DemoInit, AddItem } from './api/localStorage';

export default {
  name: 'App',
  data: () => ({
    items: /** @type {import('./api/todotype').TodoItem[]} */ ([]),
  }),
  components: {
    TodoListItemComponent,
    AddItemComponent,
  },
  created() {
    this.items = GetAll();
    if (this.items.length === 0) {
      DemoInit();
    }
    this.items = GetAll();
  },
  methods: {
    newAdded: function(title, description) {
      AddItem({ title, description, done: false });
      this.items = GetAll();
    },
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
