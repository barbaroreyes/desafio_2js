// Obtener datos de Firebase

const BASE_URL = "https://proyectokode-default-rtdb.firebaseio.com/posts";

const getAllPosts = async () => {
  let response = await fetch(`${BASE_URL}/.json`);
  let data = await response.json();
  let dataKeys = Object.keys(data);
  let postsArray = dataKeys.map((key) => ({ ...data[key], key }));
  return postsArray;
};

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

    // Agregar evento de clic para redirigir al post completo
    li.addEventListener("click", () => {
      window.location.href = a.href;
    });
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

    // Agregar evento de clic para redirigir al post completo
    li.addEventListener("click", () => {
      window.location.href = a.href;
    });
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
  // Agregar evento de clic para redirigir al post completo
  li.addEventListener("click", () => {
    window.location.href = a.href;
  });
};

// Llamar a la función principal que inicia todo
printAllPosts();
