import React from 'react';
import { useState } from 'react';

import Modal from 'react-modal';
// import PasswordModal from '../password-modal/password-modal.component';

// import greyX from '../../assets/GreyX.png';
// import arrow from '../../assets/Arrow.png';
import './create-account-modal.styles.css';

export default function ModalWrapper() {
	const [
		{ createOpened, passwordOpened },
		{ setCreateOpened, setPasswordOpened },
	] = useState(false);

	const openModal = (modalType) => () => {
		if (modalType === 'create') {
			this.setState({
				createOpened: true,
				passwordOpened: false,
			});
		} else if (modalType === 'password') {
			this.setState({
				createOpened: false,
				passwordOpened: true,
			});
		}
	};

	const closeModal = (modalType) => () => {
		if (modalType === 'create') {
			setCreateOpened({
				createOpened: 'false',
			});
		} else if (modalType === 'password') {
			setPasswordOpened({
				passwordOpened: 'false',
			});
		}
	};

	return (
		<>
			<Modal isOpen={createOpened} onRequestClose={closeModal('create')}>
				<h1>Login</h1>
				<button onClick={openModal('password')}>Open Signup</button>
				<button onClick={closeModal('create')}>Close this modal</button>
			</Modal>
			<Modal isOpen={passwordOpened} onRequestClose={closeModal('password')}>
				<h1>Sign Up</h1>
				<button onClick={openModal('create')}>Open Login</button>
				<button onClick={closeModal('password')}>Close this modal</button>
			</Modal>
			<button onClick={openModal('create')}>Open Login</button>
			<button onClick={openModal('password')}>Open Signup</button>
		</>
	);
}

// import React, { useState } from 'react';
// import Modal from 'react-modal';

// export default function ModalWrapper() {
// 	const [createOpened, setCreateOpened] = useState(false);

// 	const [passwordOpened, setPasswordOpened] = useState(false);

// 	const setCreateOpenedToTrue = () => {
// 		setCreateOpened({
// 			createOpened: 'true',
// 			passwordOpened: 'false',
// 		});
// 	};

// 	return (
// 		<>
// 			<Modal
// 				isOpen={createOpened}
// 				onRequestClose={() => setCreateOpened(false)}
// 			>
// 				<h1>Create</h1>
// 				<button onClick={setPasswordOpened}>Next</button>
// 				<button onClick={() => setCreateOpened(false)}>Close Create</button>
// 			</Modal>

// 			<Modal
// 				isOpen={passwordOpened}
// 				onRequestClose={() => setPasswordOpened(false)}
// 			>
// 				<h1>Sign Up</h1>
// 				<button onClick={() => setPasswordOpened(false)}>
// 					go back to Create
// 				</button>
// 			</Modal>

// 			<button onClick={setCreateOpenedToTrue}>Open Create</button>
// 		</>
// 	);
// }
