const campoMinado = [];
let pontuacao = 0;

function faseAleatoria (h, we){

    const campo = document.getElementById("campo-minado")

    for (let i = 0; i < h; i++)
    {
        campoMinado.push([]);
        const div = document.createElement("div")
        campo.appendChild(div)
        div.className = "fundacao"


    
        for (let w = 0; w < we; w++)
        {
            const divHorizontal = document.createElement("div")
            divHorizontal.className = "bloco-horizontal"
            div.appendChild(divHorizontal)
            const numberAleatorio = Math.random() * 2
            const numerointeiro = Math.ceil(numberAleatorio)
            campoMinado[i].push(numerointeiro);
            divHorizontal.setAttribute("data-info", numerointeiro)


        }
         
    }

}

faseAleatoria(5, 5) 

const blocos = document.getElementsByClassName("bloco-horizontal")
const modal = document.getElementById("gamerOver")

const novosBlocos = [...blocos]
novosBlocos.forEach(element => {
    element.addEventListener("click", function(){
       const bombaOuNao = element.getAttribute("data-info")
       if (bombaOuNao == 1) {
        element.style.backgroundImage = "url(./bomba.png)"
        modal.style.display = "flex";
    
       }
    
    })
});

function aoclicar(){
    window.location.reload();

}