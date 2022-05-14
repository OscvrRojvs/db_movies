<template>
  <div>
    <h1>DB Movies</h1>
    <Input @getValue="getValueInput($event)" />
    <Card :dataMovieCard="dataMovies"/>
  </div>
</template>

<script>
import Input from '../components/Input.vue'
import Card from '../components/Card.vue'
import { getApiMovies } from '../services'
export default {
  name: "Index",
  components: {
    Input,
    Card
  },
  data() {
    return {
      dataMovies: []
    }
  },
  methods: {
    async getValueInput(event) {
      const string = event.replace(' ', '+')
      const response = await getApiMovies(string)
      this.dataMovies = response.Search
    }
  }
};
</script>

<style></style>
