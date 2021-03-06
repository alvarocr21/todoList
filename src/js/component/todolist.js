import React from "react";

//create your first component
export function ToDoList() {
	return (
		<div className=" container text-center mt-5">
			<div className="card">
				<h5 className="card-title">To Do List</h5>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<span className="input-group-text" id="basic-addon1">
							Ingrese la tarea
						</span>
					</div>
					<input
						type="text"
						className="form-control"
						placeholder="Username"
						aria-label="Username"
						aria-describedby="basic-addon1"
					/>
				</div>
				<div className="card-body text-left">
					<li className="list-group-item ">An item</li>
					<li className="list-group-item">A second item</li>
					<li className="list-group-item">A third item</li>
				</div>
			</div>
		</div>
	);
}
