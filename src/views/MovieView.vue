<template>
  <VRow
    id="scroll-target"
    v-scroll:#scroll-target="onScroll"
    style="height: calc(100vh - 70px); width: 100vw"
    class="overflow-y-auto"
  >
    <VCol
      v-for="movie in movies"
      :key="movie.id"
      :cols="12"
      :sm="6"
      :md="3"
      :lg="2"
      class="pa-0"
    >
      <VImg
        :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
        class="main-img"
        cover
        height="100%"
        :alt="movie.title"
      />
    </VCol>
  </VRow>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Services
import movieApiService from "@/services/movie";

export default defineComponent({
  name: "MovieView",

  data() {
    return {
      movies: [],
      offsetTop: 0,
      page: 0,
      isloading: false,
    };
  },

  mounted() {
    this.getMovies(1);
    this.getMovies(2);
  },

  methods: {
    async getMovies(page: number) {
      try {
        this.isloading = true;

        const res = await movieApiService.getMovies(page);

        res.forEach((element) => {
          this.movies.push(element);
        });

        this.page = this.page + 1;
      } catch (error) {
        console.log("error: ", error);
      } finally {
        this.isloading = false;
      }
    },

    onScroll(e) {
      const topMax = e.target.scrollTopMax;
      const top = e.target.scrollTop;
      console.log("topMax - top < 500: ", topMax - top < 500);
      if (topMax - top < 500 && !this.isloading) {
        this.getMovies(this.page + 1);
      }
    },
  },
});
</script>

<style lang="css">
.main-img:hover {
  transform: scale(1.05);
  transition: transform 700ms;
  box-shadow: 0px 0 20px 10px rgb(15, 15, 15);
  cursor: pointer;
  z-index: 999;
}
</style>
