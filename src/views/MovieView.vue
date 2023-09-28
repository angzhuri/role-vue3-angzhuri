<script lang="ts">
// Core
import { defineComponent } from 'vue'

// Components
import SearchMovieCard from '@/components/common/SearchMovieCard/SearchMovieCard.vue'

// Types
import type { SearchMovieType } from '@/types/SearchMovies'

// Store
import { useMovieStore } from '@/stores/movie'

export default defineComponent({
  components: {
    SearchMovieCard
  },

  watch: {
    $route() {
      const id = Number(this.$route.params.id)
      this.getMovieById(id)
      this.getMovieRecommendationsById(id)
    }
  },

  computed: {
    movie() {
      return useMovieStore().movie
    },
    recommendations() {
      return useMovieStore().recommendations?.slice(0, 4)
    }
  },
  methods: {
    async getMovieById(id: number) {
      await useMovieStore().fetchMovie(id)
    },
    async getMovieRecommendationsById(id: number) {
      await useMovieStore().fetchRecommendations(id)
    },
    handleOpenMovie(movie: SearchMovieType) {
      this.$router.push({ name: 'movie', params: { id: movie.id } })
    }
  },
  async mounted() {
    const id = Number(this.$route.params.id)
    await this.getMovieById(id)
    await this.getMovieRecommendationsById(id)
  }
})
</script>

<template>
  <main class="page">
    <header class="header">
      <div class="back">
        <router-link to="/">Back to search</router-link>
      </div>
    </header>

    <div class="movie">
      <div class="movie__left">
        <div class="movie__poster">
          <img v-if="movie?.poster_path" :src="movie?.poster_path" :alt="movie?.title" />
        </div>
      </div>
      <div class="movie__right">
        <div class="movie__title">
          <h1>{{ movie?.original_title }}</h1>
        </div>
        <div class="movie__overview">
          <p>{{ movie?.overview }}</p>
        </div>

        <div class="movie__genres">
          <div class="movie__genres-title">Genres:</div>
          <div class="movie__genres-list">
            <div v-for="genre in movie?.genres" :key="genre.id" class="movie__genres-item">
              {{ genre.name }}
            </div>
          </div>
        </div>

        <div class="movie__release-date">
          <div class="movie__release-date-title">Release date:</div>
          <div class="movie__release-date-value">{{ movie?.release_date }}</div>
        </div>

        <div class="movie__vote-average">
          <div class="movie__vote-average-title">Vote average:</div>
          <div class="movie__vote-average-value">{{ movie?.vote_average }}</div>
        </div>

        <div class="movie__vote-count">
          <div class="movie__vote-count-title">Vote count:</div>
          <div class="movie__vote-count-value">{{ movie?.vote_count }}</div>
        </div>

        <div class="movie__popularity">
          <div class="movie__popularity-title">Popularity:</div>
          <div class="movie__popularity-value">{{ movie?.popularity }}</div>
        </div>

        <div class="movie__production-countries">
          <div class="movie__production-countries-title">Production countries:</div>
          <div class="movie__production-countries-list">
            <div
              v-for="country in movie?.production_countries"
              :key="country.iso_3166_1"
              class="movie__production-countries-item"
            >
              {{ country.name }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="recommendations">
      <div class="recommendations__title">
        <h2>Recommendations</h2>
      </div>
      <div class="recommendations__list">
        <div v-for="movie in recommendations" :key="movie.id" class="recommendations__item">
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

.back {
  a {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.15s ease-in-out;

    &:hover {
      color: #ccc;
    }
  }
}

.movie {
  display: flex;

  &__left {
    width: 30%;
  }

  &__right {
    width: 70%;
    padding: 20px;
  }

  &__poster {
    width: 100%;
    background-color: rgb(29, 0, 0);
    overflow: hidden;
    height: 600px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: top center;
      transition: transform 0.15s ease-in-out;
    }
  }

  &__title {
    margin-top: 20px;
    font-size: 24px;
    font-weight: 500;
    color: #fff;
  }

  &__overview {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
  }

  &__genres {
    margin-top: 20px;
    color: #fff;

    &-title {
      font-size: 18px;
      font-weight: 500;
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
    }

    &-item {
      padding: 5px 10px;
      margin-right: 10px;
      margin-bottom: 10px;
      background-color: rgb(29, 0, 0);
      border: 1px solid #fff;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 400;
    }
  }

  &__release-date {
    color: #fff;
    display: flex;
    align-items: center;

    &-title {
      font-size: 18px;
      font-weight: 500;
    }

    &-value {
      font-size: 14px;
      font-weight: 400;
      padding: 0 10px;
    }
  }

  &__vote-average {
    color: #fff;
    display: flex;
    align-items: center;

    &-title {
      font-size: 18px;
      font-weight: 500;
    }

    &-value {
      font-size: 14px;
      font-weight: 400;
      padding: 0 10px;
    }
  }

  &__vote-count {
    color: #fff;
    display: flex;
    align-items: center;

    &-title {
      font-size: 18px;
      font-weight: 500;
    }

    &-value {
      font-size: 14px;
      font-weight: 400;
      padding: 0 10px;
    }
  }

  &__popularity {
    color: #fff;
    display: flex;
    align-items: center;

    &-title {
      font-size: 18px;
      font-weight: 500;
    }

    &-value {
      font-size: 14px;
      font-weight: 400;
      padding: 0 10px;
    }
  }

  &__production-countries {
    color: #fff;
    margin-top: 25px;

    &-title {
      font-size: 18px;
      font-weight: 500;
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
    }

    &-item {
      padding: 5px 10px;
      margin-right: 10px;
      margin-bottom: 10px;
      background-color: rgb(29, 0, 0);
      border: 1px solid #fff;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 400;
    }
  }
}

.recommendations {
  margin-top: 50px;

  &__title {
    font-size: 24px;
    font-weight: 500;
    color: #fff;
  }

  &__list {
    display: flex;
    flex-flow: row wrap;
  }

  &__item {
    width: 25%;
    padding: 10px;
  }
}

@media (max-width: 768px) {
  .movie {
    flex-direction: column;

    &__left {
      width: 100%;
    }

    &__right {
      width: 100%;
    }

    &__poster {
      height: 400px;
    }

    &__title {
      font-size: 18px;
      line-height: 30px;
    }
  }
  .recommendations {
    &__item {
      width: 50%;
    }
  }
}
</style>
