const accordian = document.querySelectorAll('.accordian')
accordian.forEach((value)=>{
    const icon = value.querySelector('.icon');
    
    const content = value.querySelector('.content')
    
    value.addEventListener('click',()=>{
        icon.classList.toggle('active')
        content.classList.toggle('active')
    })
})