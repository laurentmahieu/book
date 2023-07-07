import "vuetify/styles";

import { createVuetify } from "vuetify";
import { aliases, fa } from "vuetify/iconsets/fa";

export default createVuetify({
  defaults: {
    VTextField: {
      variant: "outlined",
      color: "primary",
      density: "comfortable",
      clearable: true,
    },
  },
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
});
