<<<<<<< HEAD
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

// Objeto para almacenar las listas de posts por hashtag
const postsByHashtag = {
  "#css": [],
  "#javascript": [],
  "#react": [],
};

// Filtrar y agrupar los posts por hashtag
posts.forEach((post) => {
  if (post.hashtags.includes("#css")) {
    postsByHashtag["#css"].push(post);
  }
  if (post.hashtags.includes("#javascript")) {
    postsByHashtag["#javascript"].push(post);
  }
  if (post.hashtags.includes("#react")) {
    postsByHashtag["#react"].push(post);
  }
});

// Función para crear elementos DOM y agregarlos a las listas correspondientes
let renderPosts = () => {
  // Elementos donde se agregarán las listas de posts
  let ccsList = document.getElementById("ccsList");
  let javascriptList = document.getElementById("javascriptList");
  let reactList = document.getElementById("reactList");

  // Renderizar posts de #css
  postsByHashtag["#css"].forEach((post) => {
    let li = document.createElement("li");
    li.className = "list-group-item";
    let a = document.createElement("a");
    a.href = "#"; // URL del post
    a.textContent = post.text;
    let p = document.createElement("p");
    p.id = "commentsList";
    p.textContent = "2 comentarios"; // Esto es estático o debe ser aleatorio?
    li.appendChild(a); //   Se inserta a a la lista.
    li.appendChild(p); //   Se inserta p a la lista.
    ccsList.appendChild(li);
  });

  // Renderizar posts de #javascript
  postsByHashtag["#javascript"].forEach((post) => {
    let li = document.createElement("li"); //Se crea el elemento de HTML
    li.className = "list-group-item"; //Se asigna la clase al elemento.
    let a = document.createElement("a");
    a.href = "#"; // URL del post
    a.textContent = post.text; //Se asigna el contenido del texto al enlace a.
    let p = document.createElement("p");
    p.id = "commentsList";
    p.textContent = "2 comentarios"; // Esto es estático o debe ser aleatorio?
    li.appendChild(a); //   Se inserta a a la lista.
    li.appendChild(p); //   Se inserta p a la lista.
    javascriptList.appendChild(li); // Se inserta li a la ul javascriptList.
  });

  // Renderizar posts de #react
  postsByHashtag["#react"].forEach((post) => {
    let li = document.createElement("li");
    li.className = "list-group-item";
    let a = document.createElement("a");
    a.href = "#"; // URL del post
    a.textContent = post.text;
    let p = document.createElement("p");
    p.id = "commentsList";
    p.textContent = "2 comentarios"; // Esto es estático o debe ser aleatorio?
    li.appendChild(a);
    li.appendChild(p);
    reactList.appendChild(li);
  });
};

// Llamar a la función para renderizar los posts
renderPosts();





