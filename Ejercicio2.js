function countPrimes(number) {
  let rpt = []
    let aux
    if(number < 2) return 0
    for(let i=2; i<number;i++){
      aux = 1  
      for(let x=2;x<i;x++){
            if(i%x===0){
              aux = 0
            }
          }
        if(aux) rpt.push(i);
    } 
    
    return rpt.length
}

module.exports = countPrimes; 

