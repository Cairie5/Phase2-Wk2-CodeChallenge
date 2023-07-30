import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, enlistBot }) => {
  return (
    <div className="bot-collection">
      <h2>All Bots</h2>
      <div className="bot-list">
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} onClick={() => enlistBot(bot.id)} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
