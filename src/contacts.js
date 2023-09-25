const contacts = () => {
  const mainContent = document.querySelector('.mainContent')
  const title = document.createElement('h1')
  title.innerText = 'Contact Us'
  title.classList.add('.title')
  mainContent.appendChild(title)
  const contactsContainer = document.createElement('div')
  const contactsInfo = document.createElement('div')
  const map = document.createElement('div')
  mainContent.appendChild(contactsContainer)
  contactsContainer.classList.add('contactsContainer')
  contactsContainer.appendChild(contactsInfo)
  contactsInfo.classList.add('contactsInfo')
  map.classList.add('map')
  map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.162157615879!2d12.49484641625138!3d41.9108726792195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61089b23d23f%3A0xbe2e066e1e74ce64!2sCorso%20d&#39;Italia%2C%20Roma%20RM%2C%20Italy!5e0!3m2!1sen!2suk!4v1670419419453!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  contactsContainer.appendChild(map)
  contactsContainer.classList.add('contactsContainer')
  const address = document.createElement('p')
  const hours = document.createElement('p')
  const phone = document.createElement('p')
  address.innerText = '🏡 1 Asgard Road, Asgard, AS0001 '
  hours.innerText = '⏰ Mon - Sun: 7AM - 11PM'
  phone.innerText = '☎️ 0280011111'
  contactsInfo.appendChild(address)
  contactsInfo.appendChild(hours)
  contactsInfo.appendChild(phone)

}

export default contacts