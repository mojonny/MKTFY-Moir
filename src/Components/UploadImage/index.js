import React, { useState, useEffect } from 'react';

import removeImg from '../../assets/Closing X.svg';

export default function UploadImage({ src, className }) {
	const [showButton, setShowButton] = useState(false);

	//show the default image when there isn't a file to be loaded, or when one is removed
	const [showDefaultImg, setShowDefaultImg] = useState(true);

	//A way to upload the images
	const [images, setImages] = useState([]);

	//handler function: accessing files through the event object then storing in our state
	function onImageChange(e) {
		setImages([...e.target.files]);
		setShowDefaultImg(false);
		setShowButton(true);
	}

	//A way to render images
	const [imageURLs, setImageURLs] = useState([]);

	//Create a file with all the image urls
	// createObjectURL. This method takes in an image object and then returns a string of a temporary local source for that image. Please note, on page reload or on re-render these strings will have to be re-built

	//use effect looks for changes in our images array
	useEffect(() => {
		if (images.length < 1 || images.length > 6) return;
		const newImageUrls = [];
		images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
		setImageURLs(newImageUrls);
	}, [images]);

	function deleteFile(id) {
		const s = [];
		images.filter((images) => images.id !== id);
		setImageURLs(s);
		console.log(s);
	}
	return (
		<>
			<label>
				{showDefaultImg && (
					<img
						src={src}
						className={className}
						alt="main-listing-pic"
						showDefaultImg={showDefaultImg}
					/>
				)}
				<input
					type="file"
					multiple
					accept="image/*"
					onChange={onImageChange}
					style={{
						visibility: 'hidden',
						width: '0',
						height: '0',
					}}
				/>
			</label>
			{showButton && (
				<button
					type="button"
					style={{
						display: 'flex',
						background: 'none',
						border: 'none',
						position: 'relative',
						width: '0',
						height: '0',
						top: '5%',
						left: '20%',
						marginLeft: '-60px',
					}}
					showButton={showButton}
					onClick={() =>
						setShowDefaultImg(true) ||
						deleteFile(images.id) ||
						setShowButton(false)
					}
				>
					<img alt="close-button" src={removeImg} />
				</button>
			)}
			{imageURLs.map((imageSrc, index) => (
				<img src={imageSrc} className={className} alt="preview" key={index} />
			))}
		</>
	);
}
