

gsap.from(".caja1", {
    duration: 20,
    x: 200,
    repeat: -1,
    yoyo: true,
    ease: "none",
});
gsap.from(".caja2", {
    duration: 10,
    y: 100,
    repeat: -1,
    yoyo: true,
    ease: "none",
});
gsap.from(".caja3", {
    duration: 10,
    y: -150,
    repeat: -1,
    yoyo: true,
    ease: "none",
});
gsap.from(".caja4", {
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: "none",
    rotate: 300,
});
gsap.from(".caja5", {
    duration: 10,
    repeat: -1,
    y: 500,
    yoyo: true,
    ease: "none",
});
let tyc = document.querySelector(".tyc");
let formLogin = document.querySelector(".form-login");
let formRegistro = document.querySelector(".form-registro");
let iniciarSesion = document.getElementById("iniciarSesion");
let Registro = document.getElementById("Registro");
let btnIniciarSesion = document.getElementById("btnIniciarSesion");
let btnCrearCuenta = document.getElementById("btnCrearCuenta");
btnCrearCuenta.addEventListener("click",cambiarRegistro);
btnIniciarSesion.addEventListener("click",cambiarSesion);
// Registro.addEventListener("click",mostrarAlert);
iniciarSesion.addEventListener("click",mostrarAlert2);
tyc.addEventListener("click",tycMensaje);

function cambiarRegistro(){
    formLogin.classList.add("activador-login");
    formRegistro.classList.add("activador-registro");
    document.getElementById("titulo").innerHTML = "Sigin up";
    document.querySelector(".form-login").style.transform = "translate(-300%)";
    document.querySelector(".form-registro").style.transform = "translate(0%)";
}
function cambiarSesion(){
    formLogin.classList.remove("activador-login");
    formRegistro.classList.remove("activador-registro");
    document.getElementById("titulo").innerHTML = "login";
    document.querySelector(".form-login").style.transform = "translate(0%)";
    document.querySelector(".form-registro").style.transform = "translate(300%)";
}

function mostrarAlert2(){
    swal('!GRACIAS POR INICIAR SESION!',"","success")
}
function tycMensaje(){
    swal({
        title: 'TERMINOS Y CONDICIONES:',
        text:  'Nos robaremos todos tus datos personales xD',
        icon: 'error',
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
            swal("Te has vuelto loco esponja!?", {
                icon: "error",
                buttons:{
                    cancel: "Me arrepieto",
                    confirm: "Me da igual"
                },
                dangerMode: true,
          });
        } else {
          swal("Te has salvado por poco, Buena decision!", {
            icon: "success",
            
          });
        }
      });
}

function overfloxV (){
    document.querySelector(".contenedor").style.overflowY = "visible"; 
    // document.querySelector(".contenedor").style.overflowX = "hidden"; 
}
function overfloxH (){
    document.querySelector(".contenedor").style.overflowX = "hidden"; 
    document.querySelector(".contenedor").style.overflowY = "hidden"; 
}
if(screen.width < 692){
    btnIniciarSesion.addEventListener("click",overfloxH);
    btnCrearCuenta.addEventListener("click",overfloxV);
};
