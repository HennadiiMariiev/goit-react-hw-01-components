import './App.css';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendsList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import { name as userName, tag, location, avatar, stats } from './data/user.json';
import statisticalData from './data/statistical-data';
import friends from './data/friends';
import transactions from './data/transactions';

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
