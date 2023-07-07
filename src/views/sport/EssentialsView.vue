<template>
  <v-row justify="center">
    <v-card
      width="300"
      v-for="day in days"
      :key="`day-${day.id}`"
      class="ma-4 pointer"
      @click="redirectTo(day.id)"
    >
      <v-card-title class="text-center">
        {{ day.title }}
      </v-card-title>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ESSENTIAL_SESSIONS from "@/const/essentialsSessions";

export default defineComponent({
  name: "EssentialsView",
  data() {
    return {
      days: ESSENTIAL_SESSIONS,
    };
  },

  methods: {
    redirectTo(sessionId: number) {
      this.$router.push(`/sport/essentials/day/${sessionId}`);
      window.scrollTo(0, 0);
    },
  },
});
</script>
