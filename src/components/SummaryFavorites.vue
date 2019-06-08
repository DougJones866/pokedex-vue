<template>
  <div>
    <h2>Your chosen Pokemon</h2>
    <p v-if="favoriteListLength < maximumList">
       <button
        class="nes-btn is-success"
        @click="startInterval"
      >
        Random
      </button>
    </p>
    <template>
      <p
        v-for="(pokemonName, index) in favorites"
        :key="index"
        class="chosen-pokemon"
      >
        <img
          src="../assets/pokeball.png"
          alt="pokeball"
        >
        {{ pokemonName }}
      </p>
    </template>
    <p v-if="favoriteListLength > 1 && favoriteListLength < maximumList">
      You can add {{ maximumList - favoriteListLength }} more Pokémon
    </p>
    <p v-if="favoriteListLength > 6">
      Your list is full!
    </p>
    <p v-if="favoriteListLength > 0">
            <button
        class="nes-btn is-error"
        @click="emptyFavoritePokemonList"
      >
        Empty
      </button>
    </p>
    <router-link
      v-if="favoriteListLength > 0"
      class="nes-btn"
      to="/favorites"
    >
      View Selection
    </router-link>
  </div>
</template>

<script>
    export default {
        name: 'SummaryFavorites',
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
        data: function() {
            return {
                maximumList: 6
            }
        },
        computed: {
            favoriteListLength() {
                return this.favorites.length
            }
        },
        methods: {
          startInterval() {
            const self = this
            const intervalID = window.setInterval(pickRandomPokemonOrClearInterval, 500)
            function pickRandomPokemonOrClearInterval() {
              if(self.favoriteListLength < self.maximumList) {
                self.pickRandomPokemon()
              } else {
                clearInterval(intervalID)
              }
            }

          },
          pickRandomPokemon() {
            const list = this.pokemonList.filter(function(pokemon){
              return !this.favorites.includes(pokemon.name)
            }, this)
            
            const number = Math.floor(Math.random() * Math.floor(list.length))
            this.$emit('addFavorite', list[number].name)
          },
          emptyFavoritePokemonList() {
            this.$emit('eraseFavoritePokemonList')
          }
        }
    }
</script>

<style scoped>
.chosen-pokemon {
    text-transform: capitalize;
    
}
.nes-btn{
  

}

</style>