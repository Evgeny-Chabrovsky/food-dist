import calc from "./modules/calc";
import menuCards from "./modules/menuCards";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import modal from "./modules/modal";
import slider from "./modules/slider";
import timer from "./modules/timer";
window.addEventListener("DOMContentLoaded", () => {
  tabs();
  timer();
  modal();
  forms();
  calc();
  menuCards();
  slider();
});
