<template>
  <VTable density="compact" fixedHeader height="calc(100vh - 100px)">
    <thead>
      <tr>
        <th />
        <th class="text-left">Name</th>
        <th class="text-left">Parc</th>
        <th class="text-left">Restriction</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in merryGoRounds" :key="item.name">
        <td>
          <VCheckbox v-model="item.done" hide-details />
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.parc }}</td>
        <td>{{ item.restriction }}</td>
      </tr>
    </tbody>
  </VTable>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DisneyView",

  data() {
    return {
      merryGoRounds: [
        {
          name: "Ratatouille : L'Aventure Totalement Toquée de Rémy",
          parc: "Studio",
          restriction: 0,
          done: false,
        },
        {
          name: "The Twilight Zone Tower of Terror",
          parc: "Studio",
          restriction: 102,
          done: false,
        },
        {
          name: "Crush's Coaster",
          parc: "Studio",
          restriction: 107,
          done: false,
        },
        {
          name: "Avengers Assemble: Flight Force",
          parc: "Studio",
          restriction: 120,
          done: false,
        },
        {
          name: "RC Racer",
          parc: "Studio",
          restriction: 120,
          done: false,
        },
        {
          name: "Blanche-Neige et les Sept Nains",
          parc: "Classic",
          restriction: 0,
          done: false,
        },
        {
          name: "Peter Pan's Flight",
          parc: "Classic",
          restriction: 0,
          done: false,
        },
        {
          name: "Disneyland Railroad",
          parc: "Classic",
          restriction: 0,
          done: false,
        },
        {
          name: "Phantom Manor",
          parc: "Classic",
          restriction: 0,
          done: false,
        },
        {
          name: "Disney Dreams!",
          parc: "Classic",
          restriction: 0,
          done: false,
        },
        {
          name: "Disney D-Light",
          parc: "Classic",
          restriction: 0,
          done: false,
        },
        {
          name: "Big Thunder Mountain",
          parc: "Classic",
          restriction: 102,
          done: false,
        },
        {
          name: "Star Wars Hyperspace Mountain",
          parc: "Classic",
          restriction: 120,
          done: false,
        },
        {
          name: "Indiana Jones™ et le Temple du Péril",
          parc: "Classic",
          restriction: 140,
          done: false,
        },
        {
          name: "Slinky Dog Zigzag Spin",
          parc: "Studio",
          restriction: 0,
          done: true,
        },
        {
          name: "Les Tapis Volants – Flying Carpets Over Agrabah",
          parc: "Studio",
          restriction: 0,
          done: true,
        },
        {
          name: "Buzz Lightyear Laser Blast",
          parc: "Studio",
          restriction: 0,
          done: true,
        },
        {
          name: "Cars Quatre Roues Rallye",
          parc: "Studio",
          restriction: 0,
          done: true,
        },
        {
          name: "Cars ROAD TRIP",
          parc: "Studio",
          restriction: 0,
          done: true,
        },
        {
          name: "Spider-Man W.E.B. Adventure",
          parc: "Studio",
          restriction: 0,
          done: true,
        },
        {
          name: "Avengers: Power the Night*",
          parc: "Studio",
          restriction: 0,
          done: true,
        },
        {
          name: "Spectacle Mickey et le Magicien",
          parc: "Studio",
          restriction: 0,
          done: true,
        },
        {
          name: "La Reine des Neiges : Une Invitation Musicale",
          parc: "Studio",
          restriction: 0,
          done: true,
        },
        {
          name: "Rencontre avec Olaf",
          parc: "Studio",
          restriction: 0,
          done: true,
        },
        {
          name: "Toy Soldiers Parachute Drop",
          parc: "Studio",
          restriction: 81,
          done: true,
        },
        {
          name: "Rêvons… et le monde s’illumine !",
          parc: "Classic",
          restriction: 0,
          done: true,
        },
        {
          name: "Disney Stars on Parade",
          parc: "Classic",
          restriction: 0,
          done: true,
        },
        {
          name: "Rencontre avec Mickey",
          parc: "Classic",
          restriction: 0,
          done: true,
        },
        {
          name: "Casey Jr. – le Petit Train du Cirque",
          parc: "Classic",
          restriction: 0,
          done: true,
        },
        {
          name: "Le Passage Enchanté d'Aladdin",
          parc: "Classic",
          restriction: 0,
          done: true,
        },
        {
          name: "Dumbo the Flying Elephant",
          parc: "Classic",
          restriction: 0,
          done: true,
        },
        {
          name: "Le Pays des Contes de Fées",
          parc: "Classic",
          restriction: 0,
          done: true,
        },
        {
          name: "Mad Hatter's Tea Cups",
          parc: "Classic",
          restriction: 0,
          done: true,
        },
        {
          name: "Pirates of the Caribbean",
          parc: "Classic",
          restriction: 0,
          done: true,
        },
        {
          name: "Starport : rencontre avec un Personnage Star Wars",
          parc: "Classic",
          restriction: 0,
          done: true,
        },
        {
          name: "Spectacle Le Roi Lion et les Rythmes de la Terre",
          parc: "Classic",
          restriction: 0,
          done: true,
        },
        {
          name: "Le Carrousel de Lancelot",
          parc: "Classic",
          restriction: 0,
          done: true,
        },
        {
          name: "Les Voyages de Pinocchio",
          parc: "Classic",
          restriction: 0,
          done: true,
        },
        {
          name: "Autopia",
          parc: "Classic",
          restriction: 81,
          done: true,
        },
        {
          name: "Star Tours : L’Aventure Continue",
          parc: "Classic",
          restriction: 102,
          done: true,
        },
      ],
    };
  },
});
</script>
