export const phoneNumberAutoFormat = (phoneNumber) => {
	const number = phoneNumber.trim().replace(/[^0-9]/g, '');

	if (number.length < 3) return number;
	if (number.length < 5) return number.replace(/(\d{2})(\d{1})/, '$1-$2');
	if (number.length < 7)
		return number.replace(/(\d{2})(\d{2})(\d{1})/, '$1-$2-$3');
	return number.replace(/(\d{2})(\d{2})(\d{2})/, '$1-$2-$3');
};
