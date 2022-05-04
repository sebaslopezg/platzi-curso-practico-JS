//funciones Helpers, utils

function esPar(numero){
    return (numero % 2 === 0);
    }
    
    function calcularMediaAritmetica(lista){
        
        const sumaLista = lista.reduce(
            function(valorAcomulado = 0, nuevoElemento){
                return valorAcomulado + nuevoElemento;
            }
        );
            
            const promedioLista = sumaLista / lista.length;
            return promedioLista;
    }

// Calculadora de mediana

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}


// Mediana general

const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del top 10%

const spliceStart = ((salariosColSorted.length * 90) / 100);
const splicelength = salariosColSorted.length - spliceStart;

const salariosTop10Col = salariosColSorted.splice(spliceStart, splicelength);

const medianaTop10Col = medianaSalarios(salariosTop10Col);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});