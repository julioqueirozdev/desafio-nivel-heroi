let heroi = ['Charli', 10000 ]
const mensagem = `O herói ${heroi[0]} está no nivel de`

console.log(heroi[1])

if(heroi[1]<1000){
    console.log(`${mensagem} Ferro`)
} else if (heroi[1]<=2000){
    console.log(`${mensagem} Bronze`)
} else if(heroi[1]<=5000){
    console.log(`${mensagem} Prata`)
} else if(heroi[1]<=7000){
    console.log(`${mensagem} Ouro`)
} else if (heroi[1]<=8000){
    console.log(`${mensagem} Platina`)
}else if(heroi[1]<=9000){
    console.log(`${mensagem} Ascendente`)
}else if(heroi[1]<=10000){
    console.log(`${mensagem} Imortal`)
}else if(heroi[1]>=10001){
    console.log(`${mensagem} Radiante`)
}

