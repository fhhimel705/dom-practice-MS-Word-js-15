const textleft = document.getElementById("text-left");
textleft.addEventListener("click", function () {
  resetButtonStyles(); // Reset styles of all buttons
  textleft.style.backgroundColor = "purple";
  textleft.style.padding = "5px";

  document.getElementById("text-area").style.textAlign = "left";
});

const textcenter = document.getElementById("text-center");
textcenter.addEventListener("click", function () {
  resetButtonStyles(); // Reset styles of all buttons
  textcenter.style.backgroundColor = "purple";
  textcenter.style.padding = "5px";

  document.getElementById("text-area").style.textAlign = "center";
});

const textRight = document.getElementById("text-right");
textRight.addEventListener("click", function () {
  resetButtonStyles(); // Reset styles of all buttons
  textRight.style.backgroundColor = "purple";
  textRight.style.padding = "5px";

  document.getElementById("text-area").style.textAlign = "right";
});

const textJustify = document.getElementById("text-justify");
textJustify.addEventListener("click", function () {
  resetButtonStyles(); // Reset styles of all buttons
  textJustify.style.backgroundColor = "purple";
  textJustify.style.padding = "5px";

  document.getElementById("text-area").style.textAlign = "justify";
});

// Function to reset styles of all buttons
function resetButtonStyles() {
  const buttons = document.querySelectorAll(".alignment-button");
  buttons.forEach((button) => {
    button.style.backgroundColor = ""; // Reset background color
    button.style.padding = ""; // Reset padding
  });
}
