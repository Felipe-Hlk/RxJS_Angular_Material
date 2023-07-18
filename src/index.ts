import {delay, filter, fromEvent, map} from "rxjs";

// Define uma interface chamada "mouseTrack" que descreve a estrutura de um objeto com as propriedades "x" e "y" do tipo number.
interface mouseTrack {
    x: number;
    y: number;
}

// Obtém a referência ao elemento HTML com o id "circle" e armazena na variável "circle".
let circle = document.getElementById('circle');

// Cria um Observable chamado "source" a partir do evento "mousemove" do documento.
// Cada vez que ocorre um evento "mousemove", o código dentro do pipe() é executado.
let source = fromEvent(document, 'mousemove').pipe(
    // Mapeia o evento do mouse (MouseEvent) para um objeto com as propriedades "x" e "y".
    map((e: MouseEvent) => {
        return { x: e.clientX, y: e.clientY };
    }),
    // Filtra os valores com base na propriedade "x" do objeto mouseTrack.
    // Apenas os valores em que "x" é menor que 500 serão permitidos.
    // filter((value: mouseTrack) => value.x < 500),
    delay(100)
    
    
);

// Função chamada quando um valor é emitido pelo Observable.
// Neste caso, a função simplesmente exibe o valor no console.
function onNext(value: mouseTrack) {
    console.log(value)
    circle.style.left = `${value.x}px`;
    circle.style.top = `${value.y}px`;

}

// Subscreve ao Observable "source" e especifica as ações a serem executadas para cada tipo de evento.
source.subscribe({
    // Função chamada quando um próximo valor é emitido pelo Observable.
    next: (value: mouseTrack) => onNext(value),
    // Função chamada quando ocorre um erro no Observable.
    error: (e: Error) => console.log(e),
    // Função chamada quando o Observable é concluído (não aplicável neste caso).
    complete: () => console.log(),
});
