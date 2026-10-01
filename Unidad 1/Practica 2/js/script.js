const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");

const boton = document.getElementById("boton");

function calcularOnda(tiempo, numeroArmonicos) {
    let suma = 0;

    for(let n = 1; n<= numeroArmonicos; n+= 2){
          let amplitud = 4 / (n * Math.PI);
          let onda = amplitud * Math.sin(2 * Math.PI * n * tiempo);
          suma += onda;
          }
          return suma;
          }

          function dibujarOnda(){
            let numeroArmonicos = parseInt(document.getElementById("armonicos").value);
            ctx.clearRect(0,0, canvas.width, canvas.height);
            const centroY = canvas.height / 2;
            ctx.beginPath();
            ctx.moveTo(0, centroY);
            ctx.lineTo(canvas.width, centroY);
            ctx.moveTo(0, 0);
            ctx.lineTo(0, canvas.height);
            ctx.strokeStyle = "black";
            ctx.stroke();

            ctx.beginPath();
            for(let x = 0;
                x < canvas.width;
                x++
            ){
                let tiempo = x / canvas.width;
                let onda = calcularOnda(tiempo, numeroArmonicos);
                let y = centroY - (onda * 100);
                if (x === 0){
                    ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                        }
                    }
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.stroke();
}

boton.addEventListener("click",dibujarOnda);

dibujarOnda();