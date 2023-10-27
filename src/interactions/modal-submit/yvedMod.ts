import { ModalSubmitInteraction } from 'discord.js';

import { InteractionModule } from '@interfaces';
import { gryp } from '@models';

export default {
	async execute({ client, interaction }) {
		if (!interaction.inGuild()) return;

		const notificationText = interaction.fields.getTextInputValue('yvedId');
		
		const selectedGroup = await gryp.findOne({
			Name: client.selectedSubject
		});
		
		if (selectedGroup) {
			const channelString = selectedGroup.yvedomlenie || 'Неизвестно';
			const channelId = channelString.replace(/\D/g, '');
			const channel = interaction.guild!.channels.cache.get(channelId);
			
			if (channel && channel.isText()) {
				await channel.send(notificationText);
				interaction.reply({ content: 'Уведомление успешно отправлено!', ephemeral: true });
			} else {
				interaction.reply({ content: 'Канал не найден.', ephemeral: true });
			}
		} else {
			interaction.reply({ content: 'Группа не найдена.', ephemeral: true });
		}
	}
} as InteractionModule<ModalSubmitInteraction>;