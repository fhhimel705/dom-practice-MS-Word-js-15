const fontBold = document.getElementById("font-bold");

fontBold.addEventListener("click", function () {
  fontBold.style.backgroundColor = "gray";
  fontBold.style.padding = "5px";

  const textArea = document.getElementById("text-area");
  // console.log(typeof(textArea));

  textArea.style.fontWeight = "bold";
});

const fontItalic = document.getElementById("font-italic");

fontItalic.addEventListener("click", function () {
  fontItalic.style.backgroundColor = "gray";
  fontItalic.style.padding = "5px";

  const textArea = document.getElementById("text-area");
  // console.log(typeof(textArea));

  textArea.style.fontStyle = "italic";
});

const fontUnderLine = document.getElementById("font-underline");

fontUnderLine.addEventListener("click", function () {
  fontUnderLine.style.backgroundColor = "gray";
  fontUnderLine.style.padding = "5px";

  const textArea = document.getElementById("text-area");
  // console.log(typeof(textArea));
  textArea.style.textDecoration = "underline";
});
