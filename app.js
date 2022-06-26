const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    console.log(e)
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 2000)
})

const Title = document.querySelector('.underline_intro')
const Main = document.querySelector('.underline_main')
const bodyScroll = document.querySelector('.main_container')

Title.addEventListener('click', () => {
    console.log("Ca marche !")
    bodyScroll.style.transform ="translateY(-100vh)"
    bodyScroll.style.transition ='1s'
})

Main.addEventListener('click', () => {
    console.log("Ca marche !")
    bodyScroll.style.transform ="translateY(100vh)"
    bodyScroll.style.transition ='1s'
})
