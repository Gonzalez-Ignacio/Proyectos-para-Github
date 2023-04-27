// Constante con su id
const Temporizador = document.getElementById('temporizador');
const TiempoTrabajo = document.getElementById('tiempoTrabajado');
const TiempoDescanso = document.getElementById('tiempoDescanso');
const TiempoDescansoLargo = document.getElementById('descansoLargo');
const SeleccionTexto = document.getElementById('cambiar-Texto');
const Boton = document.getElementById('btn-Iniciar');

let intervalo = 1000

Boton.addEventListener('click', function() {
      let tiempoTotal = document.getElementById('tiempoTrabajado').value * 60 + document.getElementById('tiempoTrabajado').value * 60;
      let tiempoRestante = tiempoTotal

      setInterval(
        function(){
          const minutos = Math.floor(tiempoRestante/60)
          const segundos = tiempoRestante % 60
          Temporizador.innerText=`${minutos}:${segundos}`
          tiempoRestante--;
        },
        intervalo
        )
  }
)

