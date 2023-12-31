document.getElementById("text-color").addEventListener("input", function () {
  const textColor = getValueById("text-color");
  const textArea = document.getElementById("text-area");
  textArea.style.color = textColor;
});
