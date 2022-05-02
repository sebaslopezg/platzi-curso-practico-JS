// const lista1 = [
//     1,
//     2,
//     3,
//     1,
//     4,
//     2,
//     2,
//     1,
//     2,
//     2,
// ];

function calcularModa(lista){

    const listaCount = {};

    lista.map(function(elemento){
    
        if(listaCount[elemento]){
            listaCount[elemento] += 1; 
        }else{
        listaCount[elemento] = 1;
        } 
    
    });
    
    const listaArray = Object.entries(listaCount).sort(
        function(valorAcomulado, nuevoValor){
            return valorAcomulado[1] - nuevoValor[1];
        }
    );
    
    const moda = listaArray[listaArray.length - 1];

    return moda;

}