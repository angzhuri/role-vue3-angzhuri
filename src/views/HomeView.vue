<script lang="ts">
// Core
import { defineComponent } from 'vue'

// Components
import CustomInput from '@/components/ui/CustomInput/CustomInput.vue'
import SearchMovieCard from '@/components/common/SearchMovieCard/SearchMovieCard.vue'

// Types
import type { SearchMovieType } from '@/types/SearchMovies'

// Store
import { useSearchMoviesStore } from '@/stores/searchMovies'

export default defineComponent({
  components: {
    CustomInput,
    SearchMovieCard
  },
  data() {
    return {
      searchValue: ''
    }
  },
  watch: {
    searchValue(newValue) {
      this.getMoviesByValue(newValue)
    }
  },
  computed: {
    movies() {
      return useSearchMoviesStore().movies
    }
  },
  methods: {
    async getMoviesByValue(value: string) {
      await useSearchMoviesStore().fetchMovies(value)
    },
    handleOpenMovie(movie: SearchMovieType) {
      this.$router.push({ name: 'movie', params: { id: movie.id } })
    }
  },
  async mounted() {
    await this.getMoviesByValue('star wars')
  }
})
</script>

<template>
  <main class="page">
    <header class="header">
      <CustomInput v-model="searchValue" placeholder="Search movie by title..." />
    </header>

    <div class="movies">
      <div class="movies__list">
        <div v-for="movie in movies" :key="movie.id" class="movies__item">
          <SearchMovieCard :movie="movie" @open="handleOpenMovie" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.page {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  padding: 20px;
}

.movies {
  &__list {
    display: flex;
    flex-flow: row wrap;
  }
  &__item {
    width: 20%;
    padding: 10px;
  }
}

@media (max-width: 768px) {
  .movies {
    &__item {
      width: 50%;
    }
  }
}
</style>
