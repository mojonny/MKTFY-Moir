import { listings } from '../Pages/MyListings/data';

export function getListings() {
	const itemList = listings;
	return itemList;
}

export function filterListings(listType) {
	let filteredListings = getListings().filter(
		(type) => type.status === listType
	);
	return filteredListings;
}
