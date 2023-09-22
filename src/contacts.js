const contacts = () => {
  const mainContent = document.querySelector('.mainContent')
  const title = document.createElement('h1')
  title.innerText = 'Contact Us'
  title.classList.add('.title')
  mainContent.appendChild(title)
}

export default contacts