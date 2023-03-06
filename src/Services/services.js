import axios from 'axios';
import { listings } from '../Pages/MyListings/data';
import { questions } from '../Pages/FAQ/data';

//Login Portal
//Login POST = /api/account/login
//Response data = accessToken, refreshToken, expires, userDetails
function login(email, password) {
	console.log('Login to the app');
	return axios.post(`https://********************.com/api/account/login`);
}

function loginForgotPassword(email) {
	console.log('Forgot pw');
	return axios.post(
		`https://********************.com/api/account/forgotpassword`
	);
}

function loginResetPassword(currentPassword, password, passwordConfirmation) {
	console.log('Reset pw');
	return axios.post(
		`https://********************.com/api/account/resetpassword`
	);
}

function signUp(
	firstName,
	lastName,
	email,
	phone,
	address,
	city,
	province,
	country
) {
	console.log('Sign up for MKTFY');
	return axios.post(`https://********************.com/api/account/login`);
}

//This may not be needed for the search bar but still needed to get all listings
function getAllListings(id) {
	console.log('get all listings');
	return axios.get(
		`https://********************.com/api/listings/${id}/search`
	);
}

//Might be able to just filter the data
function getDeals(id) {
	console.log('get all listings');
	return axios.get(`https://********************.com/api/listings/${id}/deals`);
}

function updateNotifications(id, data) {
	return axios.put(
		`https://********************.com/api/notifications/${id}/unread`,
		data
	);
}

function getNotifications(id) {
	return axios.get(
		`https://********************.com/api/notifications/${id}/all`
	);
}

//should get firstName,lastName,email,phone,address,city,province,country
//for account info page
function getAccountInfo() {
	return axios.get(`https://********************.com/api/user/profile`);
}

function updateAccountInfo() {
	return axios.put(`https://********************.com/api/user/profile`);
}

function changePassword() {
	return axios.put(`https://********************.com/api/user/changepassword`);
}

//We want productName,date,title,price
function getMyPurchases() {
	return axios.get(
		`https://********************.com/api/user/listings/history`
	);
}

function contactUs(name, email, message) {
	return axios.post(
		'https://movie-reviews-service.onrender.com/api/user/contactus'
	);
}
////////////////////////////////////////////////////////////////////////////////////////
//get all the listings both active and sold
export function getListings() {
	const itemList = listings;
	return itemList;
}

//filter listings by active or sold
export function filterListings(listType) {
	let filteredListings = getListings().filter(
		(type) => type.status === listType
	);
	return filteredListings;
}

//We want productName,date,title,price
function getMyListings() {
	return axios.get(`https://********************.com/api/user/listings/`);
}
///////////////////////////////////////////////////////////////////////////////////////
//FAQ page questions
export function getQuestions() {
	const itemList = questions;
	return itemList;
}

//Filters between questions
export function filterQuestions(listType) {
	let filteredQuestions = getQuestions().filter(
		(type) => type.status === listType
	);
	return filteredQuestions;
}

//Get product details to view single product
function getProductDetails(
	productName,
	description,
	images,
	price,
	sellerProfile,
	sellerListingCount
) {
	return axios.get(
		`https://movie-reviews-service.onrender.com/api/product/details`
	);
}

function checkout() {
	return axios.post(
		'https://movie-reviews-service.onrender.com/api/product/checkout'
	);
}

//Images, ProductName, Description,Category, Condition Price, Address, City
function createListing(data) {
	return axios.post(
		'https://movie-reviews-service.onrender.com/api/add/listing',
		data
	);
}

//Id, FilePath
function addImage(data) {
	return axios.post(
		'https://movie-reviews-service.onrender.com/api/uploads/image',
		data
	);
}

function updateAddress(data) {
	return axios.put(
		'https://movie-reviews-service.onrender.com/api/v1/movies/review',
		data
	);
}

// function find(query, by = 'title', page = 0) {
// 	return axios.get(
// 		`https://movie-reviews-service.onrender.com/api/v1/movies?${by}=${query}&page=${page}`
// 	);
// }

// function createReview(data) {
// 	return axios.post(
// 		'https://movie-reviews-service.onrender.com/api/v1/movies/review',
// 		data
// 	);
// }

// function updateReview(data) {
// 	return axios.put(
// 		'https://movie-reviews-service.onrender.com/api/v1/movies/review',
// 		data
// 	);
// }

// function deleteReview(id, userId) {
// 	return axios.delete(
// 		'https://movie-reviews-service.onrender.com/api/v1/movies/review',
// 		{
// 			data: { review_id: id, user_id: userId },
// 		}
// 	);
// }

// function getRatings() {
// 	return axios.get(
// 		'https://movie-reviews-service.onrender.com/api/v1/movies/ratings'
// 	);
// }

const MKTFYDataService = {
	login,
	loginForgotPassword,
	loginResetPassword,
	signUp,
	getAllListings,
	getDeals,
	updateNotifications,
	getNotifications,
	getAccountInfo,
	updateAccountInfo,
	changePassword,
	getMyPurchases,
	contactUs,
	getMyListings,
	getProductDetails,
	checkout,
	createListing,
	addImage,
	updateAddress,
};

export default MKTFYDataService;
