import { htmlSkeleton } from './htmlSkeleton';
import { clearHtml } from './clearHtml';
import { createMenu } from './menu';

export function createHome() {
	clearHtml();
	htmlSkeleton();
	const now = new Date();
	const main = document.querySelector('main');

	const welcome = document.createElement('h3');
	welcome.id = 'welcome';
	welcome.textContent = 'Welcome to';
	main.appendChild(welcome);

	const restaurantName = document.createElement('h1');
	restaurantName.textContent = 'ĐЯ/NK$';
	main.appendChild(restaurantName);

	const open = document.createElement('div');
	open.id = 'open';
	main.appendChild(open);

	const openHours = document.createElement('h4');
	openHours.id = 'openHours';
	if (now.getDay() > 5) {
		now.getHours() < 13
			? (openHours.textContent = 'ĐЯ/NK$ / CLOSED')
			: (openHours.textContent = 'ĐЯ/NK$ / OPEN');
	} else {
		now.getHours() < 19
			? (openHours.textContent = 'ĐЯ/NK$ / CLOSED')
			: (openHours.textContent = 'ĐЯ/NK$ / OPEN');
	}

	open.appendChild(openHours);

	const hours1 = document.createElement('h3');
	hours1.textContent = 'Mon - Fri: 19:00 - 24:00';
	open.appendChild(hours1);

	const hours2 = document.createElement('h3');
	hours2.textContent = 'Sat - Sun: 13:00 - 24:00';
	open.appendChild(hours2);

	const paragraph = document.createElement('p');
	paragraph.textContent =
		'When it comes to the best rooftop bars in NYC, ĐЯ/NK$ is a place you have to visit to enjoy a drink. On top of the an incredible Hotel, this gorgeous bar offers stunning views of Manhattan. We consistently are recognized as one of the best rooftop bars in the world.';
	main.appendChild(paragraph);

	const menuBtn = document.createElement('button');
	menuBtn.textContent = 'Menu';
	menuBtn.addEventListener('click', () => createMenu());
	main.appendChild(menuBtn);
}
