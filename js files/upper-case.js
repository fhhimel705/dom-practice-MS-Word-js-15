document.getElementById("upper-case").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  const currentText = textArea.value;
  const newText = currentText === currentText.toUpperCase()? currentText.toLowerCase(): currentText.toUpperCase();
  
  textArea.value = newText;


    


  //   textArea.style.textTransform = "upperCase";
});
