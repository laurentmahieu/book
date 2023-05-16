<template>
  <v-row justify="center">
    <v-card
      width="300"
      v-for="session in NFC_SESSIONS"
      :key="`session-${session.id}`"
      class="ma-4 pointer"
      @click="redirectTo(session.id)"
    >
      <v-img height="200" :src="session.src" cover class="text-white" />
      <v-card-title class="text-center">
        {{ session.title }}
      </v-card-title>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { NFC_SESSIONS } from "@/const/nfc";

export default defineComponent({
  name: "NfcView",

  data() {
    return {
      NFC_SESSIONS,
    };
  },

  methods: {
    redirectTo(sessionId: number) {
      this.$router.push(`/sport/nfc/session/${sessionId}`);
      window.scrollTo(0, 0);
    },
  },
});
</script>
