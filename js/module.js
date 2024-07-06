const buttomImport = document.getElementById("importante");
const buttomUltimo = document.getElementById("el-ultimo");
const buttomTop = document.getElementById("top");

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

function addDateAndImportance(data) {
  return data.map((item, index) => {
    const baseDate = new Date(2023, 0, 1);
    const date = new Date(baseDate);
    date.setDate(date.getDate() + index);
    const importance = Math.floor(Math.random() * 10) + 1;
    return {
      ...item,
      date: date.toISOString(),
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
  return data.sort(() => Math.random() - 0.5);
}

// funciones de los botenes Import top y last
// Event listener para el botón de "Importante" o "Pertinente"
buttomImport.addEventListener("click", async () => {
  const posts = await getAllPosts();
  const sortedPosts = sortByImportance([...posts]);
  console.log("Post ordenado por importancia:", sortedPosts);
});

// Event listener para el botón de "El último"

buttomUltimo.addEventListener("click", async () => {
  const posts = await getAllPosts();
  const sortedPosts = sortByDate([...posts]);
  console.log("ordenado por el mas ultimo", sortedPosts);
});

// Event listener para el botón de "Top"

buttomTop.addEventListener("click", async () => {
  const posts = await getAllPosts();
  const sortedPosts = sortByTop([...posts]);
  console.log("ordenado por el mas top", sortedPosts);
});
