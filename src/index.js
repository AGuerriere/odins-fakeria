import './home.css';
import menu from './menu'
import contacts from './contacts'

const content = document.getElementById('content')
const navbar = document.createElement('nav')
const navTitle = document.createElement('div')
const navButtons = document.createElement('div')
const homeButton = document.createElement('div')
const menuButton = document.createElement('div')
const contactButton = document.createElement('div')
content.appendChild(navbar)
navbar.appendChild(navTitle)
navTitle.innerText = "Odin's Fakeria"
navbar.appendChild(navButtons)
navButtons.classList.add('navButtons')
navButtons.appendChild(homeButton)
homeButton.innerText = 'Home'
navButtons.appendChild(menuButton)
menuButton.innerText= 'Menu'
menuButton.classList.add('menuButton')
navButtons.appendChild(contactButton)
contactButton.innerText = 'Contact Us'

const mainContent = document.createElement('div')
content.appendChild(mainContent)
mainContent.classList.add('mainContent')

menuButton.addEventListener('click', () => {
  document.querySelector('.mainContent').textContent = ''
  menu()
})

homeButton.addEventListener('click', () => {
  document.querySelector('.mainContent').textContent = ''
  home()
})

contactButton.addEventListener('click', () => {
  document.querySelector('.mainContent').textContent = ''
  contacts()
})

home()

function home () {
  const background = document.createElement('div')
  const h1Title = document.createElement('h1')
  const description = document.createElement('p')
  const orderButton = document.createElement('button')
  mainContent.appendChild(background)
  background.classList.add('background')
  background.appendChild(h1Title)
  h1Title.innerText = "Welcome to Odin's Fakeria"
  background.appendChild(description)
  description.innerText = "Odin's finest food"
  background.appendChild(orderButton)
  orderButton.innerText = "Order Now"
}


