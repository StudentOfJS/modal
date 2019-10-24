<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  const dispatch = createEventDispatcher();
  let action;
  let key;
  let keyCode;
  let lastKey;
  $: if (key === "Escape" || keyCode === 27) {
    dispatch("close");
  }
  $: if (key === "Tab" || keyCode === 9) {
    action.focus();
  }

  onMount(() => {
    action.focus();
  });
  function handleKeydown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
    }
    key = event.key;
    keyCode = event.keyCode;
  }
</script>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .modal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(100vw - 4em);
    max-width: 32em;
    max-height: calc(100vh - 4em);
    overflow: auto;
    transform: translate(-50%, -50%);
    padding: 1em;
    border-radius: 0.2em;
    background: white;
  }

  button {
    display: block;
  }
</style>

<svelte:window on:keydown={handleKeydown} />
<div
  class="modal-background"
  tabindex="-1"
  on:click={() => dispatch('close')}
  transition:fade />
<div aria-hidden="false">
  <div
    class="modal"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    in:fly={{ y: 200, duration: 2000 }}
    out:fade>
    <slot name="header" />
    <hr />
    <slot />
    <hr />

    <button
      tabindex="0"
      on:click={() => dispatch('close')}
      aria-label="Close modal"
      bind:this={action}>
      close modal
    </button>
  </div>
</div>
