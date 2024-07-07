/* dont' touch   */
const BASE_URL = "https://proyectokode-default-rtdb.firebaseio.com/posts";

// Obtener datos de firebase
const getAllPosts = async () => {
  let response = await fetch(`${BASE_URL}/.json`);
  let data = await response.json();
  let dataKeys = Object.keys(data);
  let postsArray = dataKeys.map((key) => ({ ...data[key], key }));
  return postsArray;
};

/*create*/
const createPost = async (postObject) => {
  let response = await fetch(`${BASE_URL}/.json`, {
    method: "POST",
    body: JSON.stringify(postObject),
  });
  let data = await response.json();
  console.log(data);
  return data;
};

/* dont' touch */

export { getAllPosts, createPost };
