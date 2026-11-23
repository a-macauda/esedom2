

// Selectors

let inp = document.querySelector('#inputField')
let txt = document.querySelector('#textArea')
let btn = document.querySelector('#enterButton')
let container = document.querySelector('.container')

// funzioni

btn.addEventListener('click', () => {
    if(inp.value == '' && txt.value == ''){
        alert('Rempi entrambe le caselle')
    }else{
        let newDiv = document.createElement('div')
        
        newDiv.style.backgroundColor = 'lightblue'
        newDiv.style.border = '1px solid black'
        newDiv.style.padding = '15px'
        newDiv.style.padding = '10px'
        newDiv.innerHTML = `<h2>${inp.value}</h2><p>${txt.value}</p>`
        container.appendChild(newDiv)
        inp.value = ''
        txt.value = ''
    }
})
