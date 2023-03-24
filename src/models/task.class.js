export class Task {
	name = "";
	description = "";
	online = false;

	constructor(name, description, online) {
		this.name = name;
		this.description = description;
		this.online = online;
	}
}
