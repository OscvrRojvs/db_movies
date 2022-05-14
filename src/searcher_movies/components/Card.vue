<template>
  <div>
    <b-card-group deck>
      <div v-for="item in dataMovieCard" :key="item.id">
        <b-card
          :title="item.Title"
          :img-src="item.Poster"
          :img-alt="item.Title"
          img-top
          tag="article"
          style="max-width: 15rem"
          class="mb-2"
        >
          <b-card-text>
            <p>Año: {{ item.Year }}</p>
            <p>Tipo: {{ item.Type }}</p>
          </b-card-text>
        </b-card>
      </div>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    dataMovieCard: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
