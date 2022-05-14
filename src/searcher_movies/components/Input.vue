<template>
  <div>
    <b-input-group class="mt-3" size="lg">
      <b-form-input placeholder="Buscar una película" v-model="value"></b-form-input>
      <b-input-group-append>
        <b-button variant="success" @click="emitValueInput">Buscar Pelicula</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
      return {
          value: ''
      }
  },
  methods: {
      emitValueInput() {
          this.$emit('getValue', this.value)
      }
  }
};
</script>

<style></style>
