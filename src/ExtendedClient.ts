import { Client, ClientOptions } from 'discord.js';

export default class ExtendedClient extends Client {
	public selectedSubject: string;

	constructor(options: ClientOptions) {
		super(options)
		this.selectedSubject = '';
	}
}