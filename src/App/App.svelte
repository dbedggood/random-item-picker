<script>
  import { onMount } from "svelte";
  import {
    updateFocus,
    getDefaultSauces,
    getNewInputItem,
    getRandomInt,
    removeItemFromArray,
  } from "./utils";
  import {
    AddButton,
    InputItem,
    PickButton,
    PickedItem,
    ReturnButton,
  } from "./components";

  let inputItems = [...getDefaultSauces(), getNewInputItem()];
  $: isFirstInputPopulated = inputItems.at(0).value.trim();
  $: isLastInputPopulated = inputItems.at(-1).value.trim();

  let pickedItems = [];
  $: hasPickedItems = pickedItems.length > 0;

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
    } else {
      inputItems[0] = getNewInputItem();
    }
  }

  function handleReturnPickedItems() {
    const populatedInputItemsEndIndex = isLastInputPopulated
      ? inputItems.length
      : -1;

    inputItems = [
      ...inputItems.slice(0, populatedInputItemsEndIndex),
      ...pickedItems,
    ];

    pickedItems = [];
  }

  onMount(updateFocus);
</script>

<main>
  <PickButton disabled={!isFirstInputPopulated} {handlePickItem} />

  {#each inputItems as { id, value }, index (id)}
    <InputItem
      {id}
      {index}
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
      <PickedItem {value} />
    {/each}
  </ol>

  <ReturnButton disabled={!hasPickedItems} {handleReturnPickedItems} />
</main>

<style>
  :global(*) {
    box-sizing: border-box;
    font-size: 1.25rem;
    font-family: Arial, Helvetica, sans-serif;
  }

  :global(body) {
    margin: 0;
    background-color: #fff;
  }

  :global(div#app) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  main {
    width: 100%;
    padding: 1.5rem;
    border-radius: 2rem;
    background: white;
  }

  ol {
    margin: 0;
    padding: 1rem;
  }

  @media (min-width: 500px) {
    :global(body) {
      background-color: #f7f2e6;
      opacity: 0.8;
      background-image: radial-gradient(#f7a145 0.5px, transparent 0.5px),
        radial-gradient(#f7a145 0.5px, #f7f2e6 0.5px);
      background-size: 20px 20px;
      background-position: 0 0, 10px 10px;
    }

    main {
      width: auto;
      margin: 1.5rem 0;
    }
  }
</style>
