
let number1 = 2//Math.round(Math.random() * 100)
let number2 = 4//Math.round(Math.random() * 100)

document.write(number1, \n)
document.write(number2)





console.groupCollapsed("Ejercicio 1")
console.log(" 1-Sumar dos números") 

const addition= number1 + number2
console.log(addition)

console.groupEnd()

console.groupCollapsed("Ejercicio 2") ; console.log(" 2-Restar dos números") 

const substraction= number1 - number2
console.log(substraction)
console.groupEnd()

console.groupCollapsed("Ejercicio 3") ; console.log(" 3-Multiplicar dos números") 

const multiplication = number1 * number2
console.log(multiplication)
console.groupEnd()

console.groupCollapsed("Ejercicio 4") ; console.log(" 4-Dividir dos números") 

const divition = number1 / number2
console.log(multiplication)

console.groupEnd()

console.groupCollapsed("Ejercicio 5") ; console.log(" 5-Calcular el módulo (resto) de una división") 

const module = number1%number2
console.log(module) 
console.groupEnd()

console.groupCollapsed("Ejercicio 6") ; console.log(" 6-Generar un número aleatorio entre 1 y 10") 
const min=1
const max=10

let number3 = Math.round((Math.random() *(max-min)+min))
let number4 = Math.round((Math.random() *(max-min)+min))

console.log(number3) 
console.log(number4) 

console.groupEnd()

console.groupCollapsed("Ejercicio 7") ; console.log(" 7-Elevar un número a la potencia de otro") 

const potencia = number1**number2
console.log(potencia) 

console.groupEnd()
console.groupCollapsed("Ejercicio 8") ; console.log(" 8-Calcular la raíz cuadrada de un número") 
console.log(Math.sqrt(number2))
console.groupEnd()
console.groupCollapsed("Ejercicio 9") ; console.log(" 9-Convertir grados Celsius a Fahrenheit") ;console.groupEnd()

console.groupCollapsed("Ejercicio 10") ; 
console.log(" 10-Calcular el área de un círculo") ;

console.groupEnd()

console.groupCollapsed("Ejercicio 11") ;

console.log(" 11-Calcular el perímetro de un cuadrado") ;
    const ladoCuadrado = 3
    console.log (ladoCuadrado * 4)
console.groupEnd()

console.groupCollapsed("Ejercicio 12") ; 
console.log(" 12-Calcular el volumen de una esfera") ;
const radioEsfera=20
const volumenEsfera=(radioEsfera**3)*(4/3)*Math.PI
console.log (volumenEsfera)

console.groupEnd()

console.groupCollapsed("Ejercicio 13") ; 
console.log(" 13-Calcular el área de un triángulo") ;
const base=20
const altura=10
const areaTriangulo=(base*altura)/2

console.groupEnd()

console.groupCollapsed("Ejercicio 14") ; 
console.log(" 14-Generar la tabla de multiplicar del número 5") ;

    for (let i = 1; i <= 10; i++) {
        console.log(i * 5)
    }

console.groupEnd()

console.groupCollapsed("Ejercicio 15") ; 
console.log(" 15-Encontrar el número mayor entre 3, 7 y 2") ;
console.log(Math.max(3,7,2))

console.groupEnd()

console.groupCollapsed("Ejercicio 16") ; 
console.log(" 16-Encontrar el número menor entre 10, 20 y 5") ;
console.log(Math.min(10,20,5))

console.groupEnd()

console.groupCollapsed("Ejercicio 17") ; 
console.log(" 17-Calcular el promedio de 4, 6 y 8") ;
const promedio = (4+6+8)/3

console.log(promedio) 

console.groupEnd()
console.groupCollapsed("Ejercicio 18") ; 
console.log(" 18-Calcular la factorial de 5") ;
console.log(1*2*3*4*5)

console.groupEnd()

console.groupCollapsed("Ejercicio 19") ; 
console.log(" 19-Redondear el número 3") ;
console.log(Math.round(3.2))

console.groupEnd()

