let count = 0
let res = document.querySelector("#res")

function minus(){
    count--

    if(count < 0 ){
        count = 0
    }
    res.innerHTML = count
    
}

function plus(){
    count++
    res.innerHTML = count
}
