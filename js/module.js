const buttomImport = document.getElementById("importante");
const buttomUltimo = document.getElementById("el-ultimo");
const buttomTop = document.getElementById("top");

import { crearCard } from "./card.js";

const BASE_URL = "https://proyectokode-default-rtdb.firebaseio.com/posts";

const getAllPosts = async () => {
  const response = await fetch(`${BASE_URL}/.json`);
  const data = await response.json();
  //mofigicaciones
  const postsArray = Object.values(data);
  const updatedDat = addDateAndImportance(postsArray);
  // console.log(data);
  return updatedDat;
};

function formatDate(date) {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Intl.DateTimeFormat("es-ES", options).format(date);
}

function addDateAndImportance(data) {
  return data.map((item, index) => {
    const baseDate = new Date(2023, 0, 1);
    const date = new Date(baseDate);
    date.setDate(date.getDate() + index);
    const importance = Math.floor(Math.random() * 10) + 1;
    return {
      ...item,
      date: formatDate(date),
      importance: importance,
    };
  });
}

// crear funcion para ordenar datos por importancia y por fecha y pot top

function sortByImportance(data) {
  return data.sort((a, b) => b.importance - a.importance);
}

function sortByDate(data) {
  return data.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function sortByTop(data) {
  return data.sort((a, b) => b.reacciones - a.reacciones);
}

function renderCards(posts) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Limpiar el contenedor antes de renderizar

  posts.forEach((post) => {
    crearCard(post); // Llama a crearCard para cada post
  });
}

// funciones de los botenes Import top y last
// Event listener para el botón de "Importante" o "Pertinente"
buttomImport.addEventListener("click", async () => {
  const posts = await getAllPosts();
  const sortedPosts = sortByImportance([...posts]);
  renderCards(sortedPosts);
  console.log("Post ordenado por importancia:", sortedPosts);
});

// Event listener para el botón de "El último"

buttomUltimo.addEventListener("click", async () => {
  const posts = await getAllPosts();
  const sortedPosts = sortByDate([...posts]);
  renderCards(sortedPosts);
  console.log("ordenado por el mas ultimo", sortedPosts);
});

// Event listener para el botón de "Top"

buttomTop.addEventListener("click", async () => {
  const posts = await getAllPosts();
  const sortedPosts = sortByTop([...posts]);
  renderCards(sortedPosts);
  console.log("ordenado por el mas top", sortedPosts);
});

// exporta funciones
export { getAllPosts, buttomImport, buttomUltimo, buttomTop, renderCards };
