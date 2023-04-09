const refreshCatsAndContentSync = () => {
	const content = document.querySelector('.sectionCatCard');
	content.innerHTML = '';

	const cards = JSON.parse(store.getItem('cats')).reduce(
		(acc, el) => (acc += generateCatCard(el)),
		''
	);
	content.innerHTML = cards; 
};

const addCatInLocalStorage = (cat) => {
	store.setItem(
		'cats',
		JSON.stringify([...JSON.parse(store.getItem('cats')), cat])
	);
};

const deleteCatFromLocalStorage = (catId) => {
	store.setItem(
		'cats',
		JSON.stringify(
			JSON.parse(store.getItem('cats')).filter((el) => el.id != catId)
		)
	);
};

const getNewIdOfCatSync = () => {
	let res = JSON.parse(store.getItem('cats')); 
	if (res.length) {
		return Math.max(...res.map((el) => el.id)) + 1;
	} else {
		return 1;
	}
};



