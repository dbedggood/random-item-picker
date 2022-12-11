<script>
  import { slide } from "svelte/transition";
  import { TRANSITION_DURATION } from "../../constants";

  export let value;
</script>

<li transition:slide={{ duration: TRANSITION_DURATION }}>
  {value}
</li>
