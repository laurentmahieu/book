<template>
  <v-img
    :src="session?.src"
    class="align-end"
    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    height="150px"
    cover
  >
    <v-card-title class="text-white">
      {{ session?.title }}
    </v-card-title>
  </v-img>

  <v-row justify="center">
    <v-card
      width="300px"
      class="ma-4"
      v-for="(ex, i) in session?.wod"
      :key="`exercice-${i}`"
      :title="ex.title"
    >
      <v-card-text>
        <p>{{ ex.set }} séries</p>
        <p>{{ ex.rep }} rép</p>
        <p>{{ ex.rest }} sec de rest</p>
        <p>{{ ex.contraction }} sec de contration</p>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { NFC_SESSIONS } from "@/const/nfc";

export default defineComponent({
  name: "NfcWodView",

  computed: {
    session() {
      return NFC_SESSIONS.find(
        (el) => el.id.toString() === this.$route.params.session_id
      );
    },
  },
});
</script>
