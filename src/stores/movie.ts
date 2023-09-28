// Core
import { defineStore } from 'pinia'

// Types
import type { MovieType } from '@/types/Movie'
import type { SearchMovieResponseType, SearchMovieType } from '@/types/SearchMovies'

// Utils
import axios from '@/services/api'

export const useMovieStore = defineStore({
  id: 'movie',
  state: () => ({
    movie: null as MovieType | null,
    recommendations: null as SearchMovieType[] | null
  }),
  getters: {
    getMovie(): MovieType | null {
      return this.movie
    },
    getRecommendations(): SearchMovieType[] | null {
      return this.recommendations
    }
  },
  actions: {
    async fetchMovie(id: number) {
      try {
        const { data } = await axios.get<MovieType>(`/movie/${id}`)

        this.movie = {
          ...data,
          poster_path: data.poster_path
            ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
            : null,
          backdrop_path: data.backdrop_path
            ? `https://image.tmdb.org/t/p/w500${data.backdrop_path}`
            : null
        }
      } catch (error) {
        console.error('Error fetch movie: ', error)
      }
    },
    async fetchRecommendations(id: number) {
      try {
        const { data } = await axios.get<SearchMovieResponseType>(`/movie/${id}/recommendations`)

        console.log(data, 'here');

        this.recommendations = data.results.map((movie) => ({
          ...movie,
          poster_path: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : null
        }))

      } catch (error) {
        console.error('Error fetch movie: ', error)
      }
    }
  }
})
