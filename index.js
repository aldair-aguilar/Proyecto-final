$(document).ready(function () {
   // Función para verificar si un elemento es visible en la pantalla
   function isElementInViewport(el) {
      var rect = el[0].getBoundingClientRect();
      return (
         rect.top >= 0 &&
         rect.bottom <= $(window).height()
      );
   }

   // Variable para controlar si la animación ya ha ocurrido
   var animationOccurredHome = false;

   $(window).scroll(function () {
      // Verifica si la sección con id "home" es visible
      if (isElementInViewport($("#home"))) {
         // Establece la animación de entrada con un retraso de 200 ms
         if (!animationOccurredHome) {
            setTimeout(function () {
               $("#home").addClass("animate__rotateInUpLeft");
            }, 1);
            animationOccurredHome = true; // Marca que la animación ha ocurrido
         }
      } else {
         // Reinicia la animación si el elemento no es visible
         $("#home").removeClass("animate__rotateInUpLeft");
         animationOccurredHome = false; // Reinicia la marca de animación
      }
   });
});

// Trajetas animacion

$(document).ready(function () {
   $(window).scroll(function () {
     // Obtén la posición del contenedor de las tarjetas
     var position = $("#cards").offset().top;
 
     // Obtén la posición actual del scroll
     var scroll = $(window).scrollTop();
 
     // Establece la animación de entrada cuando se llega a la sección de las tarjetas
     if (scroll > position - $(window).height()) {
       $(".card").each(function (index) {
         var delay = index * 200; // Ajusta el retraso según tus preferencias
         $(this).css("animation-delay", delay + "ms");
         $(this).addClass("animate__fadeIn").removeClass("animate__fadeOut");
       });
     } else {
       // Reinicia las animaciones si no se ha llegado a la sección de las tarjetas
       $(".card").each(function (index) {
         $(this).removeClass("animate__fadeIn animate__fadeOut");
       });
     }
 
     // Establece la animación de salida cuando el elemento está fuera de la vista
     if (scroll > position + $("#cards").height()) {
       $(".card").each(function (index) {
         var delay = index * 200; // Ajusta el retraso según tus preferencias
         $(this).css("animation-delay", delay + "ms");
         $(this).removeClass("animate__fadeIn").addClass("animate__fadeOut");
       });
     }
   });
 });
 
 //Acordeon
 
 document.addEventListener("DOMContentLoaded", function () {
   // Función para manejar la animación al hacer scroll y al abrir el acordeón
   function handleAnimation(entries, observer) {
       entries.forEach((entry) => {
           if (entry.isIntersecting) {
               entry.target.classList.add("animate__animated", "animate__fadeInUp");
           } else {
               entry.target.classList.remove("animate__animated", "animate__fadeInUp");
           }
       });
   }

   // Configuración del Intersection Observer para la animación al hacer scroll
   const scrollObserver = new IntersectionObserver(handleAnimation, { threshold: 0.5 });

   // Selecciona todos los elementos con la clase "accordion-item" y agrega el observer
   const accordionItems = document.querySelectorAll(".accordion-item");
   accordionItems.forEach((item) => {
       scrollObserver.observe(item);

       // Agrega el evento "shown.bs.collapse" para la animación al abrir el acordeón
       item.addEventListener("shown.bs.collapse", function () {
           const accordionBody = this.querySelector('.accordion-body');
           accordionBody.classList.add('animate__animated', 'animate__fadeInDown');
       });
   });

   // Inicializa AOS
   AOS.init();
});


document.addEventListener("DOMContentLoaded", function () {
   AOS.init();
});

// Formulario
function registrar() {
   // Obtener los valores del formulario
   var nombre = document.getElementById('nombre').value;
   var email = document.getElementById('email').value;
   var plataforma = document.getElementById('plataforma').value;
   var gamertag = document.getElementById('gamertag').value;

   // Verificar si todos los campos están llenos
   if (nombre && email && plataforma && gamertag) {
       // Mostrar alerta animada con mensaje de registro
       showAlert('¡Registro exitoso para la beta!', 'success');
   } else {
       // Mostrar alerta animada con mensaje de error
       showAlert('Por favor, completa todos los campos.', 'danger');
   }
}

function showAlert(message, type) {
   // Crear elemento de alerta
   var alertDiv = document.createElement('div');
   alertDiv.className = 'alert alert-' + type + ' alert-dismissible fade show';
   alertDiv.role = 'alert';
   alertDiv.innerHTML = message +
       '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
       '<span aria-hidden="true">&times;</span></button>';

   // Agregar el alert al contenedor de alertas
   document.getElementById('alertContainer').appendChild(alertDiv);

   // Desaparecer después de 3 segundos (3000 milisegundos)
   setTimeout(function () {
       alertDiv.classList.add('fade');
       alertDiv.classList.remove('show');
       setTimeout(function () {
           alertDiv.remove();
       }, 1000);
   }, 3000);
}