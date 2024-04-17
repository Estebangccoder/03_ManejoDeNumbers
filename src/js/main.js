// #Creacion de numeros

let numero1 = 0
let numero2 = Number(10)
let numero3 = new Number(5)

console.log(numero1)
console.log(numero2)
console.log(numero3)


// #Límites de maximos y minimos valores confiables para calcular en JavaScript
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

// #Operaciones Matemáticas

const numero4=6
const numero5=Number("10")

console.log(numero4+numero5)
console.log(numero4-numero5)
console.log(numero4*numero5)
console.log(numero4/numero5)

let numero6=45
let numero7= 89.75

console.log(typeof(numero6))
console.log(typeof(numero7))
console.log(Number.isInteger(numero6))
console.log(Number.isInteger(numero7))


let numero8 = Number.parseInt("Ingrese un número Entero")
let numero9 = Number.parseFloat("Ingrese un número decimal")


// #Transformar a codigo binario un numero
let numero10=45
console.info(numero10.toString(2))

let numero11=512.8

// #Agregar decimales a un numero

console.log(numero11)
console.log(numero11.toFixed(1))    
console.log(numero11.toFixed(2))  
console.log(numero11.toFixed(3))  
console.log(numero11.toFixed(4))  
//#Convierte un numero decimal a un entero

console.log(numero11.toFixed())

//#Convierte en formato exponencial
console.info(numero11.toExponential())
console.info(numero11.toPrecision())


//# CLASE DE MATH

    // #Elevacion a la potencia
    console.log(4**4)
    console.log (Math.pow(4,4))
    //#Raiz cuadrada
    console.log(Math.sqrt(16))
    //#Raiz Cubica
    console.log (Math.cbrt(68))
    //#coseno
    console.log(Math.cos(0))

    //#Numeros positivos o negativos

    let numero12=52
    if (numero12>0){
        console.log("Es positivo")
    } else{
        console.log("Es negativo")
    }
    
    console.log(Math.sign(numero12))

    //Numero maximo
    console.log(Math.max(41,60,-12,9,41))
     //Numero minimo
     console.log(Math.min(41,60,-12,9,41))

     let numero13=3.5
    
     

    //Redondear un numero

    console.log(Math.round(numero13))
        
        //Redondea a la cota menor
        console.log(Math.floor(numero13))
        
        //Redondea a la cota mayor
        console.log(Math.ceil(numero13))
    
    let numero14= Math.round(Math.random()*100)

    document.write(numero14)