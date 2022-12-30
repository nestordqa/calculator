import operate from './operate';
import isNumber from './isNumber';
import { operation } from '../app/types';

const operations : any = (state: operation, buttonValue: any) => {

    if(isNumber(buttonValue)){
      if(!state.total && !state.operador && !state.siguiente){
        return{
          total: buttonValue,
          siguiente: null,
          operador: null
        }
      };
      if(state.total && !state.operador){
        return{
          total: state.total + buttonValue,
          siguiente:null,
          operador: null
        };
      };
      if(state.total && state.operador){
        if(!state.siguiente){
          return{
            total: buttonValue,
            siguiente: state.total,
            operador: state.operador
          };
        };
        if(state.siguiente){
          return{
            total: state.total + buttonValue,
            siguiente: state.siguiente,
            operador: state.operador
          }
        }
      };

    };

    if(buttonValue === "/" || buttonValue === "*" || buttonValue === "+" || buttonValue === "-"){
        if(state.operador && state.total){
            const result = operate(state.total, state.siguiente, state.operador);
            return{
                total: result, 
                siguiente:null, 
                operador:null
            };
        };
        if(state.total && !state.operador){
            return{
              total: '0',
              siguiente: state.total,
              operador: buttonValue
            };
        
    };
  };
    if(buttonValue == "."){
        if(state.total){
            if(state.total.includes(".")) return {
              total: state.total,
              siguiente: state.siguiente,
              operador: state.operador
            };
            return {              
                total: state.total + ".",
                siguiente: state.siguiente,
                operador: state.operador
            };
        };
        return{ 
          total: "0.",
          siguiente: state.siguiente,
          operador: state.operador
        };
    };

    if(buttonValue === 'DEL'){
      return{
        total: '0',
        siguiente: state.siguiente,
        operador: state.operador
      }
    };

    if(buttonValue === 'RESET'){
        return{ 
          total:'0',
          siguiente: null,
          operador: null
        }
    };

    if(buttonValue === "="){
        if(state.total && state.operador && state.siguiente){
          const result = operate(state.total, state.siguiente, state.operador);
            return{
                total: result,
                siguiente: null,
                operador:null,
            }
        };
    };

};

export default operations;