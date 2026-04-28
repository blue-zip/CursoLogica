function calcularAreaRetangulo(l, a){
    if(typeof l !== "number" || typeof a !== "number") {
        alert("apenas numeros")
        return null
    }
    return l * a
}