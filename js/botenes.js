const importBtn = document.getElementById("importante");
const lastestBtn = document.getElementById("el-ultimo");
const topBtn = document.getElementById("top");

const handleClick = (event) => {
  importBtn.classList.remove("hover-palabra-active");
  lastestBtn.classList.remove("hover-palabra-active");
  topBtn.classList.remove("hover-palabra-active");

  event.target.classList.add("hover-palabra-active");
};

importBtn.addEventListener("click", handleClick);
lastestBtn.addEventListener("click", handleClick);
topBtn.addEventListener("click", handleClick);
