import React from 'react';

// BotCard component that displays information about a bot
// The component receives `bot` object and `onClick` function as props
const BotCard = ({ bot, onClick }) => {
  // Destructure properties from the `bot` object
  const { name, catchphrase, health, damage, armor, avatar_url } = bot;

  // Render the bot card with its information
  return (
    <div className="bot-card" onClick={onClick}>
      {/* Display the bot's avatar image */}
      <img src={avatar_url} alt={name} />

      {/* Display the bot's information in a bot-info container */}
      <div className="bot-info">
        {/* Display the bot's name */}
        <h3>{name}</h3>

        {/* Display the bot's health */}
        <p>Health: {health}</p>

        {/* Display the bot's damage */}
        <p>Damage: {damage}</p>

        {/* Display the bot's armor */}
        <p>Armor: {armor}</p>

        {/* Display the bot's catchphrase */}
        <p>Catchphrase: {catchphrase}</p>
        
      </div>
    </div>
  );
};

// Export the BotCard component for use in other files
export default BotCard;
