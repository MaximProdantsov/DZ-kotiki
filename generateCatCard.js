const generateCatCard = (cat) => {
  return `<div class="containerCat">
  <img class="CatImg" src=${cat.image} alt="Картинка котика" >
  <div>${cat.name}</div>
  <button id="btnView" value=${cat.id}>Посмотреть</button>
  <button id="btnChange" value=${cat.id}>Изменить</button>
  <button id="btnDelete" value=${cat.id}>Удалить</button>
</div>`
}