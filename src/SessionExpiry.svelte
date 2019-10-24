<script>
  import Modal from "./modal/Modal.svelte";
  import { onMount } from "svelte";
  // for future
  let showModal = false;
  let duration = 20;
  let alertLevel = 5;
  let days = 7;
  let form;
  onMount(() => {
    let el = document.querySelector("input[data-modal]");
    if (el) {
      let { dataset } = el;
      duration = dataset.duration;
      alertLevel = dataset.alertlevel;
      days = dataset.days;
      form = document.getElementById(dataset.form);
    }
  });
</script>

<button
  on:click={() => {
    showModal = true;
  }}>
  show modal
</button>

{#if showModal}
  <Modal
    on:close={() => (showModal = false)}
    on:submit={() => {
      form.submit();
    }}>
    <h2 slot="header" id="modal-title">time is running out</h2>
    I'm basically up shit creek without a paddle
  </Modal>
{:else}
  <dialog aria-hidden="true" />
{/if}
