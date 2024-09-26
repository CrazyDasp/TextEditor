const editor = document.getElementById('editor');

window.addEventListener('load', () => {
    const savedText = localStorage.getItem('editorText');
    if (savedText) {
        editor.value = savedText;
    }
});

editor.addEventListener('input', () => {
    localStorage.setItem('editorText', editor.value);
});

const clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", () => {
  editor.value = "";
  localStorage.clear();
})