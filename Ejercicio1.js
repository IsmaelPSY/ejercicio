function toArray(obj) {
    //Implementación
    let rpt = []

    for (const prop in obj){
        rpt.push([prop,obj[prop]])
    }


    return rpt;
}

module.exports = toArray;