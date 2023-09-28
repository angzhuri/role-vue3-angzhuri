<script lang="ts">
// Core
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

// Types
import type { SearchMovieType } from '@/types/SearchMovies'

export default defineComponent({
  name: 'MovieCard',
  props: {
    movie: {
      type: Object as PropType<SearchMovieType>,
      required: true
    }
  },
  methods: {
    handleOpenMovie() {
      this.$emit('open', this.movie)
    }
  }
})
</script>

<template>
  <div class="movie-card">
    <div class="movie-card__poster" @click="handleOpenMovie">
      <img v-if="movie.poster_path" :src="movie.poster_path" :alt="movie.title" />
    </div>
    <div class="movie-card__title">{{ movie.title }}</div>
    <div class="movie-card__release-date">{{ movie.release_date }}</div>
  </div>
</template>

<style lang="scss" scoped>
.movie-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__poster {
    width: 100%;
    height: 450px;
    background-color: rgb(29, 0, 0);
    cursor: pointer;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: top center;
      transition: transform 0.15s ease-in-out;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }

  &__title {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }

  &__release-date {
    margin-top: 5px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
  }

}
</style>
