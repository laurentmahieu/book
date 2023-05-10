<template>
  <v-row justify="center">
    <v-card
      width="250"
      v-for="(session, i) in nfcSessions"
      :key="`session-${i}`"
      class="ma-4 pointer"
      @click="redirectTo(session.href)"
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

import armImg from "@/assets/img/views/sport/nfc/arm.png";
import backImg from "@/assets/img/views/sport/nfc/back.png";
import benchImg from "@/assets/img/views/sport/nfc/bench.png";
import legImg from "@/assets/img/views/sport/nfc/leg.png";
import shoulderImg from "@/assets/img/views/sport/nfc/shoulder.png";

export default defineComponent({
  name: "NfcView",

  data() {
    return {
      nfcSessions: [
        { href: "/session1", src: benchImg, title: "Semaine 1 : Pectoraux" },
        { href: "/session2", src: backImg, title: "Semaine 2 : Dos" },
        { href: "/session3", src: armImg, title: "Semaine 3 : Bras" },
        { href: "/session4", src: legImg, title: "Semaine 4 : Jambes" },
        { href: "/session5", src: shoulderImg, title: "Semaine 5 : Épaules" },
      ],
    };
  },

  methods: {
    redirectTo(href: string) {
      this.$router.push(`/sport/nfc${href}`);
      window.scrollTo(0, 0);
    },
  },
});
</script>
