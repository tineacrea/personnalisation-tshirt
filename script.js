const textInput = document.getElementById("text-input");
const colorInput = document.getElementById("color-input");
const sizeInput = document.getElementById("size-input");
const fontSelect = document.getElementById("font-select");
const previewText = document.getElementById("preview-text");
const downloadBtn = document.getElementById("download-btn");

// Mappage simple des polices Hatch vers des polices web proches
const fontMap = {
  "Block": "Impact",
  "Roman": "Times New Roman",
  "Serif Block": "Georgia",
  "Script": "Brush Script MT",
  "Times": "Times New Roman",
  "Bauhaus": "Bauhaus 93",
  "Brush Script": "Brush Script MT",
  "Upright Script": "Segoe Script",
  "Arial Rounded": "Arial Rounded MT Bold",
  "Gotham": "Arial",
  "Helvetica": "Helvetica",
  "Century Gothic": "Century Gothic",
  "Swiss Block": "Arial Black",
  "Univers": "Verdana",
  "Balloon": "Comic Sans MS",
  "Curlz": "Curlz MT",
  "Kids": "Comic Sans MS",
  "Comic": "Comic Sans MS",
  "Fun": "Comic Sans MS",
  "Graffiti": "Arial Black",
  "Handwriting": "Lucida Handwriting",
  "Cursive": "Cursive",
  "Calligraphy": "Lucida Calligraphy",
  "Brush": "Brush Script MT",
  "Scribe": "Segoe Script",
  "Courier": "Courier New",
  "Typewriter": "Courier New",
  "Engineering": "Consolas",
  "Digital": "Orbitron"
};

textInput.addEventListener("input", () => {
  previewText.textContent = textInput.value;
});

colorInput.addEventListener("input", () => {
  previewText.style.color = colorInput.value;
});

sizeInput.addEventListener("input", () => {
  previewText.style.fontSize = sizeInput.value + "px";
});

fontSelect.addEventListener("change", () => {
  const selected = fontSelect.value;
  previewText.style.fontFamily = fontMap[selected] || "Arial";
});

downloadBtn.addEventListener("click", () => {
  html2canvas(document.querySelector(".mockup")).then(canvas => {
    const link = document.createElement("a");
    link.download = "apercu-tshirt.png";
    link.href = canvas.toDataURL();
    link.click();
  });
});
