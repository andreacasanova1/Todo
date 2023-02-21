const listaDeTodos = [];

function addTodo() {
  // Seleccionamos el elemnto con la clase que quiero encontrar (el input);
  const referenciaAlInput = document.querySelector('.todo-input')
  // Accedemos a la propiedad .value (valor) del input, y la añadimos a la lista
  listaDeTodos.push(referenciaAlInput.value);

  // Sacamos esta linea del bucle y la ponemos aqui para no limpiar en cada iteración
  const elementoContenedor = document.querySelector('.todo-list');
  // Le decimos al contenedor, que su html es = a '', es decir, a nada
  elementoContenedor.innerHTML = '';

  listaDeTodos.forEach(function(elemento) {
    elementoContenedor.innerHTML = elementoContenedor.innerHTML + `<div class="todo">
      <input type="checkbox">
      <label>${elemento}</label>
    </div>`
  });
}
  
  //el nombre la la funcion debe coicidir con el del evento//
