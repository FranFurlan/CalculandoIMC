const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const calcIMC = () =>{
    if(altura.value !== '' && peso.value !== ''){
        const IMC = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classificacao = ''
        if(IMC < 18.5){
            classificacao = 'Abaixo do peso'
        } else if(IMC < 25) {
            classificacao = 'Peso normal'
        } else if(IMC < 30) {
            classificacao = 'Acima do peso'
        } else if(IMC < 35) {
            classificacao = 'Obeesidade Grau I'
        } else if(IMC < 41) {
            classificacao = 'Obesidade Grau II'
        } else{
            classificacao = 'Obesidade Grau III'
        }
        resultado.innerHTML = `IMC: ${IMC} (${classificacao})`
    }else{
        resultado.innerHTML = 'Preencha os campos'
    }
}