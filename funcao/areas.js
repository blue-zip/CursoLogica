function calcularAreaRetangulo(l, a){
    if(typeof l !== "number" || typeof a !== "number") {
        throw Error("calcularAreaRetangulo aceita dois parametros do tipo number")

        alert("nunca nem vi")
    }
    return l * a
}

function calcularAreaTriangulo(b, a) {
    if (typeof b !== "number" || typeof a !== "nunber") {
        throw new Error("calcularAreaTriangulo aceita dois parâmetro do tipo number")
    }
    return (b * a) / 2
}
