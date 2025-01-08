import { defineStore } from "pinia";
import axios from "axios";

export const useDataStore = defineStore("dataStore", {
  state: () => ({
    movies: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchData() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get("/files/data.json");

        this.movies = response.data.items;
        console.log("Movies fetched:", this.movies);
      } catch (error) {
        this.error = error.message || "An error occurred while fetching data";
        console.error("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },

    findMovieById(id) {
      const foundMovie = this.movies.find((movie) => movie.id == id);
      if (!foundMovie) {
        console.warn(`Movie with id ${id} not found`);
      }
      return foundMovie;
    },
  },
});
