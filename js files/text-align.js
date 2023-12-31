const textleft = document.getElementById("text-left");
textleft.addEventListener("click", function () {

  textleft.style.backgroundColor = "purple";
  textleft.style.padding = "5px";

  document.getElementById("text-area").style.textAlign = "left";

  
});
const textcenter = document.getElementById("text-center");
textcenter.addEventListener("click", function () {
  textcenter.style.backgroundColor = "purple";
  textcenter.style.padding = "5px";

  document.getElementById("text-area").style.textAlign = "center";
});
const textRight = document.getElementById("text-right");
textRight.addEventListener("click", function () {
  textRight.style.backgroundColor = "purple";
  textRight.style.padding = "5px";

  document.getElementById("text-area").style.textAlign = "right";
});
const textJustify = document.getElementById("text-justify");
textJustify.addEventListener("click", function () {
  textJustify.style.backgroundColor = "purple";
  textJustify.style.padding = "5px";

  document.getElementById("text-area").style.textAlign = "justify";
});
