<template>
  <v-card-text>
    <v-window v-model="tab">
      <v-window-item :value="i" v-for="(exercice, i) in session.exercices">
        <v-card-title>
          {{ exercice.name }}
        </v-card-title>

        <v-form ref="form">
          <v-row>
            <v-col cols="6">
              <p>Warm Up {{ exercice.warm_up }} set(s)</p>
            </v-col>
          </v-row>
          <div v-for="set in exercice.sets">
            <v-row>
              <v-col cols="6">
                <p>Set n° {{ set.set }}</p>
                <p>Rest: {{ set.rest }}min</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Rep"
                  v-model="set.rep_value"
                  :hint="set.rep"
                  persistent-hint
                  :rules="[isrequired]"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Load"
                  v-model="set.load_value"
                  :hint="set.load"
                  persistent-hint
                  :rules="[isrequired]"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="RPE"
                  v-model="set.rpe_value"
                  :hint="set.rpe"
                  persistent-hint
                  :rules="[isrequired]"
                />
              </v-col>
            </v-row>
          </div>
          <v-btn color="success" class="mt-4" block @click="validate">
            Validate
          </v-btn>
        </v-form>
      </v-window-item>
    </v-window>
  </v-card-text>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ESSENTIAL_SESSIONS from "@/const/essentialsSessions";
import { getItemLocalStorage, setItemLocalStorage } from "@/utils/localStorage";

type session = {
  id: number;
  title: string;
  date: string;
  exercices: {
    name: string;
    warm_up: number;
    sets: {
      set: number;
      rep: string;
      rep_value: string;
      load: string;
      load_value: string;
      rpe: string;
      rpe_value: string;
      rest: number;
    }[];
  }[];
};

export default defineComponent({
  name: "EssentialsWodView",

  data() {
    return {
      session: {} as session,
      tab: 0,
      isrequired: (v: string | null) => !!v || "field is required",
    };
  },

  mounted() {
    this.findSession();
  },

  methods: {
    findSession() {
      const sessions =
        getItemLocalStorage("essentials_sessions") ?? ESSENTIAL_SESSIONS;
      this.session =
        sessions.find(
          (el: session) => el.id.toString() === this.$route.params.day_id
        ) ?? ({} as session);
    },

    async validate() {
      const { valid } = await (this.$refs.form as { validate: Function }[])[
        this.tab
      ].validate(); // this.tab ??

      if (valid) {
        let sessions =
          getItemLocalStorage("essentials_sessions") ?? ESSENTIAL_SESSIONS;
        sessions = sessions.filter(
          (el: session) => el.id.toString() !== this.$route.params.day_id
        );
        sessions.push(this.session);
        setItemLocalStorage("essentials_sessions", sessions);

        this.tab = this.tab + 1;
      }
    },
  },
});
</script>
