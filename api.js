const baseUrl = 'https://cats.petiteweb.dev/api/single/MaximProdantsov/'

getAllCat = () => {
  return fetch(`${baseUrl}show/`)
    .then((res) => {
      return res.ok ? res.json() : console.error('коты не получены');
    })
}

getIdCat = (IdCat) => {
  return fetch(`${baseUrl}show/${IdCat}`)
    .then((res) => {
      return res.ok ? res.json() : console.error('id кота не получен');
    })
}

getIdsOfCat = () => {
  return fetch(`${baseUrl}ids`)
  .then((res) => {
    return res.ok ? res.json() : console.error('id котов не получен');
  });
};

addCat = (cat) => {
  return fetch(`${baseUrl}add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cat),
  }).then((res) => {
    return res.ok ? res.json() : console.error('кот не добален');
  });
};

updateCat = (newCat) => {
  return fetch(`${baseUrl}update/${newCat.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCat),
  }).then((res) => {
    return res.ok ? res.json() :  console.error('кот не обновлен');
  });
};

deleteCat = (id) => {
  return fetch(`${baseUrl}delete/${id}`, {
    method: 'DELETE',
  }).then((res) => {
    return res.ok ? res.json() : console.error('кот не удален');
  });
};



// console.log(getAllCat());
