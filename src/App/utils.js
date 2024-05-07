import { tick } from "svelte";
import { SAUCES } from "./constants";

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

export function getAllItems(inputItems, pickedItems) {
  const populatedInputItemsEndIndex = Boolean(inputItems.at(-1).value)
    ? inputItems.length
    : -1;

  return [...inputItems.slice(0, populatedInputItemsEndIndex), ...pickedItems];
}

function getSauces() {
  return SAUCES.map((sauce) => ({ id: getUniqueId(), value: sauce }));
}

export function getInitialInputItems() {
  if (localStorage.length > 0) {
    return JSON.parse(localStorage.getItem("storedInputItems"));
  }

  return getSauces();
}

export function getNewInputItem() {
  return { id: getUniqueId(), value: "" };
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function removeItemFromArray(array, index) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function storeInputItemsToLocalStorage(inputItems) {
  localStorage.setItem("storedInputItems", JSON.stringify(inputItems));
}

export async function updateFocus() {
  await tick;
  let inputs = document.getElementsByTagName("input");
  inputs[inputs.length - 1].focus();
}
