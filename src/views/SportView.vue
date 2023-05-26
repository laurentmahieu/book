<template>
  <v-row justify="center">
    <v-card
      width="300"
      v-for="(program, i) in programs"
      :key="`view-${i}`"
      class="ma-4 pointer"
      @click="redirectTo(program.href)"
    >
      <v-img height="200" :src="program.src" cover class="text-white" />
      <v-card-title class="text-center">
        {{ program.title }}
      </v-card-title>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import essentialsMainImg from "@/assets/essentialMain.png";
import maxSizeMainImg from "@/assets/maxSizeMain.png";
import nfcProMasseMainImg from "@/assets/nfcProMasseMain.png";

export default defineComponent({
  name: "SportView",

  data() {
    return {
      programs: [
        {
          href: "/sport/essentials",
          src: essentialsMainImg,
          title: "the essentials program",
        },
        {
          href: "/sport/max_size",
          src: maxSizeMainImg,
          title: "Max / Size",
        },
        {
          href: "/sport/nfc",
          src: nfcProMasseMainImg,
          title: "nfc pro masse",
        },
      ],
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
