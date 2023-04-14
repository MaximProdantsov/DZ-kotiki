let store = window.localStorage;
console.log(store)

const refreshCatsAndContent = () => {
  const content = document.querySelector(".sectionCatCard")
  content.innerHTML = '';
  getAllCat()
    .then((res) => {
      store.clear()
      store.setItem('cats', JSON.stringify(res))
      let sectionCatCard = document.querySelector(".sectionCatCard")
      let cards = res.reduce((akk, el) => {
        return akk += generateCatCard(el)
      }, '')
      sectionCatCard.innerHTML = cards
    })
};

const openCatCardPopup = (cat) => {
  const content = document.querySelector('.sectionCatCard');
  content.innerHTML = generateViewCatCard(cat);

  let catPopup = document.querySelector('.viewCatCard');
  let closeCatPopup = document.querySelector('.closeFormBtn');
  closeCatPopup.addEventListener('click', () => {
    catPopup.remove();
    refreshCatsAndContentSync()
  });
};

const openCatCardChange = (cat) => {
  const content = document.querySelector('.sectionCatCard');
  content.innerHTML = changeCatCard2(cat);

  let catPopup = document.querySelector('.viewCatCard');
  let closeCatPopup = document.querySelector('.closeFormBtn');
  closeCatPopup.addEventListener('click', () => {
    catPopup.remove();
    refreshCatsAndContentSync()
  });
};



const addCatFromForm = () => {
  const applicantForm = document.querySelector('.form')
  applicantForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const body = Object.fromEntries(formData.entries())
    addCat({ ...body, id: getNewIdOfCatSync() })
    .then(() => {
      addCatInLocalStorage({ ...body, id: getNewIdOfCatSync() })
      refreshCatsAndContentSync()
    })
  })
}

const updateCatFromForm = (cat) => {
  const applicantForm = document.querySelector('.formChange')
  applicantForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const body = Object.fromEntries(formData.entries())
    let updateBody = {...body, id: cat.id, name: cat.name}
    updateCat(updateBody)
    .then(() => {
      refreshCatsAndContentSync()
    })
  })
}

refreshCatsAndContent()
addCatFromForm()

document
  .querySelector(".sectionCatCard")
  .addEventListener('click', (event) => {
    switch (event.target.id) {
      case "btnView":
        getIdCat(event.target.value)
          .then((res) => { openCatCardPopup(res) })

        break;
      case 'btnChange':
        getIdCat(event.target.value).then((res)=>{
          openCatCardChange(res)
          updateCatFromForm(res)

        })
        
        break;
      case 'btnDelete':
        deleteCat(event.target.value)
        .then(()=>{
          deleteCatFromLocalStorage(event.target.value)
          refreshCatsAndContentSync()
        })

        break;
    }
  }
  )