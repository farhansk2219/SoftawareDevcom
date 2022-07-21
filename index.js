// console.log('Hello World')
burger= document.querySelector('.burger')
navbar= document.querySelector('.navbar')
ullist= document.querySelector('.ul-list')
rightNav=document.querySelector('.rightNav')




burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class')
    ullist.classList.toggle('v-class')
    navbar.classList.toggle('h-nav')
})
