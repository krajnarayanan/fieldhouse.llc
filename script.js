const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));

const pickup = document.querySelector('[name="pickup"]');
const returnDate = document.querySelector('[name="return"]');
const today = new Date();
const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
if (pickup && returnDate) {
  pickup.min = localDate;
  returnDate.min = localDate;
  pickup.addEventListener('change', () => {
    returnDate.min = pickup.value || localDate;
    if (returnDate.value && returnDate.value < returnDate.min) returnDate.value = returnDate.min;
  });
}

document.querySelector('#booking-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = document.querySelector('.form-message');
  const place = data.get('location').trim();
  const start = new Date(`${data.get('pickup')}T12:00:00`);
  const end = new Date(`${data.get('return')}T12:00:00`);
  if (end < start) {
    message.textContent = 'Your return date needs to be after your pick-up date.';
    return;
  }
  message.textContent = `You’re ready to roll from ${place}. Online booking will be available soon — get in touch and we’ll help plan your trip.`;
});

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `${data.get('topic')} inquiry from ${data.get('name')}`;
  const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nTopic: ${data.get('topic')}\n\n${data.get('message')}`;
  const mailto = `mailto:admin@fieldhouse.llc?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('.contact-form-note').textContent = 'Your email app is opening with your message ready to send.';
  window.location.href = mailto;
});
