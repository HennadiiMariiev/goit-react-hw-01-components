import './App.css';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendsList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import { name as userName, tag, location, avatar, stats } from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.js';
import friends from './components/FriendsList/friends.js';
import transactions from './components/TransactionHistory/transactions';

function App() {
  return (
    <div className="App">
      <Profile userName={userName} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
