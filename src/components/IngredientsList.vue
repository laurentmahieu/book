<template>
  <v-row>
    <v-col align="center">
      <span> Ingrédients pour {{ numberPeople }} personnes</span>
    </v-col>
  </v-row>
  <v-row justify="space-around">
    <v-card
      width="150"
      v-for="(ingredient, i) in ingredients"
      :key="`view-${i}`"
      class="my-3 text-center"
    >
      <v-img height="100" :src="ingredient.src" cover class="text-white" />

      <p>{{ ingredient.title }}</p>
      <p>{{ ingredient.quantity }}</p>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Types
import type { Ingredient } from "@/types/ingredients";

export default defineComponent({
  name: "IngredientsList",

  props: {
    numberPeople: Number,
    ingredients: Array as () => Ingredient[],
  },
});
</script>
