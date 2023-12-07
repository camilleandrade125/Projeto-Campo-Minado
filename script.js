const campoMinado = [];

function faseAleatoria (){

    for (let i = 0; i < 5; i++)
    {
        campoMinado.push([]);
    
        for (let w = 0; w < 5; w++)
        {
            const numberAleatorio = Math.random() * 2
            const numerointeiro = Math.ceil(numberAleatorio)
            campoMinado[i].push(numerointeiro);
        }
    
         
    }
console.log(campoMinado);

}

faseAleatoria() 