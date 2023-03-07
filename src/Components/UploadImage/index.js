// import React, { useState } from 'react';

import removeImg from '../../assets/Closing X.svg';

// const UploadImage = ({ src }) => {
// 	const [file, setFile] = useState([]);

// 	const [showDefaultImg, setShowDefaultImg] = useState(true);

// 	function uploadSingleFile(e) {
// 		let ImagesArray = Object.entries(e.target.files).map((e) =>
// 			URL.createObjectURL(e[1])
// 		);
// 		console.log(ImagesArray);
// 		setFile([...file, ...ImagesArray]);
// 		console.log('file', file);
// 		setShowDefaultImg(false);
// 	}

// 	// function upload(e) {
// 	// 	e.preventDefault();
// 	// 	console.log(file);
// 	// }

// 	function deleteFile(e) {
// 		const s = file.filter((item, index) => index !== e);
// 		setFile(s);
// 		console.log(s);
// 	}

// 	return (
// 		<form>
// 			<div className="form-group preview">
// 				{file.length > 0 &&
// 					file.map((item, index) => {
// 						return (
// 							<div key={item}>
// 								<img src={item} alt="" />
// 								<button
// 									type="button"
// 									style={{
// 										background: 'none',
// 										border: 'none',
// 										position: 'relative',
// 									}}
// 									onClick={() => deleteFile(index) || setShowDefaultImg(true)}
// 								>
// 									<img alt="close-button" src={removeImg} />
// 								</button>
// 							</div>
// 						);
// 					})}
// 			</div>

// 			<div className="image-upload">
// 				<label for="file-input">
// 					{/* Show a default image on load */}
// 					{showDefaultImg && (
// 						<img src={src} alt="listing-pic" showDefaultImg={showDefaultImg} />
// 					)}
// 				</label>
// 				<input
// 					type="file"
// 					id="file-input"
// 					disabled={file.length === 5}
// 					onChange={uploadSingleFile}
// 					multiple
// 				/>
// 			</div>
// 			{/* <button
// 				type="button"
// 				className="btn btn-primary btn-block"
// 				onClick={upload}
// 			>
// 				Upload
// 			</button> */}
// 		</form>
// 	);
// };

// export default UploadImage;

// import React from 'react';
import { useState, useEffect } from 'react';

//import loadImg from '../../assets/LoadImg.svg';

//import './index.css';

export default function UploadImage({ src }) {
	const [file, setFile] = useState([]);
	const [showDefaultImg, setShowDefaultImg] = useState(true);

	//A way to upload the images
	const [images, setImages] = useState([]);
	console.log(images);

	//A way to upload images
	const [imageURLs, setImageURLs] = useState([]);

	useEffect(() => {
		if (images.length < 1) return;
		const newImageUrls = [];
		images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
		setImageURLs(newImageUrls);
	}, [images]);

	function onImageChange(e) {
		setImages([...e.target.files]);
		setShowDefaultImg(false);
		console.log(setImages);
	}

	function deleteFile(e) {
		const s = file.filter((item, index) => index !== e);
		setFile(s);
		console.log(s);
	}
	return (
		<>
			<label>
				{showDefaultImg && (
					<img
						src={src}
						alt="main-listing-pic"
						showDefaultImg={showDefaultImg}
					/>
				)}
				<input type="file" multiple accept="image/*" onChange={onImageChange} />

				{imageURLs.map((imageSrc, index) => {
					return (
						<div key={index}>
							<img src={imageSrc} alt="uploaded img" />
							<button
								type="button"
								style={{
									background: 'none',
									border: 'none',
									position: 'relative',
								}}
								onClick={() => deleteFile(index) || setShowDefaultImg(true)}
							>
								<img alt="close-button" src={removeImg} />
							</button>
						</div>
					);
				})}
			</label>
		</>
	);
}
