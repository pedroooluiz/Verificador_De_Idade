let anoNasci = document.querySelector('.anoNasci')
let botao = document.querySelector('.botao')
let res = document.querySelector('.res')

botao.addEventListener('click', clicar)

function clicar(){
    let sexo = document.getElementsByName('MascFem')
    let ano = new Date()
    let anoAtual = ano.getFullYear()
    let dataNasci = Number(anoNasci.value)
    
    if(dataNasci < 1900 || dataNasci > anoAtual){
        alert('Erro! Idade não correspondente.')
    }else{
        if(sexo[0].checked){
            res.innerHTML = `<p> Um homem de ${anoAtual - dataNasci} anos. </p>`
            res.innerHTML += `<img src="https://user-images.githubusercontent.com/105122745/204651643-667764c8-bda7-4904-8564-516fbbe9bb06.jpg" alt="">`

        }else if(sexo[1].checked){
            res.innerHTML = `<p> Uma mulher de ${anoAtual - dataNasci} anos. </p>`
            res.innerHTML += `<img src="https://user-images.githubusercontent.com/105122745/204651670-14d82050-9650-49cf-b305-88069b302e25.jpg" alt="">`
        }else{
            alert('Erro! Preencha o campo sexo antes de verificar.')
        }
    }
}
