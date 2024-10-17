let Mauricio;

let x = 1;
let y = 2;

console.log(x+y);


let nota = 70;

if (nota < 50){
 console.log("INS")
}
 else if(nota >= 50 && nota < 60){
console.log("S")
}
else if(nota >= 61 && nota < 70){
    console.log("B")
    }
else if(nota >= 70 && nota < 90){
    console.log("N")
    }
else if(nota >= 90 && nota < 100){
   console.log("SOB")
    }


let arr = [1,2,3,4,5];
let aux = 0;


for (let i = 0;i < arr.length; i++)
    {
        aux += arr[i];
    }

console.log(aux);

let persona = {
    nombre : "Mauricio",
    edad: 25
};


function parImpar(data)
{
    if (data%2 == 0)
        {
            console.log("Es par")
        }
    else
        {
            console.log("Es impar");
        }
}

let nums = [5,12,8,3,23]


for (let i = 0;i < nums.length; i++)
    {
        if(nums[i] >= 10)
            {
                console.log(nums[i]);
            }
    }


let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for (let i = 0;i < matriz.length; i++)
    {
        for (let j = 0;j < matriz[i];j++)
            {
                console.log(matriz[i])
            }
    }

let frutas = [manzana, naranja, manzana, plátano, plátano, pera]

function contarFrutas (frutas)
{
    let aux = 0;

    for(let i = 0; i < frutas.length; i++){
        for ()
    }
}