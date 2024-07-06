/*
<div id="card-container">
          <div class="card mb-3" id="car-principal">
            <div class="p-4 pb-0 d-flex justify-content-start align-items-center her-3-foto-name-date"
              id="card-infor-perfil">
              <img src="./img/perfil/pexels-jeferson-santos-4.jpg"
                class="hero-3-imagen-perfil card-img-top rounded-circle m-2" alt="chica posandojunto a una piedra"
                id="card-img">
              <div class="hero-3-info-hover d-flex flex-column gap-0" id="div-name-date">
                <h6 class="hero-3-title-perfil" id="card-name">Pradumma Saraf</h6>
                <p class="hero-3-date-perfil" id="date">28 de mayo</p>
              </div>
            </div>
            <div class="card-body her-3-foto-name-date" id="card-opinion-reaccion">
              <p class="card-text" id="card-title">Como utilizar indicadores de funciones para implementaciones
                por etapas
              </p>
                //=======================================
              <div class="hero-hastah" id="card-hastag">
                <button type="button" class="btn btn-custom boton1"><span class="azul span1">#</span>fuente
                  abierta</button>
                <button type="button" class="btn btn-custom boton2"><span class="verde span2">#</span>
                  devops</button>
                <button type="button" class="btn btn-custom boton3"><span
                    class="rosado span3">#</span>desarrollador</button>
                <button type="button" class="btn btn-custom boton4"><span class="rosado span4">#</span>desarrollo</button>
              </div>
              //====================
              <div class="hero-caras-animaciones d-flex justify-content-center align-items-center"
                id="div-reacciones-comentaior">
                <button type="button" class="btn btn-secondary btn-lg boton-2">
                  <div class="d-flex justify-content-center align-items-center div-emogi">
                    <p class="hero-emogi mb-0">&#129505;</p>15
                    reaccion
                  </div>
                </button>
                <button type="button" class="btn btn-secondary btn-lg d-flex boton-2">
                  <i class="bi bi-chat div-icon"></i>add comentarios</button>
                <div class="hero-minute d-flex justify-content-center ms-auto div-min-icon">

                  <p class="hero-11">4 min read</p>
                  <i class="icon-book bi bi-bookmark"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

*/

const imageURL = "./img/perfil/pexels-jeferson-santos-4.jpg";
const nombreUsuario = "Pradumma Saraf";
const fecha = "28 de mayo";
const tituloPost =
  "Como utilizar indicadores de funciones para implementaciones por etapas";
const hastagAzul = "#fuente abierta";
const hastagVerde = "#devops";
const hastagRosado = "#desarrollador";
const hastagDesarrollo = "#desarrollo";

