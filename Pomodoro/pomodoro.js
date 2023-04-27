// Constante con su id
const Temporizador = document.getElementById('temporizador');
const TiempoTrabajo = document.getElementById('tiempoTrabajado');
const TiempoDescanso = document.getElementById('tiempoDescanso');
const TiempoDescansoLargo = document.getElementById('descansoLargo');
const SeleccionTexto = document.getElementById('cambiar-Texto');
const Boton = document.getElementById('btn-Iniciar');

let intervalo = 1000

Boton.addEventListener('click', function() {
      let asdf = document.getElementById('tiempoTrabajado').value;
      console.log(asdf)
      setInterval(
        function(){
          Temporizador.innerText=asdf;
          asdf--;

        },
        intervalo
        )
  }
)

