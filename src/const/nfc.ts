import armImg from "./assets/arm.png";
import backImg from "./assets/back.png";
import benchImg from "./assets/bench.png";
import legImg from "./assets/leg.png";
import shoulderImg from "./assets/shoulder.png";

export const NFC_SESSIONS = [
  {
    id: 1,
    src: benchImg,
    title: "Semaine 1 : Pectoraux",
    wod: [
      {
        title: "Écarté à la poulie basse",
        set: 3,
        rep: 2,
        rest: 90,
        contraction: 3,
      },
      {
        title: "Développé couché barre",
        set: 4,
        rep: 2,
        rest: 120,
        contraction: 0,
      },
      {
        title: "Développé incliné barre",
        set: 4,
        rep: 2,
        rest: 120,
        contraction: 0,
      },
      {
        title: "Développé incliné altère",
        set: 3,
        rep: 2,
        rest: 120,
        contraction: 3,
      },
      {
        title: "Écarté couché",
        set: 4,
        rep: 2,
        rest: 90,
        contraction: 3,
      },
      {
        title: "Abdos crunch sur banc incliné",
        set: 3,
        rep: 2,
        rest: 60,
        contraction: 0,
      },
    ],
  },
  {
    id: 2,
    src: backImg,
    title: "Semaine 2 : Dos",
  },
  {
    id: 3,
    src: armImg,
    title: "Semaine 3 : Bras",
  },
  {
    id: 4,
    src: legImg,
    title: "Semaine 4 : Jambes",
  },
  {
    id: 5,
    src: shoulderImg,
    title: "Semaine 5 : Épaules",
  },
];
