export const date = "25/07/2026";

export const dateTimeBox: any = new Date("2026-07-25T17:00:00");

export const calendar: any = [
  ["Ուրբաթ", "Շաբաթ", "Կիրակի"],
  ["24", "25", "26"],
];


export const program: any = [
  {
    time: "11:00",
    title: "Հարսի տուն",
    // address: "",
  },
  {
    time: "13:00",
    title: "Պսակադրություն",
    address: "Սուրբ Աննա",
  },
  {
    time: "17:00",
    title: "Հարսանյաց հանդիսություն",
    address: "Continental Hotel Complex",
  },
];

export const txt1 = " Դուք հրավիրված եք մեր Հարսանիքին \n Օր որտեղ հիմք կդրվի \n Նոր ընտանիքի";
export const txt2 ="Մասնակցության մասին \n Խնդրում ենք \n Տեղեկացնել մինչև \n Հունիսի 10-ը";



export const rsvp = 'https://script.google.com/macros/s/AKfycbz7B4NjNo4306xcDwaIjzAP4e4tuTHKvM2TZARYSu_9ByKTwe6H_cy06zqpq2pK_PB-/exec'


export const anim: any = {
  initial: { opacity: 0, y: 10 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
  viewport: { once: true },
};
