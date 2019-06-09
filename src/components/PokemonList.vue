<template>
  
  <div class="pokemon-list">
    <h2>Select up to six pokemon</h2>
    <h6>Credit <a href="https://github.com/littlemousey">Littlemousey</a></h6>
    <p v-for="(pokemon, index) in pokemonList" :key="pokemon.url" class="pokemon-list-item">
      <a
        v-show="!favorites.includes(pokemon.name)"
        class="nes-btn"
        :class="{ 'is-disabled': favoriteListLength === 6 }"
        @click="setFavorites(pokemon.name)"
      >{{ index + 1 + '. ' }} {{ pokemon.name }}</a>

      <button
        v-show="favorites.includes(pokemon.name)"
        class="nes-btn is-error"
        @click="setFavorites(pokemon.name)"
      >Remove</button>

      <img
        :key="pokemon.url"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +1}.png` "
        alt="Pokemon`"
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "PokemonList",
  props: {
    pokemonList: {
      type: Array,
      required: true
    },
    favorites: {
      type: Array,
      required: true
    }
  },
  computed: {
    favoriteListLength() {
      return this.favorites.length;
    }
  },
  methods: {
    setFavorites(name) {
      if (this.favorites.includes(name)) {
        const indexInArray = this.favorites.indexOf(name);
        this.$emit("deleteFavorite", indexInArray);
        return;
      }
      if (this.favoriteListLength < 10) {
        this.$emit("addFavorite", name);
      }
    }
  }
};
</script>

<style scoped>
.h6 {
  float: right;
}

.pokemon-list {
  text-transform: capitalize;
}

.pokemon-list-item {
  display: grid;
  float: left;
  margin: 15px;
}
</style>
