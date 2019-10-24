import SessionExpiry from './SessionExpiry.svelte';

const sessionExpiry = new SessionExpiry({
  target: document.body,
});

export default sessionExpiry;
