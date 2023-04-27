// Constante con su id
const colorCard = document.getElementById("colorCard");
const Temporizador = document.getElementById('temporizador');
const Boton = document.getElementById('btn-Iniciar');
const TiempoTrabajo = document.getElementById('tiempoTrabajado');
const TiempoDescanso = document.getElementById('tiempoDescanso');
const TiempoDescansoLargo = document.getElementById('descansoLargo');
const SeleccionTexto = document.getElementById('cambiar-Texto');
const colorDentro = document.querySelectorAll(".colorDentro");

let intervalo = 100

Boton.addEventListener('click', function() {
      let tiempoTotal = document.getElementById('tiempoTrabajado').value * 60
      + document.getElementById('tiempoDescanso').value * 60 
      + document.getElementById('descansoLargo').value *60;
      let tiempoRestante = tiempoTotal

      // Cambio de texto
      SeleccionTexto.innerText = "Tiempo de trabajo iniciado"
      // Cambio de Color de Carta
      colorCard.style.backgroundColor = "green";
      // Cambio de color de input y boton
      colorDentro.forEach(elemento => {
        elemento.style.backgroundColor = "blue"
      });

      const contador = setInterval(
        function(){
          // Temporizador
          const minutos = Math.floor(tiempoRestante/60)
          const segundos = tiempoRestante % 60
          Temporizador.innerText=`${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
          tiempoRestante--;
          if (tiempoRestante<0)
            {
              clearInterval(contador)
              SeleccionTexto.innerText = "Tiempo Terminado! A descansar"
            }

        },
        intervalo
        )
  }
)

