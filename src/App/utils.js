import { tick } from "svelte";

function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function getUniqueId() {
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

export function getNewInputItem() {
  return { id: getUniqueId(), value: "" };
}

export function removeItemFromArray(array, index) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export async function updateFocus() {
  await tick;
  if (document.activeElement !== document.getElementById("pick-button")) {
    let inputs = document.getElementsByTagName("input");
    inputs[inputs.length - 1].focus();
  }
}

export function getDefaultSauces() {
  return [
    "hummus",
    "garlic yoghurt",
    "sweet chilli",
    "tomato sauce",
    "bbq sauce",
    "mint sauce",
    "aioli",
    "mayo",
  ].map((sauce) => ({ id: getUniqueId(), value: sauce }));
}
