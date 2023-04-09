
const changeCatCard2 = () => {
  return`  <div class="viewCatCard">
  <button class="closeFormBtn">X</button>
  <form class="formChange" action="">
    <h2>Изменить кота</h2>
    <input type="number" name="age"  placeholder="Возраст" min="0" />
    <input type="number" name="rate"  placeholder="Рейтинг (0-10)" min="0" max="10" />
    <input type="text" name="image" placeholder="Ссылка на фото" />
    <textarea name="description" placeholder="Описание котика"></textarea>
    <button type="submit" class="submitBtn">Изменить котика</button>
  </form>
</div>`
}