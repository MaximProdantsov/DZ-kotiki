
const changeCatCard2 = (cat) => {
  return `  <div class="viewCatCard">
  <button class="closeFormBtn">X</button>
  <form class="formChange" action="">
    <h2>Изменить кота</h2>
    <label><input type="number" name="age" value="${cat.age}" min="0" />Возраст</label>
    <label><input type="number" name="rate"  value="${cat.rate}" min="0" max="10" />Рейтинг от 0 до 10</label>
    <label><input type="text" name="image" value="${cat.image}" />Ссылка на картинку</label>
    <label><textarea name="description">${cat.description}</textarea>Описание</label>
    <button type="submit" class="submitBtn">Изменить котика</button>
  </form>
</div>`
}