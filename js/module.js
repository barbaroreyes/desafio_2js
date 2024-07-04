 /* dont' touch   */
 const BASE_URL = "https://proyectokode-default-rtdb.firebaseio.com/posts";

const  getAllPosts = async()=>{
    const response = await fetch(`${BASE_URL}/.json`);
    const data = await response.json();
    console.log(data);
    return data;
  }

   /*create*/
const  createPost = async (postObject)=>{
    let response = await fetch(`${BASE_URL}/.json`,{
        method : 'POST',
        body: JSON.stringify(postObject)
    });
    let data = await response.json();
    console.log(data);
    return data;
};

  /* dont' touch */



  export{getAllPosts ,createPost};


 