document.addEventListener("DOMContentLoaded", () => {
  const newFormItem = document.querySelector('#new-item-form');
  newFormItem.addEventListener('submit', handleNewFormItemSubmit);
});

const handleNewFormItemSubmit = function (event) {
  const 
}


const createFormItem = function (form) {

  const item = document.createElement('li');
  item.classList.add('munro-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  item.appendChild(name);

  const height = document.createElement('p');
  height.textContent = form.height.value;
  item.appendChild(height);

  const rank = document.createElement('p');
  rank.textContent = form.rank.value;
  item.appendChild(rank);

  const county = document.createElement('p');
  county.textContent = form.rank.value;
  item.appendChild(county);

  return item;
}


// const handleNewFormItemSubmit = function (event) {
//   const
// }
