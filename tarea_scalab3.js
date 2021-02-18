
//Función que me permita encontrar todas las ordenes que contengan de ingredients lechuga y palta
const filtrarOrdenes2Ingredients = ({ingredient1='', ingredient2=''}) => {
    let resultado = sandwichOrders.filter(sandwichOrder =>
        sandwichOrder.ingredients.indexOf(ingredient1) !== -1 && sandwichOrder.ingredients.indexOf(ingredient2) !== -1);
    console.log(resultado);
};


//filtrarOrdenes2Ingredients({ingredient1:'lechuga', ingredient2:'palta'});

//Función que me permita encontrar una orden a través del id y que me devuelva un string con el siguiente formato de ejemplo:
// La orden fue realizada el (09-10-2020), la orden llevó (mechada) y (bagette). En caso de no encontrar nada a través del id, el mensaje, a modo de ejemplo,
// deberá ser: No se encontró la orden con id (800)

const findOrderForId = ({ id = undefined }) => {
    const result = sandwichOrders.find(sandwichOrder => sandwichOrder.id==id);
    if (result) {
        return `La orden fue realizada el (${result?.ordered}), la orden llevó (${result?.protein}) y (${result?.bread})`;
    }else{
        return `No se encontró la orden con id (${id})`;
    }
 }

//findOrderForId({id:5});

//Función que me permita encontrar una orden a través del id y que me indique si la orden incluye pepinillos entre sus ingredients,
// debería devolver un true|false como respuesta.

const findOrderForIdIncludeIngredient = ({id = undefined, ingredient1 = ''}) => {
    let result = sandwichOrders.find(sandwichOrder => sandwichOrder.id===id);
    let resultado = result.ingredients.indexOf(ingredient1) !== -1;
    return resultado;
};

// findOrderForIdIncludeIngredient({id:0, ingredient1:'pepinillos'}); //true
// findOrderForIdIncludeIngredient({id:1, ingredient1:'pepinillos'}); //false
// findOrderForIdIncludeIngredient({id:2, ingredient1:'pepinillos'}); //true


// Función que me permita encontrar todas las orden que se hicieron en un día en específico, es decir, si yo coloco 20-10-2020,
//  la función me debería devolver: Se encontraron N ordenes para la fecha 20-10-2020.

//Función que me permita encontrar todas las ordenes que contengan de ingredients lechuga y palta
const filtrarOrdenesPorDia = ({ fecha = undefined }) => {
    let resultado = sandwichOrders.filter(sandwichOrder =>
        sandwichOrder.ordered === fecha);
    return `Se encontraron (${resultado.length}) ordenes para la fecha ${fecha}`;
};

//filtrarOrdenesPorDia({fecha:'25-10-2020'});

//Función que me devuelva las fechas de todas las ordenes que tuvieron como proteina not burger y de ingredients cebolla caramelizada

const filtrarOrdenesPorProteinaIngrediente = ({proteina='', ingredient1=''}) => {
    let resultadoproteina = sandwichOrders.filter(sandwichOrder =>
        sandwichOrder.protein === proteina);
    let resultadoIngrediente = resultadoproteina.filter(resultado =>
        resultado.ingredients.indexOf(ingredient1)!==-1);
    let fechas = [];
    Object.values(resultadoIngrediente).forEach(element => {
        return fechas.push(element?.ordered);
    });

    //acá no se si se tenían que devolver las fechas únicas, o todas las fechas aún asi se repitan
    return fechas;
};

//filtrarOrdenesPorProteinaIngrediente({proteina:'not burger', ingredient1:'cebolla caramelizada'});


/**Ejercicio dificil
No es obligatorio que lo completen pero les servirá para entender como funciona .reduce()

Función que me devuelva un objeto, con la cantidad correspondiente de ordenes por cada bread:

Deben usar .reduce()
La lista de ingredientes es la siguiente:
 const breads = ["bagette", "brioche", "pita", "marraqueta", "hallulla"]
Resultado de la operación para que puedan evaluar:
Result:
{
    hallulla: 335,
    marraqueta: 438,
    bagette: 628,
    brioche: 257,
    pita: 342
}*/

const ordersByBread = ( breads, item) => {
    let {bread} = item; 
    let {[bread]: items = 0 } = breads;  
    breads[bread] = items + 1; 
    return breads;
};

const groupSandwichOrdersByBread = () => sandwichOrders.reduce(
    ordersByBread, {} //el elemento con el que inicia es un objeto
);

//groupSandwichOrdersByBread() 





