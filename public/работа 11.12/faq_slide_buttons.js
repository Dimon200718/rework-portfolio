let rotate = false
function rotation(span, text, headline){
    if(rotate){
        span.style.transform = 'rotate(90deg)'
        text.style.display = 'block'
        text.style.height = '130px'
        headline.style.color = '#CDA274'
    }
    else{
        span.style.transform = 'rotate(0deg)'
        text.style.display = 'none'
        text.style.height = '0px'
        headline.style.color = 'var(--main-headline-color)'
    }     
};
const btn = document.querySelectorAll('.questions_button')
btn.forEach((btn) =>{
    btn.addEventListener('click', ()=>{
        // Находим родительский контейнер
        const container = btn.closest('.questions_block__question');
        
        // Находим текст внутри этого контейнера
        const span = container.querySelector('span');
        const text = container.querySelector('p');
        const headline = container.querySelector('h2')

        rotate = !rotate
        rotation(span, text,headline)
    })
})