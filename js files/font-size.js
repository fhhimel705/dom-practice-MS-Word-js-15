document.getElementById("font-size").addEventListener("input", function () {
  const fontSize = document.getElementById("font-size");
  const textArea = document.getElementById("text-area");
  const fontSizeValue = fontSize.value;
  if(fontSizeValue < 16){
    return;
  }

  textArea.style.fontSize = fontSizeValue + "px";
});
