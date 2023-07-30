import React from 'react';

const BotCard = ({ bot, onClick }) => {
  const { name, health, damage, armor, avatar_url } = bot;

  return (
    <div className="bot-card" onClick={onClick}>
      <img src={avatar_url} alt={name} />
      <div className="bot-info">
        <h3>{name}</h3>
        <p>Health: {health}</p>
        <p>Damage: {damage}</p>
        <p>Armor: {armor}</p>
      </div>
    </div>
  );
};

export default BotCard;
