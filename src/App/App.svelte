<script>
  import { onMount } from "svelte";
  import {
    updateFocus,
    getDefaultSauces,
    getNewInputItem,
    getRandomInt,
    removeItemFromArray,
  } from "./utils";
  import { AddButton, InputItem, PickButton, ResetButton } from "./components";

  let inputItems = [...getDefaultSauces(), getNewInputItem()];
  $: isFirstInputPopulated = inputItems.at(0).value.trim();
  $: isLastInputPopulated = inputItems.at(-1).value.trim();
  let pickedItems = [];

  $: {
    const hasEmptyInputs = inputItems.some(({ value }) => value.trim() === "");
    const firstEmptyInputIndex = inputItems.findIndex(
      ({ value }) => value.trim() === ""
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
    const populatedInputItems = inputItems.filter(({ value }) => value.trim());
    const pickedInputItemIndex = getRandomInt(populatedInputItems.length);
    pickedItems = [...pickedItems, inputItems[pickedInputItemIndex]];
    if (inputItems.length > 1) {
      inputItems = removeItemFromArray(inputItems, pickedInputItemIndex);
      updateFocus();
    } else {
      inputItems[0] = getNewInputItem();
    }
  }

  function handleResetPickedItems() {
    inputItems = [...inputItems, ...pickedItems, getNewInputItem()];
    pickedItems = [];
  }

  onMount(updateFocus);
</script>

<PickButton disabled={!isFirstInputPopulated} {handlePickItem} />

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

<ResetButton disabled={pickedItems.length < 1} {handleResetPickedItems} />
