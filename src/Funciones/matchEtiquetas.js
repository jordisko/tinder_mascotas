let prioridad=1
function matchEtiquetas(etiquetasPersonaPersona,etiquetasPersonaAnimal,etiquetasAnimalPersona,etiquetasAnimalAnimal){
    if (prioridad<=1){
        let resultado= (etiquetasPersonaPersona.filter(element => etiquetasPersonaAnimal.includes(element)))
            prioridad+= resultado.length;
        let resultado2= (etiquetasAnimalPersona.filter(element2 => etiquetasAnimalAnimal.includes(element2)))
            prioridad+= resultado2.length;
        }

    return prioridad
}
console.log(matchEtiquetas(["alto","guapo","gordo"],["bajo","feo","gordo"],["mayor","peludo"],["mayor","calvo"]))