const crearCard = (post) => {
  const cardContainer = document.getElementById("card-container");

  const cardPrincipal = document.createElement("div");
  cardPrincipal.classList.add("card", "mb-3");
  cardPrincipal.id = "car-principal";

  const cardInfoPerfil = document.createElement("div");
  cardInfoPerfil.classList.add(
    "p-4",
    "pb-0",
    "d-flex",
    "justify-content-start",
    "align-items-center",
    "her-3-foto-name-date"
  );
  cardInfoPerfil.id = "card-infor-perfil";

  const imagenPerfil = document.createElement("img");
  imagenPerfil.classList.add(
    "hero-3-imagen-perfil",
    "card-img-top",
    "rounded-circle",
    "m-2"
  );
  imagenPerfil.src = imageURL;
  imagenPerfil.alt = "chica posando junto a una piedra";
  imagenPerfil.id = "card-img";
  cardInfoPerfil.appendChild(imagenPerfil);

  const divNameDate = document.createElement("div");
  divNameDate.classList.add(
    "hero-3-info-hover",
    "d-flex",
    "flex-column",
    "gap-0"
  );
  divNameDate.id = "div-name-date";

  const nombre = document.createElement("h5");
  nombre.classList.add("hero-3-title-perfil");
  nombre.id = "card-name";
  nombre.textContent = nombreUsuario;
  divNameDate.appendChild(nombre);

  const fechaPublicacion = document.createElement("p");
  fechaPublicacion.classList.add("hero-3-date-perfil");
  fechaPublicacion.id = "date";
  fechaPublicacion.textContent = fecha;
  divNameDate.appendChild(fechaPublicacion);

  cardInfoPerfil.appendChild(divNameDate);
  //===============

  const cardOpinionReaccion = document.createElement("div");
  cardOpinionReaccion.classList.add("card-body", "her-3-foto-name-date");
  cardOpinionReaccion.id = "card-opinion-reaccion";

  const textoPost = document.createElement("p");
  textoPost.classList.add("card-text");
  textoPost.id = "card-title";
  textoPost.textContent = tituloPost;
  cardOpinionReaccion.appendChild(textoPost);

  //===================

  const divHastags = document.createElement("div");
  divHastags.classList.add("hero-hastah");
  divHastags.id = "card-hastag";

  const boton1 = document.createElement("button");
  boton1.type = "button";
  boton1.classList.add("btn", "btn-custom", "boton1");

  const spanAzul = document.createElement("span");
  spanAzul.classList.add("azul");
  spanAzul.textContent = hastagAzul;

  boton1.appendChild(spanAzul);
  divHastags.appendChild(boton1);

  // Para el botón 2
  const boton2 = document.createElement("button");
  boton2.type = "button";
  boton2.classList.add("btn", "btn-custom", "boton2");

  const spanVerde = document.createElement("span");
  spanVerde.classList.add("verde");
  spanVerde.textContent = hastagVerde;

  boton2.appendChild(spanVerde);
  divHastags.appendChild(boton2);

  // Para el botón 3

  const boton3 = document.createElement("button");
  boton3.type = "button";
  boton3.classList.add("btn", "btn-custom", "boton3");

  const spanRosado = document.createElement("span");
  spanRosado.classList.add("rosado");
  spanRosado.textContent = hastagRosado;

  boton3.appendChild(spanRosado);
  divHastags.appendChild(boton3);

  // Para el botón 4
  const boton4 = document.createElement("button");
  boton4.type = "button";
  boton4.classList.add("btn", "btn-custom", "boton4");

  const spanDesarrollo = document.createElement("span");
  spanDesarrollo.classList.add("rosado");
  spanDesarrollo.textContent = hastagDesarrollo;

  boton4.appendChild(spanDesarrollo);
  divHastags.appendChild(boton4);
  cardOpinionReaccion.appendChild(divHastags);

  //=============

  const divReaccionesComentarios = document.createElement("div");
  divReaccionesComentarios.classList.add(
    "hero-caras-animaciones",
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );
  divReaccionesComentarios.id = "div-reacciones-comentaior";

  const botonReacciones = document.createElement("button");
  botonReacciones.type = "button";
  botonReacciones.classList.add("btn", "btn-secondary", "btn-lg", "boton-2");

  const divEmogi = document.createElement("div");
  divEmogi.classList.add(
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "div-emogi"
  );

  const spanEmoji = document.createElement("span");
  spanEmoji.classList.add("hero-emogi", "mb-0");
  spanEmoji.innerHTML = "&#129505;";

  const spanReacciones = document.createElement("span");
  spanReacciones.textContent = "15 reacciones";

  divEmogi.appendChild(spanEmoji);
  divEmogi.appendChild(document.createTextNode(" "));
  divEmogi.appendChild(spanReacciones);

  botonReacciones.appendChild(divEmogi);

  divReaccionesComentarios.appendChild(botonReacciones);

  const botonComentarios = document.createElement("button");
  botonComentarios.type = "button";
  botonComentarios.classList.add(
    "btn",
    "btn-secondary",
    "btn-lg",
    "d-flex",
    "boton-2"
  );

  const iconoChat = document.createElement("i");
  iconoChat.classList.add("bi", "bi-chat", "div-icon");
  botonComentarios.appendChild(iconoChat);
  botonComentarios.textContent = "add comentarios";
  divReaccionesComentarios.appendChild(botonComentarios);

  const divMinutos = document.createElement("div");
  divMinutos.classList.add(
    "hero-minute",
    "d-flex",
    "justify-content-center",
    "ms-auto",
    "div-min-icon"
  );

  const pMinutos = document.createElement("p");
  pMinutos.classList.add("hero-11");
  pMinutos.textContent = "4 min read";
  divMinutos.appendChild(pMinutos);

  divReaccionesComentarios.appendChild(divMinutos);
  cardOpinionReaccion.appendChild(divReaccionesComentarios);

  const iconoBookmark = document.createElement("i");
  iconoBookmark.classList.add("icon-book", "bi", "bi-bookmark");
  divMinutos.appendChild(iconoBookmark);

  cardPrincipal.appendChild(cardInfoPerfil);
  cardPrincipal.appendChild(cardOpinionReaccion);
  cardContainer.appendChild(cardPrincipal);
};

document.addEventListener("DOMContentLoaded", function () {
  crearCard();
});
