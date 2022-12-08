<script>
  import { onMount } from "svelte";
  import {
    updateFocus,
    getDefaultSauces,
    getNewInputItem,
    getRandomInt,
    removeItemFromArray,
  } from "./utils";
  import { AddButton, PickButton, InputItem } from "./components";

  let inputItems = [...getDefaultSauces(), getNewInputItem()];
  $: isLastInputPopulated = inputItems.at(-1).value;
  let pickedItems = [];

  $: {
    const hasEmptyInputs = inputItems.some(({ value }) => value === "");
    const firstEmptyInputIndex = inputItems.findIndex(
      ({ value }) => value === ""
    );
    const inputItemsLastIndex = inputItems.length - 1;
    if (hasEmptyInputs && firstEmptyInputIndex !== inputItemsLastIndex) {
      inputItems = removeItemFromArray(inputItems, firstEmptyInputIndex);
      updateFocus();
    }
  }

  function handleInputChange(event, index) {
    if (inputItems[index].value !== event.target.value) {
      inputItems[index].value = event.target.value;
    }
  }

  function handleAddNewInput() {
    if (isLastInputPopulated) {
      inputItems = [...inputItems, getNewInputItem()];
    }
    updateFocus();
  }

  function handlePickItem() {
    const populatedInputItems = inputItems.filter(({ value }) => value);
    const pickedInputItemIndex = getRandomInt(populatedInputItems.length);
    pickedItems = [...pickedItems, inputItems[pickedInputItemIndex]];
    if (inputItems.length > 1) {
      inputItems = removeItemFromArray(inputItems, pickedInputItemIndex);
      updateFocus();
    } else {
      inputItems[0] = getNewInputItem();
    }
  }

  onMount(updateFocus);
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

<AddButton disabled={!isLastInputPopulated} {handleAddNewInput} />

<ol>
  {#each pickedItems as { id, value } (id)}
    <li>
      {value}
    </li>
  {/each}
</ol>

<button
  on:click={() => {
    inputItems = [...inputItems, ...pickedItems, getNewInputItem()];
    pickedItems = [];
  }}>reset</button
> picked options
