const generateViewCatCard = (cat) =>{
return `<div class="viewCatCard">
<button class="closeFormBtn">X</button>
<div class="cat-text">
<h2>Данные о котике</h2>
<h2>Имя котика: ${cat.name}</h2>
  <img src=${cat.image} alt="Ссылка на изображение">
  <div>Рейтинг: ${cat.rage || "Рейтинга у котика нет..."}</div>
  <div>Возраст: ${typeof cat.age === "number" ? cat.age : "Возраст не указан"}</div>
  <div>Информация: ${cat.description || "Информации о котике пока нет..."}</div>
</div>
</div>`
} 


