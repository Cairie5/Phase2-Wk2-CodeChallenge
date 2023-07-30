import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

const App = () => {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  // Fetch data from the server on component mount
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
  };

  // Function to release a bot from the army
  const releaseBot = (botId) => {
    const updatedEnlistedBots = enlistedBots.filter(bot => bot.id !== botId);
    setEnlistedBots(updatedEnlistedBots);
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <div className="bot-container">
        <BotCollection bots={bots} enlistBot={enlistBot} />
        <YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} />
      </div>
    </div>
  );
};

export default App;
