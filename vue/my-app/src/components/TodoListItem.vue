<template>
  <div class="card">
    <div class="container">
      <h4>{{ todoItem.title }}</h4>
      <span style="fontStyle: 'italic'">{{ todoItem.description }} </span>
      <div>Luotu: {{ todoItem.createdAt.toLocaleString() }}</div>
      <div>{{ todoItem.done ? 'Tehty' : 'Kesken' }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /**@type{{new():import('../api/todotype').TodoItem)}} todoItem */
    todoItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: fit-content;
  padding: 10px;
  background-color: white;
  border-radius: 5px; /* 5px rounded corners */

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0px 0px 16px 5px rgba(0, 0, 0, 0.5);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

h4 {
  margin: 5px;
  padding: 0px;
}
</style>
