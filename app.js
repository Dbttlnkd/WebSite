// Gestion du Curseur

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 2000)
})

// Gestion Intro



// Gestion Scroll

    // Scroll 

const Title = document.querySelector('.intro_container_title')
const Main = document.querySelector('.main_button')    
const scrollContainer = document.querySelector('.scroll_container')

Title.addEventListener('click', () => {
    scrollContainer.style.transform ="translateY(-100vh)"
    scrollContainer.style.transition ='1s'
})

Main.addEventListener('click', () => {
    scrollContainer.style.transform ="translateY(0vh)"
    scrollContainer.style.transition ='1s'
})

    // Arrêt Scroll 

const stopScroll = document.querySelector('body')

stopScroll.addEventListener('scroll', () => {
    console.log("Stop Scroll")
    scrollContainer.style.transition = '0s'
})

const stopScrollBis = document.querySelector('main_container')

stopScrollBis.addEventListener('scroll', () => {
    console.log("Stop Scroll")
    scrollContainer.style.transition = '0s'
})
