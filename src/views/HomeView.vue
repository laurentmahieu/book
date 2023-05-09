<script lang="ts">
import { defineComponent } from "vue";
// Const
import VIEWS from "@/const/views";

export default defineComponent({
  name: "HomeView",

  data() {
    return { VIEWS };
  },

  methods: {
    redirectTo(href: string) {
      this.$router.push(href);
    },
  },
});
</script>

<template>
  <v-row justify="center">
    <v-card
      width="250"
      v-for="(view, i) in VIEWS"
      :key="`view-${i}`"
      class="ma-4 pointer"
      @click="redirectTo(view.href)"
    >
      <v-img height="200" :src="view.src" cover class="text-white" />
      <v-card-title class="text-center">
        {{ view.title }}
      </v-card-title>
    </v-card>
  </v-row>
</template>
