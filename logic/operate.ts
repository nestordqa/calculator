import Big from 'big.js';

const operate = (firstV: string | null, secondV:string | null , operator: any)=>{
    const first = Big(secondV || "0");
    const second = Big(firstV || (operator === "/" || operator === '*' ? "1" : "0"));    

    if(operator === "+") return first.plus(second).toString();
    if(operator === "-") return first.minus(second).toString();
    if(operator === "*") return first.times(second).toString();
    if (operator === "/") {
        if(secondV === "0") {
          alert("Divide by 0 error");
          return "0";
        } else {
          return first.div(second).toString();
        };
    };
    
};

export default operate;