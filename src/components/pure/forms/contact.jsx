import React from "react";

const Contact = ({ toggle, add, isOpen }) => {
	console.log("SOY IS OPEN", isOpen);

	return (
		isOpen && (
			<div
				style={{
					height: "100vh",
					width: "100vw",
					position: "absolute",
				}}
				color="succes"
				className="d-flex flex-column justify-content-center align-items-center"
			>
				<div
					className="modal-fullscreen  modal-responsive d-flex flex-column justify-content-center align-items-center"
					style={{
						zIndex: 100,
						position: "absolute",
						background: "rgba(1,1,1,0.7)",
					}}
				>
					<div className="modal-dialog">
						<div className="modal-content p-4 text-bg-primary">
							<div className="modal-header">
								<h5 className="modal-title" style={{ color: "whitesmoke" }}>
									New Contact
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
									onClick={toggle}
								></button>
							</div>
							<form
								onSubmit={(e) => {
									add(e);
									toggle();
								}}
							>
								<div className="modal-body ">
									<div className="mb-3 d-flex flex-column align-items-start">
										<label
											htmlFor="name"
											className="form-label"
											style={{ color: "whitesmoke" }}
										>
											Name:
										</label>
										<input
											type="text"
											className="form-control"
											id="name"
											placeholder="Name"
										/>
									</div>
									<div className="mb-3 d-flex flex-column align-items-start">
										<label
											htmlFor="phone"
											className="form-label"
											style={{ color: "whitesmoke" }}
										>
											Phone:
										</label>
										<input
											type="number"
											className="form-control"
											id="phone"
											placeholder="Phone"
										/>
									</div>
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										data-bs-dismiss="modal"
										onClick={toggle}
									>
										Close
									</button>
									<button type="submit" className="btn btn-success">
										Create
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

export default Contact;
