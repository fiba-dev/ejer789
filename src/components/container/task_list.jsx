import React, { useState } from "react";
import { Task } from "../../models/task.class";
import Contact from "../pure/forms/contact";

import TaskComponent from "../pure/task";

const TaskList = () => {
	const defaultTask = new Task("Example", "0303456", true);
	const [contactList, setContactList] = useState([defaultTask]);
	const [isOpen, setIsOpen] = useState(false);
	function toggle() {
		setIsOpen(!isOpen);
	}
	function addContacto(e) {
		setContactList([
			new Task(e.target.name.value, e.target.phone.value),
			...contactList,
		]);
		console.log("CONTACTLIST", contactList);
		e.preventDefault();
	}
	function setStatus(contacto) {
		console.log(contactList.indexOf(contacto));
		const index = contactList.indexOf(contacto);
		const tempTask = [...contactList];
		console.log("STATUS ANTES", tempTask[index].online);
		tempTask[index].online = !tempTask[index].online;
		console.log("STATUS despues", tempTask[index].online);
		setContactList(tempTask);
	}
	function deleteContacto(contacto) {
		const index = contactList.indexOf(contacto);
		const tempTask = [...contactList];
		tempTask.splice(index, 1);
		setContactList(tempTask);
	}

	return (
		<div>
			<Contact toggle={toggle} isOpen={isOpen} add={addContacto}></Contact>
			<div className="col-12 d-flex flex-row justify-content-center align-items-center">
				<div className="card card-responsive w-50">
					<div className="card-header p-3 d-flex flex-row justify-content-end">
						<i
							className="bi-person-plus "
							style={{
								cursor: "pointer",
								background: "none",
								color: "gray",
								fontSize: "32px",
							}}
							onMouseOver={(e) => {
								e.target.style.color = "green"; // cambiar el color a rojo
							}}
							onMouseOut={(e) => {
								e.target.style.color = "gray"; // volver al color inicial
							}}
							onClick={toggle}
						></i>{" "}
					</div>

					<h2>Contacts</h2>
					<div className="table-responsive">
						<table class="table table-bordered border-secondary table-hover ">
							<thead className="table-bordered border-primary table-primary ">
								<tr>
									<th scope="col">Name</th>
									<th scope="col">Phone</th>
									<th scope="col">Status</th>
									<th scope="col">Delete</th>
								</tr>
							</thead>
							<tbody>
								{" "}
								{contactList.map((task, index) => (
									<TaskComponent
										contacto={task}
										setStatus={setStatus}
										index={index}
										key={index}
										deleteContacto={deleteContacto}
									/>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TaskList;
