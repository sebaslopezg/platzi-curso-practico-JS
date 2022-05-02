function calcularMediaAritmetica(lista){
    
    const sumaLista = lista.reduce(
        function(valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    );
        
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
     }

const lista1 = [
    400000000,
    200,
    500,
    100,
];

const listaOrdenada = lista1.sort(function(a,b){
return a - b;
});

const mitadLista1 = parseInt(listaOrdenada.length/2);

function esPar(numero){

    numero = numero % 2;

    if(numero === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

if(esPar(lista1.length)){
const elemento1 = lista1[mitadLista1];
const elemento2 = lista1[mitadLista1 - 1];

const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
mediana = promedioElemento1y2;
}else{
    mediana = lista1[mitadLista1];
}
