<<<<<<< HEAD
// Obtener datos de Firebase
=======
import { getAllPosts , createPost } from "./module.js"


const printAllPosts = async ()=>{
  let posts = await getAllPosts();

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      
    `;
    document.body.appendChild(postElement);
  });
};

printAllPosts();


const posts = [
  { id: 1, text: "Post CCS 1", hashtags: ["#css"] },
  { id: 2, text: "Post CCS 2", hashtags: ["#css"] },
  { id: 3, text: "Post CCS 3", hashtags: ["#css"] },
  { id: 4, text: "Post CCS 4", hashtags: ["#css"] },
  { id: 5, text: "Post CCS 5", hashtags: ["#css"] },
  { id: 6, text: "Post Javascript 1", hashtags: ["#javascript"] },
  { id: 7, text: "Post Javascript 2", hashtags: ["#javascript"] },
  { id: 8, text: "Post Javascript 3", hashtags: ["#javascript"] },
  { id: 9, text: "Post Javascript 4", hashtags: ["#javascript"] },
  { id: 10, text: "Post Javascript 5", hashtags: ["#javascript"] },
  { id: 11, text: "Post React 1", hashtags: ["#react"] },
  { id: 12, text: "Post React 2", hashtags: ["#react"] },
  { id: 13, text: "Post React 3", hashtags: ["#react"] },
  { id: 14, text: "Post React 4", hashtags: ["#react"] },
  { id: 15, text: "Post React 5", hashtags: ["#react"] },
  { id: 16, text: "Post React 5", hashtags: ["#react"] },
  { id: 17, text: "Post React 5", hashtags: ["#react"] },
  { id: 18, text: "Post React 5", hashtags: ["#react"] },
  { id: 19, text: "Post React 5", hashtags: ["#react"] },
  { id: 20, text: "Post React 5", hashtags: ["#react"] },
];
>>>>>>> origin

import { getAllPosts } from "./module.js";
getAllPosts();

// Mostrar datos

const printAllPosts = async () => {
  let posts = await getAllPosts();
  console.log(posts);

  // Objeto para almacenar las listas de posts por hashtag
  const postsByHashtag = {
    "#css": [],
    "#javascript": [],
    "#react": [],
  };

  // Filtrar y agrupar los posts por hashtag
  posts.forEach((post) => {
    console.log(post);
    if (post.tags.includes("css")) {
      postsByHashtag["#css"].push(post);
    }
    if (post.tags.includes("javascript")) {
      postsByHashtag["#javascript"].push(post);
    }
    if (post.tags.includes("react")) {
      postsByHashtag["#react"].push(post);
    }
  });

  // Llamar a la función para renderizar los posts después de obtener los datos
  renderPosts(postsByHashtag);
};

// Función para crear elementos DOM y agregarlos a las listas correspondientes
const renderPosts = (postsByHashtag) => {
  // Elementos donde se agregarán las listas de posts
  const ccsList = document.getElementById("ccsList");
  const javascriptList = document.getElementById("javascriptList");
  const reactList = document.getElementById("reactList");

  // Renderizar posts de #css
  postsByHashtag["#css"].forEach((post) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    const a = document.createElement("a");
    a.href = "#"; // URL para el post
    a.textContent = post.abstract;
    const p = document.createElement("p");
    p.id = "commentsList";
    p.textContent = `${post.reacciones} comentarios`;
    li.appendChild(a);
    li.appendChild(p);
    ccsList.appendChild(li);
  });

  // Renderizar posts de #javascript
  postsByHashtag["#javascript"].forEach((post) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    const a = document.createElement("a");
    a.href = "#"; // URL para el post
    a.textContent = post.abstract;
    const p = document.createElement("p");
    p.id = "commentsList";
    p.textContent = `${post.reacciones} comentarios`; //
    li.appendChild(a);
    li.appendChild(p);
    javascriptList.appendChild(li);
  });

  // Renderizar posts de #react
  postsByHashtag["#react"].forEach((post) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    const a = document.createElement("a");
    a.href = "#"; // URL para el post
    a.textContent = post.abstract;
    const p = document.createElement("p");
    p.id = "commentsList";
    p.textContent = `${post.reacciones} comentarios`;
    li.appendChild(a);
    li.appendChild(p);
    reactList.appendChild(li);
  });
};

<<<<<<< HEAD
// Llamar a la función principal que inicia todo
printAllPosts();
=======
// Llamar a la función para renderizar los posts
renderPosts();







>>>>>>> origin
