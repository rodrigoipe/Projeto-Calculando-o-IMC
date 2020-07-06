// calcular a massa corporal 
function medir() {
    let nome = window.document.getElementById('txtNome')
    let peso = window.document.getElementById('txtPeso')
    let altura = window.document.getElementById('txtAltura')
    let sex = window.document.getElementsByName('sexo')
    let img = window.document.getElementById('img')
    let alt = Number(txtAltura.value) // pega o valor digitado dentro da caixa de texto e joga dentro da letial alt
    let pes = Number(txtPeso.value)
    let name = String(txtNome.value) // Transformar em string
    let result = window.document.getElementById('result')
    let dica = window.document.getElementById('dica')
    let imc = pes / Math.pow(alt, 2)
    if (sex[0].checked) { // checked determina o uso do botão selecionado
        if (imc <= 20) {
            dica.innerHTML = (`Ola ${name}, seu IMC é de:  ${imc.toFixed(2)}. Cuidado, Seu IMC está abaixo do normal!`) //eleva altura ao quadrado
            img.src = "./fotos/Hmagro.jpg"
        } else if (imc <= 24) {
            dica.innerHTML = (`Ola ${name}, seu IMC é de:  ${imc.toFixed(2)}. Parabens, seu IMC está  ótimo!`)
            img.src = "./fotos/Hleve.jpg"
        } else if (imc <= 29) {
            dica.innerHTML = (` Ola ${name}, seu IMC é de:  ${imc.toFixed(2)}. Cuidado, seu IMC está  um pouco acima do normal, obesidade leve. Vamos ficar alerta!`)
            img.src = "./fotos/Hnormal.jpg"
        } else if (imc <= 39) {
            dica.innerHTML = (`Ola ${name}, seu IMC é de:  ${imc.toFixed(2)}. Cuidado, seu IMC está  acima do normal, obesidade moderada!
            O melhor tratamento para a obesidade é feito com dieta para emagrecer e com a prática regular de exercícios físicos.`)
            img.src = "./fotos/Hmoderado.jpg"
        } else if (imc >= 40) {
            dica.innerHTML = (`Ola ${name}, seu IMC é de:  ${imc.toFixed(2)}. Cuidado, seu IMC está  muito acima do normal, obesidade morbida!
            A associação de reeducação alimentar, exercício físico e uso de medicação anti-obesidade têm melhores resultados em curto e médio prazo, porém,
             muitas vezes, em pacientes com obesidade grau III, a atividade física acaba sendo bastante restrita, dependendo do grau de excesso de peso e das artropatias associadas`)
            img.src = "./fotos/Hobeso.jpg"
        }
    } else if (sex[1].checked) {
        if (imc < 19) {
            dica.innerHTML = (`Ola ${name}, seu IMC é de:  ${imc.toFixed(2)}. Cuidado, Seu IMC está abaixo do normal!`) //eleva altura ao quadrado
            img.src = "./fotos/Mmagra.jpg"
        } else if (imc < 23) {
            dica.innerHTML = (`Ola ${name}, seu IMC é de:  ${imc.toFixed(2)}. Parabens, seu IMC está  ótimo!`)
            img.src = "./fotos/Mleve.jpg"
        } else if (imc < 28) {
            dica.innerHTML = (`Ola ${name}, seu IMC é de:  ${imc.toFixed(2)}. Cuidado, seu IMC está  um pouco acima do normal, obesidade leve!`)
            img.src = "./fotos/Mnormal.jpg"
        } else if (imc < 38) {
            dica.innerHTML = (`Ola ${name}, seu IMC é de:  ${imc.toFixed(2)}. Cuidado, seu IMC está  acima do normal, obesidade moderada! O melhor tratamento para a obesidade é feito com dieta para emagrecer e com a prática regular de exercícios físicos.`)
            img.src = "./fotos/Mmoderada.jpg"
        } else if (imc >= 49 ) {
            dica.innerHTML = (`Ola ${name}, seu IMC é de:  ${imc.toFixed(2)}. Cuidado, seu IMC está  muito acima do normal, obesidade morbida!
                A associação de reeducação alimentar, exercício físico e uso de medicação anti-obesidade têm melhores resultados em curto e médio prazo, porém,
                 muitas vezes, em pacientes com obesidade grau III, a atividade física acaba sendo bastante restrita, dependendo do grau de excesso de peso e das artropatias associadas`)
            img.src = "./fotos/MObesa.jpg"
        }
    }

    if (sex[0].checked) {
        if( alt <= 1.60) {
            result.innerHTML = (`Para o sexo masculino, o IMC ideal é de 20 a 24,9. 
            Portanto, seu peso ideal seria entre 52kg a 58kg. ` )
        } else if (alt > 1.61, alt <= 1.70) {
            result.innerHTML = (`Para o sexo masculino, o IMC ideal é de 20 a 24,9. 
            Portanto, seu peso ideal seria entre 59kg a 73kg.`)    
        } else if (alt > 1.71, alt  <= 1.80 ) {
            result.innerHTML = (`Para o sexo masculino, o IMC ideal é de 20 a 24,9. 
            Portanto, seu peso ideal seria entre 74kg a 85kg.            `)    
        } else if (alt > 1.81, alt <= 1.90 ) {
            result.innerHTML = (`Para o sexo masculino, o IMC ideal é de 20 a 24,9.
            Portanto, seu peso ideal seria entre 86kg a 98kg.`)    
        } else if (alt > 1.91 ) {
            result.innerHTML = (`Para o sexo masculino, o IMC ideal é de 20 a 24,9. 
            Portanto, seu peso ideal seria entre 98kg a 106kg.`)            
        } 
        } else if (sex[1].checked) { 
        if( alt <= 1.50) {
            result.innerHTML = (`Para o sexo feminino,  o IMC ideal é de 19 a 23.9.  
            Portanto, seu peso ideal seria entre 42kg a 52kg`)
        } else if (alt > 1.51, alt <= 1.60) {
            result.innerHTML = (`Para o sexo feminino,  o IMC ideal é de 19 a 23.9.  
            Portanto, seu peso ideal seria entre 53kg a 62kg`)   
        } else if (alt > 1.61, alt <= 1.70 ) {
            result.innerHTML = (`Para o sexo feminino,  o IMC ideal é de 19 a 23.9.  
            Portanto, seu peso ideal seria entre 64kg a 76kg`)   
        } else if (alt > 1.71 ) {
            result.innerHTML = (`Para o sexo feminino,  o IMC ideal é de 19 a 23.9.  
            Portanto, seu peso ideal seria entre 77kg a 82kg`)    
        } 
        
    }
}
