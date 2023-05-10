<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<template>
  <VApp>
    <v-app-bar :elevation="2">
      <v-btn variant="plain" @click="$router.push('/')">
        <v-icon icon="fas fa-home" />
      </v-btn>
    </v-app-bar>

    <VMain class="pa-4 mt-15">
      <router-view />
    </VMain>
  </VApp>
</template>

<style lang="css">
.pointer {
  cursor: pointer;
}
</style>
