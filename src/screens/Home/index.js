import React from "react";

import * as SC from "./styles.js";

const Home = () => {
	return (
		<SC.Content>
			<SC.HomeContainer>
				<SC.MomContainer>
					<SC.Circle />
					<SC.Mom />
				</SC.MomContainer>
				<SC.TextContainer>
					<h1>
						<SC.MomTitle>Mom</SC.MomTitle> bot
					</h1>
					<p>Your best friend for I don't know yet</p>
					<SC.Add
						href="https://discordapp.com/oauth2/authorize?client_id=541024861678600193&scope=bot&permissions=8"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SC.DiscordIcon />
						Add to Discord
					</SC.Add>
				</SC.TextContainer>
			</SC.HomeContainer>
		</SC.Content>
	);
};

export default Home;
