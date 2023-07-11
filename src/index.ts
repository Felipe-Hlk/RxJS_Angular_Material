import {from} from "rxjs";

let numbers = [1, 5, 10];
let source = from (numbers); //elemento observable

function component() {
    source.subscribe({ //utilizando do subscribe para poder executar o observable source
        next: (x) => console.log(x)
    })
    
  }

(component());