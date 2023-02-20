import { listings } from '../Pages/MyListings/data';
import { questions } from '../Pages/FAQ/data';

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

export function getQuestions() {
	const itemList = questions;
	return itemList;
}

export function filterQuestions(listType) {
	let filteredQuestions = getQuestions().filter(
		(type) => type.status === listType
	);
	return filteredQuestions;
}
