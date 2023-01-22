import React, { useState } from 'react';
import Modal from 'react-modal';

export default function ModalWrapper() {
	const [createOpened, setCreateOpened] = useState(false);

	const [passwordOpened, setPasswordOpened] = useState(false);

	const setCreateOpenedToTrue = () => {
		setCreateOpened({
			createOpened: 'true',
			passwordOpened: 'false',
		});
	};

	return (
		<>
			<Modal
				isOpen={createOpened}
				onRequestClose={() => setCreateOpened(false)}
			>
				<h1>Create</h1>
				<button onClick={setPasswordOpened}>Next</button>
				<button onClick={() => setCreateOpened(false)}>Close Create</button>
			</Modal>

			<Modal
				isOpen={passwordOpened}
				onRequestClose={() => setPasswordOpened(false)}
			>
				<h1>Sign Up</h1>
				<button onClick={() => setPasswordOpened(false)}>
					go back to Create
				</button>
			</Modal>

			<button onClick={setCreateOpenedToTrue}>Open Create</button>
		</>
	);
}
