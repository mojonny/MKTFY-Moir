import axios from 'axios';

//We want productName,date,title,price
function getMyListings() {
	const token = sessionStorage.getItem('accessToken');
	const url =
		'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/User/products';
	const options = {
		headers: { Authorization: `Bearer ${token}` },
	};

	return axios
		.get(url, options)
		.then((res) => {
			getMyListings(res.data);
			console.log('SUCCESS: Retrieved my listings:', res.data);
		})
		.catch((error) =>
			console.log('ERROR: Unable to retrieve your listings:', error)
		);
}

export async function getFAQ() {
	try {
		const token = sessionStorage.getItem('accessToken');
		const url = 'http://mktfy-proof.ca-central-1.elasticbeanstalk.com/api/FAQ';
		const options = {
			headers: { Authorization: `Bearer ${token}` },
		};
		const response = await axios.get(url, options);
		const itemList = response.data;
		console.log('SUCCESS: Got all FAQs:', response.data);
		return itemList;
	} catch (err) {
		console.log('err', err);
		throw new Error(err);
	}
}

//FAQ page questions
// export function getQuestions() {
// 	const itemList = questions;
// 	return itemList;
// }

//Filters between questions
export async function filterQuestions(listType) {
	const response = await getFAQ();
	let filteredQuestions = response.filter((type) => type.status === listType);
	return filteredQuestions;
}

const MKTFYDataService = {
	getMyListings,
	filterQuestions,
	getFAQ,
};

export default MKTFYDataService;
