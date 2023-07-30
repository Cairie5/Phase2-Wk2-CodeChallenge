import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ enlistedBots, releaseBot }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {enlistedBots.map(bot => (
          <BotCard key={bot.id} bot={bot} onClick={() => releaseBot(bot.id)} />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
