import React from 'react';

import './index.css';

export default function Modal(props) {
	return (
		<div className="modal">
			<div className="modal-content">
				<div className="modal-body">{props.children}</div>
			</div>
		</div>
	);
}
