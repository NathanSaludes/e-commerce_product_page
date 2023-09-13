import './modal.css';

function Modal({ shouldOpen = false, children }) {
	return (
		<>
			{shouldOpen && (
				<div className="modal-overlay">
					<div className="modal-body">
						<button className="close"></button>
						{children}
					</div>
				</div>
			)}
		</>
	)
}

export default Modal;
