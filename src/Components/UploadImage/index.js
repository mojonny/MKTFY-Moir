import React, { useState } from 'react';
import loadImg from '../../assets/LoadImg.svg';

const UploadImage = () => {
	const [file, setFile] = useState([]);

	const [showDefaultImg, setShowDefaultImg] = useState(true);

	function uploadSingleFile(e) {
		let ImagesArray = Object.entries(e.target.files).map((e) =>
			URL.createObjectURL(e[1])
		);
		console.log(ImagesArray);
		setFile([...file, ...ImagesArray]);
		console.log('file', file);
		setShowDefaultImg(false);
	}

	// function upload(e) {
	// 	e.preventDefault();
	// 	console.log(file);
	// }

	function deleteFile(e) {
		const s = file.filter((item, index) => index !== e);
		setFile(s);
		console.log(s);
	}

	return (
		<form>
			<div className="form-group preview">
				{file.length > 0 &&
					file.map((item, index) => {
						return (
							<div key={item}>
								<img src={item} alt="" />
								<button
									type="button"
									onClick={() => deleteFile(index) || setShowDefaultImg(true)}
								>
									delete
								</button>
							</div>
						);
					})}
			</div>

			<div className="image-upload">
				<label for="file-input">
					{/* Show a default image on load */}
					{showDefaultImg && (
						<img
							src={loadImg}
							alt="listing-pic"
							showDefaultImg={showDefaultImg}
						/>
					)}
				</label>
				<input
					type="file"
					id="file-input"
					disabled={file.length === 1}
					onChange={uploadSingleFile}
					multiple
				/>
			</div>
			{/* <button
				type="button"
				className="btn btn-primary btn-block"
				onClick={upload}
			>
				Upload
			</button> */}
		</form>
	);
};

export default UploadImage;
