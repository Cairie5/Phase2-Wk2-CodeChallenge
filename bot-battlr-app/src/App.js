import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';

const App = () => {
  // State hooks to manage the bots, enlistedBots, and selectedBot
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  // useEffect to fetch data from the server when the component mounts
  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Function to enlist a bot into the army
const enlistBot = (botId) => {
  const botToEnlist = bots.find(bot => bot.id === botId);
  setEnlistedBots([...enlistedBots, botToEnlist]);

  // Update the bots array by removing the enlisted bot
  const updatedBots = bots.filter(bot => bot.id !== botId);
  setBots(updatedBots);
};


  // Function to release a bot from the army
  const releaseBot = (botId) => {
    const updatedEnlistedBots = enlistedBots.filter(bot => bot.id !== botId);
    setEnlistedBots(updatedEnlistedBots);
  };

  // Function to handle clicking on a bot card
  const handleBotClick = (botId) => {
    const selectedBot = bots.find(bot => bot.id === botId);
    setSelectedBot(selectedBot);
  };

  // Function to handle going back to the list view from show view
  const handleBackToList = () => {
    setSelectedBot(null);
  };

  // Function to sort bots by health
  const sortBotsByHealth = () => {
    const sortedBots = [...bots].sort((a, b) => b.health - a.health);
    setBots(sortedBots);
  };

  // Function to sort bots by damage
  const sortBotsByDamage = () => {
    const sortedBots = [...bots].sort((a, b) => b.damage - a.damage);
    setBots(sortedBots);
  };

  // Function to sort bots by armor
  const sortBotsByArmor = () => {
    const sortedBots = [...bots].sort((a, b) => b.armor - a.armor);
    setBots(sortedBots);
  };

  return (
    <div className="app">
      {/* App title */}
      <h1>Bot Battlr</h1>

      {/* SortBar component to allow sorting bots */}
      <SortBar
        onSortByHealth={sortBotsByHealth}
        onSortByDamage={sortBotsByDamage}
        onSortByArmor={sortBotsByArmor}
      />

      {/* Container for the bot-related components */}
      <div className="bot-container">
        {/* YourBotArmy component to display enlisted bots */}
        <YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} />

        {/* Conditionally render BotSpecs or BotCollection */}
        {selectedBot ? (
          <BotSpecs
            bot={selectedBot}
            onBackClick={handleBackToList}
            onEnlistClick={() => enlistBot(selectedBot.id)}
          />
        ) : (
          <BotCollection bots={bots} enlistBot={enlistBot} onBotClick={handleBotClick} />
        )}
      </div>
    </div>
  );
};

export default App;
