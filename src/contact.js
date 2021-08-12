import { htmlSkeleton } from './htmlSkeleton';
import { clearHtml } from './clearHtml';
import map from './contact.jpg';

export function createContact() {
	clearHtml();
	htmlSkeleton();
	const myMap = new Image();
	myMap.src = map;

	const main = document.querySelector('main');
	const title = document.createElement('h1');
	title.textContent = 'Contact us';
	title.id = 'title';
	main.appendChild(title);

	const contact = document.createElement('div');
	contact.id = 'contact';
	main.appendChild(contact);
	const phone = document.createElement('p');
	phone.textContent = 'Phone: +1 212-123-0123';
	contact.appendChild(phone);
	const email = document.createElement('p');
	email.textContent = 'Email: info@drinks.com';
	contact.appendChild(email);
	const address = document.createElement('p');
	address.textContent =
		'Address: 57 Church St, New York, NY 10007, United States';
	contact.appendChild(address);
	myMap.id = 'map';
	contact.appendChild(myMap);
}
