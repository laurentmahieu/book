<template>
  <IngredientsList :ingredients="ingredients" :numberPeople="4" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import IngredientsList from "@/components/IngredientsList.vue";

// Assets
import saltImg from "@/assets/sel.jpg";
import farineImg from "@/assets/farine.jpg";
import levureImg from "@/assets/levure.jpg";
import oilImg from "@/assets/oil.jpg";
import waterImg from "@/assets/water.jpg";

export default defineComponent({
  name: "PizzaView",

  components: {
    IngredientsList,
  },

  data() {
    return {
      ingredients: [
        {
          src: farineImg,
          quantity: "350 g",
          title: "Farine",
        },
        {
          src: saltImg,
          quantity: "2 c.à.c",
          title: "Sel",
        },
        {
          src: levureImg,
          quantity: "1s sachet",
          title: "Levure boulangère",
        },
        {
          src: oilImg,
          quantity: "3 c.à.s",
          title: "Huile d'olive",
        },
        {
          src: waterImg,
          quantity: "25 cl",
          title: "Eau",
        },
      ],
    };
  },
});
</script>
