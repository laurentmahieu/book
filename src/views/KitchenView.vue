<template>
  <v-row justify="center">
    <v-card
      width="300"
      v-for="(dish, i) in dishs"
      :key="`view-${i}`"
      class="ma-4 pointer"
      @click="redirectTo(dish.href)"
    >
      <v-img height="200" :src="dish.src" cover class="text-white" />
      <v-card-title class="text-center">
        {{ dish.title }}
      </v-card-title>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import pizzaImg from "@/assets/pizza.jpg";

export default defineComponent({
  name: "KitchenView",

  data() {
    return {
      dishs: [{ href: "/kitchen/pizza", src: pizzaImg, title: "Pizza" }],
    };
  },

  methods: {
    redirectTo(href: string) {
      this.$router.push(href);
      window.scrollTo(0, 0);
    },
  },
});
</script>