console.groupCollapsed("Ejercicio 20") ; 
console.log(" 20-Calcular el doble de 9") ;
console.log(2*9)

console.groupEnd()
console.groupCollapsed("Ejercicio 21") ; 
console.log(" 21-Calcular el triple de 4") ;
console.log(3*4)

console.groupEnd()

console.groupCollapsed("Ejercicio 22") ; 
console.log(" 22-Calcular el cuadrado de 6") ;
console.log(6**2)

console.groupEnd()
console.groupCollapsed("Ejercicio 23") ; 
console.log(" 23-Calcular el cubo de 3") ;
console.log(3**3)

console.groupEnd()

console.groupCollapsed("Ejercicio 24") ; 
console.log(" 24-Calcular la suma de los primeros 10 números naturales") ;
let suma=0
for (let i = 1; i <= 10 ; i++) {
   suma=suma+i   
}
console.log(suma)

console.groupEnd()

console.groupCollapsed("Ejercicio 25") ; 
console.log(" 25-Calcular la resta entre 50 y 25") ;
console.log(50-25)

console.groupEnd()

console.groupCollapsed("Ejercicio 26") ; 
console.log(" 26-Multiplicar 7 por 9") ;
console.log(7*9)

console.groupEnd()

console.groupCollapsed("Ejercicio 27") ; 
console.log(" 27-Dividir 144 por 12") ;
console.log(144/12)

console.groupEnd()

console.groupCollapsed("Ejercicio 28") ; 
console.log(" 28-Obtener el módulo de 17 dividido por 4") ;
console.log(17%4)

console.groupEnd()

console.groupCollapsed("Ejercicio 29") ; 
console.log(" 29-Generar un número aleatorio entre 20 y 30") ;
console.log(Math.round(Math.random() * (30 - 20) + 20))


console.groupEnd()

console.groupCollapsed("Ejercicio 30") ; 
console.log(" 30-Elevar 2 a la potencia de 8") ;
console.log(Math.pow(2,8))

console.groupEnd()

console.groupCollapsed("Ejercicio 31") ; 
console.log(" 31-Calcular la raíz cuadrada de 144") ;
console.log(Math.sqrt(144))

console.groupEnd()

console.groupCollapsed("Ejercicio 32") ; 
console.log(" 32-Convertir 100 grados Celsius a Fahrenheit") ;
console.log((100 * (9/5)) + 32)

console.groupEnd()

console.groupCollapsed("Ejercicio 33") ; 
console.log(" 33-Calcular el área de un rectángulo de base 5 y altura 10") ;

console.log(5*10)

console.groupEnd()

console.groupCollapsed("Ejercicio 34") ; 
console.log(" 34-Calcular el perímetro de un círculo con radio 6") ;
console.log(Math.PI*2*6)

console.groupEnd()

console.groupCollapsed("Ejercicio 35") ; 
console.log(" 35-Calcular el volumen de un cubo con lado 4") ;
console.log(4**3)

console.groupEnd()

console.groupCollapsed("Ejercicio 36") ;
console.log(" 36-Calcular el área de un rombo con diagonales de 8 y 10") ;
console.log((10*8)/2)

console.groupEnd()

console.groupCollapsed("Ejercicio 37") ; 
console.log(" 37-Calcular el área de un trapecio con bases 6 y 10 y altura 4") ;

console.log(((6+10)*4)/2)
console.groupEnd()

console.groupCollapsed("Ejercicio 38") ; 
console.log(" 38-Generar la tabla de multiplicar del número 8") ;
for (let i = 1; i <= 10; i++) {
    console.log(i * 8)
}



console.groupEnd()

console.groupCollapsed("Ejercicio 39") ; 
console.log(" 39-Encontrar el número mayor entre 15, 20 y 25") ;
console.log(Math.max(15, 20, 25))

console.groupEnd()

console.groupCollapsed("Ejercicio 40") ; 
console.log(" 40-Encontrar el número menor entre 50, 75 y 100") ;
console.log(Math.min(50, 75, 100))

console.groupEnd()

