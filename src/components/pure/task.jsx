import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

const TaskComponent = ({ contacto, setStatus, deleteContacto }) => {
	return (
		<tr style={{ cursor: "pointer" }}>
			<td>
				<span>{contacto.name}</span>
			</td>
			<td>
				<span>{contacto.description}</span>
			</td>
			<td>
				{" "}
				{contacto.online ? (
					<i
						className="bi-circle-fill"
						style={{ color: "green" }}
						onClick={() => {
							setStatus(contacto);
						}}
					></i>
				) : (
					<span>
						<i
							style={{ color: "red" }}
							className="bi-circle-fill"
							onClick={() => {
								setStatus(contacto);
							}}
						></i>
					</span>
				)}
			</td>
			<td>
				{" "}
				<i
					className="bi-trash"
					onClick={() => {
						deleteContacto(contacto);
					}}
					style={{
						cursor: "pointer",
						background: "none",
						color: "gray",
					}}
					onMouseOver={(e) => {
						e.target.style.color = "red"; // cambiar el color a rojo
					}}
					onMouseOut={(e) => {
						e.target.style.color = "gray"; // volver al color inicial
					}}
				></i>
			</td>
		</tr>
	);
};

TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
