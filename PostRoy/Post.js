// JavaScript para manejo de etiquetas
const tagInput = document.getElementById('tagInput');
const tagContainer = document.querySelector('.tag-input');
let tags = [];

tagInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && tagInput.value) {
    e.preventDefault();
    addTag(tagInput.value);
    tagInput.value = '';
  }
});

function addTag(tag) {
  if (tags.length < 4 && !tags.includes(tag)) {
    tags.push(tag);
    const tagElement = document.createElement('span');
    tagElement.className = 'tag';
    tagElement.textContent = tag;
    const removeIcon = document.createElement('span');
    removeIcon.textContent = 'x';
    removeIcon.className = 'remove-tag';
    removeIcon.onclick = () => removeTag(tag);
    tagElement.appendChild(removeIcon);
    tagContainer.insertBefore(tagElement, tagInput);
  }
}

function removeTag(tag) {
  tags = tags.filter(t => t !== tag);
  renderTags();
}

function renderTags() {
  const existingTags = document.querySelectorAll('.tag');
  existingTags.forEach(tag => tag.remove());
  tags.forEach(tag => addTag(tag));
}

// JavaScript para validación y redirección
document.getElementById('createPostForm').addEventListener('submit', function(e) {
  e.preventDefault();
  if (this.checkValidity() && tags.length > 0) {
    alert('Post creado exitosamente');
    window.location.href = 'vista_principal.html';
  } else {
    alert('Por favor, completa todos los campos y añade al menos una etiqueta.');
  }
});

// JavaScript para barra de herramientas de formato
document.querySelectorAll('.toolbar-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const action = this.getAttribute('aria-label').toLowerCase();
    formatText(action);
  });
});

function formatText(action) {
  const content = document.getElementById('content');
  const start = content.selectionStart;
  const end = content.selectionEnd;
  const selectedText = content.value.substring(start, end);

  let formattedText;
  switch (action) {
    case 'negrita':
      formattedText = `**${selectedText}**`;
      break;
    case 'itálico':
      formattedText = `*${selectedText}*`;
      break;
    // Agregar casos para otros formatos aquí...
  }

  content.setRangeText(formattedText, start, end, 'end');
}
