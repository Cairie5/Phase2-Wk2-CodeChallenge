import React from 'react';

// BotCard component that displays information about a bot
// The component receives `bot` object and `onClick` function as props
const BotCard = ({ bot, onClick }) => {
  // Destructure properties from the `bot` object
  const { name, catchphrase, health, damage, armor, avatar_url } = bot;

  // Render the bot card with its information
  return (
    <div className='card'>
    <div className="bot-card" onClick={onClick}>
      <button type="button" class="btn btn-danger position-absolute top-0 end-0">X</button>
      {/* Display the bot's avatar image */}
      <img src={avatar_url} alt={name} />

      {/* Display the bot's information in a bot-info container */}
      <div className="bot-info">
        {/* Display the bot's name */}
        <h3>{name}</h3>

        {/* Display the bot's catchphrase */}
        <p>Catchphrase: {catchphrase}</p>

        <hr />
        
        {/* Display the bot's health */}
        <span><i class="bi bi-heart-pulse-fill"></i> {health}</span>

        {/* Display the bot's damage */}
        <span><i class="bi bi-lightning-fill"></i> {damage}</span>

        {/* Display the bot's armor */}
        <span><i class="bi bi-shield-shaded"></i> {armor}</span>
        
      </div>
    </div>
    </div>
  );
};

// Export the BotCard component for use in other files
export default BotCard;
