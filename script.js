fetch('menu.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar el JSON');
    }
    return response.json();
  })
  .then(data => {
    const menu = document.getElementById('menu');
    const ul = document.createElement('ul');
    data.forEach(item => ul.appendChild(crearItem(item)));
    menu.appendChild(ul);
  })
  .catch(error => {
    console.error(error);
    document.body.innerHTML = '<h3>Error cargando el menú</h3>';
  });

function crearItem(item) {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.textContent = item.titulo;
  a.href = item.url;
  li.appendChild(a);

  if (item.submenus) {
    const subUl = document.createElement('ul');
    item.submenus.forEach(sub => {
      subUl.appendChild(crearItem(sub));
    });
    li.appendChild(subUl);
  }

  return li;
}
