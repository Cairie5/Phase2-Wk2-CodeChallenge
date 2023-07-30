import React from 'react';

// BotSpecs component that displays detailed information about a specific bot
// The component receives `bot`, `onBackClick`, and `onEnlistClick` as props
const BotSpecs = ({ bot, onBackClick, onEnlistClick }) => {
  const { name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  return (
    // Render the bot details in a card-like format
    <div className="bot-specs">
      <h2>{name}</h2>
      <img src={avatar_url} alt={name} />
      <div>
        <p>Health: {health}</p>
        <p>Damage: {damage}</p>
        <p>Armor: {armor}</p>
        <p>Class: {bot_class}</p>
        <p>Catchphrase: {catchphrase}</p>

        {/* Button to go back to the list view */}
        <button onClick={onBackClick}>Back to List</button>

        {/* Button to enlist the bot */}
        <button onClick={onEnlistClick}>Enlist Bot</button>
      </div>
    </div>
  );
};

// Export the BotSpecs component for use in other files
export default BotSpecs;
