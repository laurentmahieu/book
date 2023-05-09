<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<template>
  <VApp>
    <VMain>
      <router-view />
    </VMain>
  </VApp>
</template>
