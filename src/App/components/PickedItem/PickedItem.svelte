<script>
  import { slide } from "svelte/transition";

  export let value;
</script>

<li transition:slide>
  {value}
</li>
