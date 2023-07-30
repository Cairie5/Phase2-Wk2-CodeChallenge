import React from 'react';
import BotCard from './BotCard';

// BotCollection component that displays a collection of bots
// The component receives `bots` array and `enlistBot` function as props
const BotCollection = ({ bots, enlistBot }) => {
  // Render the bot collection section with a title "All Bots"
  return (
    <div className="bot-collection">
      <h2>All Bots</h2>

      {/* Render a list of bot cards */}
      <div className="bot-list">
        {/* Map through the array of `bots` to create a BotCard for each bot */}
        {bots.map(bot => (
          // Use the BotCard component to display information about each bot
          // Pass the `bot` object and `enlistBot` function as props to BotCard
          // Set the `bot` object as the `bot` prop and create an onClick function
          // to call `enlistBot` function with the `bot.id` when the card is clicked
          <BotCard key={bot.id} bot={bot} onClick={() => enlistBot(bot.id)} />
        ))}
      </div>
    </div>
  );
};

// Export the BotCollection component for use in other files
export default BotCollection;
