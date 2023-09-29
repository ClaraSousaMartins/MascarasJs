// máscara para o cpf
let input = document.querySelector ("#cpf")
//qurySelector:tag, id, classe
//para id e classe utilizar a mesma notação usada pelo css
//("input")

// () função anônima
// => arrow function
// function nome ()
//{ }

input.addEventListener("keypress", () => {
let inputLenght= input.value.length

if (inputLenght==3 || inputLenght==7 ) {
    input.value+= "."
    //imput.value = input.value+"."
    }

else if (inputLenght==11){
        input.value+= "."
}

})

//=======================================================
//máscara para o cnpj
let inputCnpj=document.querySelector ("#cnpj")
inputCnpj.addEventListener("keypress",() =>
{
    let cnpjLength=inputCnpj.value.length
    if(cnpjLength==2 ||cnpjLength==6 )
    {
    inputCnpj.value+="."
    }
    if(cnpjLength==10)
    {
    inputCnpj.value+="/"
    }
    if(cnpjLength==15)
    {
    inputCnpj.value+="-"
    }
})



