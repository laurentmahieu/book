<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<template>
  <VApp>
    <VMain class="pa-4">
      <router-view />
    </VMain>
  </VApp>
</template>

<style lang="css">
.pointer {
  cursor: pointer;
}
</style>
