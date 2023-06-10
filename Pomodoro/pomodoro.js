// Constante con su id
const colorCard = document.getElementById("colorCard");
const Temporizador = document.getElementById('temporizador');
const Boton = document.getElementById('btn-Iniciar');
const TiempoTrabajo = document.getElementById('tiempoTrabajado');
const TiempoDescanso = document.getElementById('tiempoDescanso');
const TiempoDescansoLargo = document.getElementById('descansoLargo');
const SeleccionTexto = document.getElementById('cambiar-Texto');
const colorDentro = document.querySelectorAll(".colorDentro");
const btnPausar = document.getElementById("btn-Pausar");
const btnReiniciar = document.getElementById("btn-Reiniciar");

let intervalo = 100

Boton.addEventListener('click', function() {
      const cantidadCiclos = document.getElementById("ciclo").value;
      let ciclosRestantes = cantidadCiclos;
      for (let i = 0; i < cantidadCiclos; i++) {
        
        let tiempoTotal = document.getElementById('tiempoTrabajado').value * 60
        + document.getElementById('tiempoDescanso').value * 60 
        + document.getElementById('descansoLargo').value *60;
        let tiempoRestante = tiempoTotal
        btnPausar.disabled = false
        btnReiniciar.disabled = false
        Boton.disabled = true
        
  
        // Cambio de texto
        SeleccionTexto.innerText = "Tiempo de trabajo iniciado"
        // Cambio de Color de Carta
        colorCard.style.backgroundColor = "green";
        // Cambio de color de input y boton
        colorDentro.forEach(elemento => {
          elemento.style.backgroundColor = "blue"
        });
  
          let contador;
          function iniciarTemporizador() {
            contador = setInterval(function() {
              // Temporizador
              const minutos = Math.floor(tiempoRestante/60)
              const segundos = tiempoRestante % 60
              Temporizador.innerText=`${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
              tiempoRestante--;
              if (tiempoRestante<0)
                {
                  clearInterval(contador)
                  tiempoRestante = 0;
                  SeleccionTexto.innerText = "Tiempo Terminado! A descansar"
                }

              
            },
            intervalo)
          }
    
          iniciarTemporizador(); 
    
          let count = 0;
          btnPausar.addEventListener("click", () => {
            if(count == 0) {
              count = 1;
              clearInterval(contador);
              btnPausar.innerHTML = '<i class="bi bi-skip-start-circle"></i>';
            } else {
              count = 0;
              iniciarTemporizador();
              btnPausar.innerHTML = '<i class="bi bi-pause-circle-fill"> </i>';
            }
          })
  
  
          btnReiniciar.addEventListener("click", () => {
            clearInterval(contador);
            tiempoRestante = tiempoTotal;
            iniciarTemporizador();
            SeleccionTexto.innerText = "Tiempo de trabajo iniciado"
          })
          ciclosRestantes --;
      }
      Boton.disabled = false;
  }) 
  