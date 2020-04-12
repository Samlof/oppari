<template>
  <div class="card">
    <div class="container">
      <h4>Luo uusi</h4>
      <form v-on:submit.prevent="formSubmitted">
        <div>
          <label for="name">
            Title
          </label>
          <input id="title" type="text" v-model.trim="title" />
        </div>

        <div>
          <label for="address">
            Description
          </label>
          <input id="description" type="text" v-model.trim="description" />
        </div>
        <button class="button" type="submit">Lisää</button>
      </form>
    </div>
  </div>
</template>

<script>
/**
 * TodoListItem
 */
export default {
  data: function() {
    return {
      title: '',
      description: '',
    };
  },
  methods: {
    formSubmitted: function() {
      this.$emit('new-added', this.title, this.description);
      this.title = '';
      this.description = '';
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
