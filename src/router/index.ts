import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import SportView from "@/views/SportView.vue";
import DisneyView from "@/views/DisneyView.vue";
// Kitchen
import KitchenView from "@/views/KitchenView.vue";
import PizzaView from "@/views/kitchen/PizzaView.vue"

// Sport
import EssentialsView from "@/views/sport/EssentialsView.vue";
import NfcView from "@/views/sport/NfcView.vue";
import MaxSizeView from "@/views/sport/MaxSizeView.vue";
import NfcWodViewVue from "@/views/sport/NfcWodView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sport",
      name: "sport",
      component: SportView,
    },
    {
      path: "/sport/essentials",
      name: "essentials",
      component: EssentialsView,
    },
    {
      path: "/sport/nfc",
      name: "nfc",
      component: NfcView,
    },
    {
      path: "/sport/nfc/session/:session_id",
      name: "nfc_session",
      component: NfcWodViewVue,
    },
    {
      path: "/sport/max_size",
      name: "max_size",
      component: MaxSizeView,
    },
    {
      path: "/disney",
      name: "disney",
      component: DisneyView,
    },
    {
      path: "/kitchen",
      name: "kitchen",
      component: KitchenView,
    },
    {
      path: "/kitchen/pizza",
      name: "pizza",
      component: PizzaView,
    },
  ],
});

export default router;
