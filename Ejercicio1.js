function toArray(obj) {
    //Implementación
    let a = []

    for (const prop in obj){
        a.push([prop,obj[prop]])
    }


    return a;
}

module.exports = toArray;