//Codigo de cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}

console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();
//Codigo del triángulo

console.group("Triangulos");
/*
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "los lados del triangulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, "
    + baseTriangulo
    + "cm"
);


const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");
*/

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base,altura){
    return (base * altura) / 2
}

console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código Circulos
console.group("Circulos");

/*
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log("El radio del circulo: " + radioCirculo + "cm");
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
console.log("PI es: " + PI);
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
console.log("El area del circulo es: " + areaCirculo + "cm^2");
*/

const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

function mostrar(inner){
    const parrafo = document.getElementById("mensaje");
    parrafo.innerHTML = inner;
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

   const perimetro = perimetroCuadrado(value);
   mostrar("El perimetro del cuadrado es de: " + perimetro + " cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

   const perimetro = areaCuadrado(value);
   mostrar("El area del cuadrado es de: " + perimetro + " cm");
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");
    

    const resultado = input1.value + input2.value + input3.value;

    mostrar("El perimetro del triangulo es: " + resultado + " cm");
}

function calcularAreaTriangulo(){
    const base = document.getElementById("inputTriangulo3");
    const altura = document.getElementById("inputTriangulo4");
    const resultado = (base.value * altura.value) / 2;
    mostrar("El area del triangulo es de: " + resultado + " cm");
}

//calcular altura triangulo isósceles

function calcularAlturaTriangulo(){
    const base = document.getElementById("baseTriangulo").value;
    const lados = document.getElementById("ladosTriangulo").value;

    const preResultado = (lados * lados) - ((base * base)/4);
    const resultado = Math.sqrt(preResultado);

    mostrar("La altura del triangulo isósceles es de: " + resultado)
}
