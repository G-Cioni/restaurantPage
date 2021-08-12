import { htmlSkeleton } from './htmlSkeleton';
import { clearHtml } from './clearHtml';
export function createMenu() {
	clearHtml();
	htmlSkeleton();
	const footer = document.querySelector('footer');
	footer.style.marginTop = '3em';

	const main = document.querySelector('main');
	const title = document.createElement('h1');
	title.id = 'title';
	title.textContent = 'Menu';
	main.appendChild(title);

	subMenuFactory('Wine');
	menuItemFactory(
		'Wine',
		'Ankida Ridge Vineyards Pinot Noir | 2017',
		'The palate is beautifully grippy and intense, and the finish is unbelievably bright and refreshing.',
		'11$'
	);
	menuItemFactory(
		'Wine',
		'Chene Bleu "Abelard" 2012',
		'Aromas of cooking herbs like rosemary and oregano, as well as brambly berries, give this wine an autumnal feel',
		'16$'
	);
	menuItemFactory(
		'Wine',
		'La Cana Navia Albariño | 2017',
		'Its depth of flavor plays off the aromas of pear, honeysuckle, and white pepper.',
		'8$'
	);
	menuItemFactory(
		'Wine',
		'Hermann J. Wiemer Dry Riesling | 2019',
		'The nose on this wine is full of floral, honey, and citrus notes that will awaken your senses.',
		'9$'
	);

	subMenuFactory('Cocktails');
	menuItemFactory(
		'Cocktails',
		'Jungle Bird',
		'It doesn’t get more classic than the Jungle Bird, which was reportedly invented in Kuala Lumpur, Malaysia, circa 1978. ',
		'14$'
	);
	menuItemFactory(
		'Cocktails',
		'Manhattan',
		'Spicy rye, sweet vermouth, and two dashes of Angostura, stirred, strained, and garnished with a brandied cherry can make you feel like a true class act.',
		'12$'
	);
	menuItemFactory(
		'Cocktails',
		'Moscow Mule',
		'This famous mug-dwelling drink contains ginger, vodka, lime, and soda.',
		'11$'
	);
	menuItemFactory(
		'Cocktails',
		'Penicillin',
		'Nothing cures the weary winter drinker like a Penicillin, made with blended Scotch, smoky Islay Scotch, lemon juice, and honey ginger simple syrup.',
		'11$'
	);

	subMenuFactory('Beers');
	menuItemFactory(
		'Beers',
		'Yazoo Dos Perros Brown Ale',
		"Dos Perros nails the brown ale's nutty malt character with a touch of chocolate, but lightens things up as Mexican brewers frequently do with flaked maize for a perfect balance.",
		'8$'
	);
	menuItemFactory(
		'Beers',
		'Guinness Draught Stout',
		'Guinness Draught Stout wrote the book on stouts, laying the groundwork for smooth and roasty dark beers with dreamy, creamy foam.',
		'10$'
	);
	menuItemFactory(
		'Beers',
		'Köstritzer Schwarzbier',
		'A schwarzbier is a traditional German style that combines the easy-drinking nature of a lager with the complex flavor profile of a porter or stout.',
		'9$'
	);
	menuItemFactory(
		'Beers',
		'Chimay Grande Reserve',
		'The Grande Reserve is a Belgian Strong Ale, which boasts a bouquet of caramel, toast, plum, fig, raisin, pepper, and perfume notes with a boozy warmth.',
		'12$'
	);
}

function menuItemFactory(subMenu, item, description, price) {
	const main = document.getElementById(subMenu);

	const card = document.createElement('div');
	card.classList.add('menu-card');

	const itemDiv = document.createElement('h3');
	itemDiv.textContent = item;
	itemDiv.classList.add('menu-card-item');
	card.appendChild(itemDiv);

	const descDiv = document.createElement('p');
	descDiv.textContent = description;
	descDiv.classList.add('menu-card-item');
	card.appendChild(descDiv);

	const priceDiv = document.createElement('h3');
	priceDiv.textContent = price;
	priceDiv.classList.add('menu-card-item');
	card.appendChild(priceDiv);

	main.appendChild(card);
}

function subMenuFactory(subMenuName) {
	const main = document.querySelector('main');
	const list = document.createElement('div');
	const subMenu = document.createElement('div');
	subMenu.classList.add('sub-menu');
	list.classList.add('list');
	list.id = subMenuName;
	const title = document.createElement('h2');
	title.textContent = subMenuName;
	title.classList.add('menu-title');
	subMenu.appendChild(title);
	subMenu.appendChild(list);
	main.appendChild(subMenu);
}
