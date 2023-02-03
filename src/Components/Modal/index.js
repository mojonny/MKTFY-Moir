import React from 'react';
import './index.css';

export default function Modal(props) {
	if (!props.show) {
		return null;
	}

	return (
		<div className="BG" onClick={props.onClose}>
			<div className="modal" style={{ height: '50px', width: '250px' }}>
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title">Modal title</h4>
					</div>
					<div className="modal-body">This is the modal content</div>
					<div className="modal-footer">
						<button className="button-modal" onClick={props.onClose}>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
