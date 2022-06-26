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

const Title = document.querySelector('.underline_intro')
const Main = document.querySelector('.main_button')
const bodyScroll = document.querySelector('.main_container')
const bodyCheck = document.querySelector('body')

Title.addEventListener('click', () => {
    bodyScroll.style.transform ="translateY(-100vh)"
    bodyScroll.style.transition ='1s'
})

Main.addEventListener('click', () => {
    bodyScroll.style.transform ="translateY(0vh)"
    bodyScroll.style.transition ='1s'
})

bodyCheck.addEventListener('scroll', () => {
    console.log("Stop Scroll")
    bodyScroll.style.transition ='0s'
})