console.groupCollapsed("Ejercicio 41") ; 
console.log(" 41-Calcular el promedio de 7, 9 y 12") ;
console.log((7+9+12)/3)


console.groupEnd()

console.groupCollapsed("Ejercicio 42") ;
console.log(" 42-Calcular la factorial de 7") ;


console.groupEnd()

console.groupCollapsed("Ejercicio 43") ; 
console.log(" 43-Redondear el número 7") ;
console.log(Math.round(7.7))

console.groupEnd()

console.groupCollapsed("Ejercicio 44") ; 
console.log(" 44-Calcular el doble de 15") ;
console.log(15*2)

console.groupEnd()

console.groupCollapsed("Ejercicio 45" ;
console.log(" 45-Calcular el triple de 6") ;
console.log(6*3)

console.groupEnd()

console.groupCollapsed("Ejercicio 46" ;
console.log(" 46-Calcular el cuadrado de 8") ;
console.log(Math.pow(8,2))

console.groupEnd()


console.groupCollapsed("Ejercicio 47") ; 
console.log(" 47-Calcular el cubo de 4") ;
console.log(Math.pow(4,3))

console.groupEnd()


console.groupCollapsed("Ejercicio 1") ; console.log(" 48-Calcular la suma de los primeros 15 números naturales") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 49-Calcular la resta entre 100 y 55") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 50-Multiplicar 6 por 8") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 51-Dividir 225 por 15") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 52-Obtener el módulo de 20 dividido por 7") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 53-Generar un número aleatorio entre 40 y 50") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 54-Elevar 3 a la potencia de 4") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 55-Calcular la raíz cuadrada de 169") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 56-Convertir 80 grados Celsius a Fahrenheit") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 57-Calcular el área de un rectángulo de base 8 y altura 12") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 58-Calcular el perímetro de un círculo con radio 8") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 59-Calcular el volumen de un cubo con lado 5") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 60-Calcular el área de un rombo con diagonales de 12 y 16") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 61-Calcular el área de un trapecio con bases 8 y 12 y altura 6") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 62-Generar la tabla de multiplicar del número 9") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 63-Encontrar el número mayor entre 25, 30 y 35") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 64-Encontrar el número menor entre 80, 95 y 110") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 65-Calcular el promedio de 8, 10 y 14") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 66-Calcular la factorial de 8") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 67-Redondear el número 9") ;console.groupEnd()2") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 68-Calcular el doble de 18") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 69-Calcular el triple de 7") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 70-Calcular el cuadrado de 10") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 71-Calcular el cubo de 5") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 72-Calcular la suma de los primeros 20 números naturales") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 73-Calcular la resta entre 200 y 75") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 74-Multiplicar 9 por 11") ; console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 75-Dividir 300 por 25") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 76-Obtener el módulo de 30 dividido por 9") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 77-Generar un número aleatorio entre 60 y 70") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 78-Elevar 4 a la potencia de 5") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 79-Calcular la raíz cuadrada de 196") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 80-Convertir 120 grados Celsius a Fahrenheit") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 81-Calcular el área de un rectángulo de base 10 y altura 15") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 82-Calcular el perímetro de un círculo con radio 10") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 83-Calcular el volumen de un cubo con lado 6") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 84-Calcular el área de un rombo con diagonales de 14 y 18") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 85-Calcular el área de un trapecio con bases 10 y 15 y altura 8") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 86-Generar la tabla de multiplicar del número 10") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 87-Encontrar el número mayor entre 35, 40 y 45") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 88-Encontrar el número menor entre 90, 105 y 120") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 89-Calcular el promedio de 9, 11 y 15") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 90-Calcular la factorial de 9") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 91-Redondear el número 10") ;console.groupEnd()8") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 92-Calcular el doble de 21") ; console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 93-Calcular el triple de 8") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 94-Calcular el cuadrado de 12") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 95-Calcular el cubo de 6") ;console.groupEnd()
console.groupCollapsed("Ejercicio 1") ; console.log(" 96-Calcular la suma de los primeros 25 números naturales") ;console.groupEnd()
