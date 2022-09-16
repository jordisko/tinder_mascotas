
function matchLocalizacion(codigoPostaAnimal, codigoPostalPersona) {
    let contador = 0;
    let prioridad=1
    for(let i=0 ; i<2; i++){
        if (
            codigoPostaAnimal[i]==codigoPostalPersona[i]){
            contador++;}
        
        
    }
    if (contador ==2){
    prioridad=1;
    if (contador <2){
    prioridad=0;
    }
    return prioridad;
    }
}
