// Core
import { defineStore } from 'pinia'

// Types
import type { SearchMovieType, SearchMoviePaginationType, SearchMovieResponseType } from '@/types/SearchMovies'

// Utils
import axios from '@/services/api'

export const useSearchMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    movies: [] as SearchMovieType[],
    pagination: {
      page: 1,
      total_pages: 0,
      total_results: 0
    }
  }),
  getters: {
    getMovies(): SearchMovieType[] {
      return this.movies
    },
    getPagination(): SearchMoviePaginationType {
      return this.pagination
    }
  },
  actions: {
    async fetchMovies(searchValue: string) {
      try {
        const { data } = await axios.get<SearchMovieResponseType>('search/movie', {
          params: {
            query: searchValue
          }
        })
        this.movies = data.results.map((movie) => ({
          ...movie,
          poster_path: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : null
        }))

        this.pagination = {
          page: data.page,
          total_pages: data.total_pages,
          total_results: data.total_results
        }
      } catch (error) {
        console.error('Error search movies: ', error)
      }
    }
  }
})
