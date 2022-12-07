<script>
  import { onMount } from "svelte";
  import {
    focusLastInput,
    getDefaultSauces,
    getNewInputItem,
    getRandomInt,
    removeItemFromArray,
  } from "./utils";
  import { AddButton, PickButton } from "./components";
  import InputItem from "./components/InputItem/InputItem.svelte";

  let inputItems = getDefaultSauces();
  let pickedItems = [];

  $: {
    const hasEmptyInputs = inputItems.some(({ value }) => value === "");
    const firstEmptyInputIndex = inputItems.findIndex(
      ({ value }) => value === ""
    );
    const inputItemsLastIndex = inputItems.length - 1;

    if (hasEmptyInputs && firstEmptyInputIndex !== inputItemsLastIndex) {
      inputItems = removeItemFromArray(inputItems, firstEmptyInputIndex);
      focusLastInput();
    }
  }

  function handleInputChange(event, index) {
    if (inputItems[index].value !== event.target.value) {
      inputItems[index].value = event.target.value;
    }
  }

  function handleAddNewInput() {
    inputItems = [...inputItems, getNewInputItem()];
    focusLastInput();
  }

  function handlePickItem() {
    const populatedInputItems = inputItems.filter(({ value }) => value);
    const pickedInputItemIndex = getRandomInt(populatedInputItems.length);
    pickedItems = [...pickedItems, inputItems[pickedInputItemIndex]];
    if (inputItems.length > 1) {
      inputItems = removeItemFromArray(inputItems, pickedInputItemIndex);
      focusLastInput();
    } else {
      inputItems[0] = getNewInputItem();
    }
  }

  onMount(focusLastInput);
</script>

<PickButton {inputItems} {handlePickItem} />

{#each inputItems as { id, value }, index (id)}
  <InputItem
    {id}
    {value}
    {handleAddNewInput}
    handleInputChange={(event) => {
      handleInputChange(event, index);
    }}
  />
{/each}

<AddButton {inputItems} {handleAddNewInput} />

<ol>
  {#each pickedItems as { id, value } (id)}
    <li>
      {value}
    </li>
  {/each}
</ol>
