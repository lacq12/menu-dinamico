fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    const menu = document.getElementById('menu');
    const ul = document.createElement('ul');

    data.forEach(item => {
      ul.appendChild(crearItem(item));
    });

    menu.appendChild(ul);
  })
  .catch(error => console.error('Error cargando el menú:', error));

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