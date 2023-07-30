import React from 'react';
import BotCard from './BotCard';

// YourBotArmy component that displays enlisted bots in the user's army
// The component receives `enlistedBots` and `releaseBot` as props
const YourBotArmy = ({ enlistedBots, releaseBot }) => {
  return (
    // Render a container for the user's enlisted bots
    <div className="your-bot-army">
      {/* Heading to indicate the user's bot army */}
      <h2>Your Bot Army</h2>

      {/* Container for the enlisted bots */}
      <div className="bot-list">
        {/* Render each enlisted bot using the BotCard component */}
        {enlistedBots.map(bot => (
          <BotCard key={bot.id} bot={bot} onClick={() => releaseBot(bot.id)} />
        ))}
      </div>
    </div>
  );
};

// Export the YourBotArmy component for use in other files
export default YourBotArmy;
