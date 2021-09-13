let button = document.querySelector('#guest-button')

button.addEventListener('click', async () => {

	const res = await fetch ('/routes/guestbook.js')
})