const closeBtn = document.querySelector('.closeBtn')
const navMenuBtn = document.querySelector('.navMenuBtn')
const navMenu = document.querySelector('.nav-menu')
const imgtars = document.querySelectorAll('.test')
const navLinks = document.querySelectorAll('li')

const header = document.querySelector('.header')

const showImg = document.querySelector('.showImg')
const closeImg = document.querySelector('.closeImg')
const imgAt = document.querySelector('.imgAt')

const submitBtn = document.querySelector('.submitBtn')
const alertBox = document.querySelector('.alert')
let emailInput = document.querySelector('.emailInput')
let nameInput = document.querySelector('.nameInput')
let messageInput = document.querySelector('.message')

const stickyHeader = () => {
    header.classList.toggle('sticky', window.scrollY > 0)
}

const openMenu = () => {
    navMenu.style.transform = "translateX(0)"
}

const closeMenu = () => {
    navMenu.style.transform = ""
}

const closeOutside = (e) => {
    if(!navMenu.contains(e.target) && !navMenuBtn.contains(e.target)){
        closeMenu()
    }
}

const closeMenuNav = () => {
    navMenu.style.transform = ""
}


const image = (e) => {
    showImg.classList.toggle('showImgToggle')
    imgAt.setAttribute('src', e.target.src)
    document.body.style.overflow = 'hidden'
}

const closeImgWindow = () => {
    showImg.classList.toggle('showImgToggle')
    document.body.style.overflowY = 'scroll'
}

const outsideImage = (e) => {
    if(showImg.contains(e.target) && !imgAt.contains(e.target) && !closeImg.contains(e.target)){
        showImg.classList.toggle('showImgToggle')
        document.body.style.overflowY = 'scroll'
    }
}

// action="https://formsubmit.io/send/maciek.chojnacki22@wp.pl"

const popMessage = () => {
    if(emailInput.value !== "" && nameInput.value !== "" && messageInput.value !== ""){
        alertBox.style.display='flex'

        setTimeout(() => {
            alertBox.classList.add('alertExit')
    
            // setTimeout(() => {
            //     location.reload() 
            //  }, 1000);
    
        }, 2500);
    
        emailInput.value = ""
        nameInput.value = ""
    }
    else{
    }
}

for(const imgtar of imgtars){
    imgtar.addEventListener('click', image)
}

for(const navLink of navLinks){
    navLink.addEventListener('click', closeMenuNav)
}



window.addEventListener("scroll", () => {
    const topBtn = document.querySelector('.topBtn')
    topBtn.classList.toggle("showGoUpBtn", window.scrollY > 200)
})
closeBtn.addEventListener('click', closeMenu)
navMenuBtn.addEventListener('click', openMenu)
document.addEventListener('click', closeOutside)
closeImg.addEventListener('click', closeImgWindow)
document.addEventListener('click', outsideImage)
window.addEventListener('scroll', stickyHeader)
// submitBtn.addEventListener('submit', popMessage)