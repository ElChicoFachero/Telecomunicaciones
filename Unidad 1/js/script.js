 const canvasAnalogica = document.getElementById("graficaAnalogica");
        const canvasDigital = document.getElementById("graficaDigital");

        const ctxA = canvasAnalogica.getContext("2d");
        const ctxD = canvasDigital.getContext("2d");

        let tiempo = 0;

        function ajustarCanvas(canvas) {

            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;

        }

        ajustarCanvas(canvasAnalogica);
        ajustarCanvas(canvasDigital);


        // Dibujar cuadrícula
        function cuadrícula(ctx, canvas) {

            ctx.strokeStyle = "#222";
            ctx.lineWidth = 1;

            // Líneas verticales
            for (let x = 0; x < canvas.width; x += 50) {

                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();

            }

            // Líneas horizontales
            for (let y = 0; y < canvas.height; y += 50) {

                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();

            }

            // Eje central
            ctx.strokeStyle = "#555";
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);
            ctx.lineTo(canvas.width, canvas.height / 2);
            ctx.stroke();
        }

        // SEÑAL ANALÓGICA
        function dibujarAnalogica() {

            const canvas = canvasAnalogica;

            ctxA.clearRect(0, 0, canvas.width, canvas.height);

            cuadrícula(ctxA, canvas);

            ctxA.beginPath();

            ctxA.strokeStyle = "#00ff88";
            ctxA.lineWidth = 3;

            for (let x = 0; x < canvas.width; x++) {

                let amplitud = 90;

                let frecuencia = 0.025;

                let y = canvas.height / 2 +
                    Math.sin((x + tiempo) * frecuencia) * amplitud;

                if (x === 0) {
                    ctxA.moveTo(x, y);
                } else {
                    ctxA.lineTo(x, y);
                }

            }

            ctxA.stroke();
        }
        // SEÑAL DIGITAL
        function dibujarDigital() {

            const canvas = canvasDigital;

            ctxD.clearRect(0, 0, canvas.width, canvas.height);

            cuadrícula(ctxD, canvas);

            ctxD.beginPath();

            ctxD.strokeStyle = "#00aaff";
            ctxD.lineWidth = 3;

            let periodo = 120;

            let alto = canvas.height / 2 - 70;
            let bajo = canvas.height / 2 + 70;

            for (let x = 0; x < canvas.width; x++) {

                let valor =
                    Math.floor((x + tiempo) / periodo) % 2;

                let y = valor === 0 ? bajo : alto;

                if (x === 0) {
                    ctxD.moveTo(x, y);
                } else {

                    let valorAnterior =
                        Math.floor((x - 1 + tiempo) / periodo) % 2;

                    let yAnterior =
                        valorAnterior === 0 ? bajo : alto;

                    // Cambio vertical
                    if (y !== yAnterior) {

                        ctxD.lineTo(x, yAnterior);
                        ctxD.lineTo(x, y);

                    } else {

                        ctxD.lineTo(x, y);

                    }
                }
            }

            ctxD.stroke();
        }
        // Animación
        function animar() {

            tiempo += 2;

            dibujarAnalogica();
            dibujarDigital();

            requestAnimationFrame(animar);
        }
        animar();
        // Ajustar al cambiar tamaño de ventana
        window.addEventListener("resize", () => {

            ajustarCanvas(canvasAnalogica);
            ajustarCanvas(canvasDigital);

        });