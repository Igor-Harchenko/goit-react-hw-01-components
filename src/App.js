import './App.css';
import Profile from './components/SocialProfile/Profile';
import user from './data/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import transactions from './data/transactions.json';


function App() {
  return (
    <div className="App">
      
      <Profile
        key={user.tag}
        // avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      ></Profile>

      <Statistics stats={statisticalData} title="Upload stats"></Statistics>

      <FriendList friends={friends}></FriendList>

      <TransactionHistory items={transactions} />;

    </div>
  );
}

export default App;


// ===============================================
// import users from './user.json' 
// export default function App() {
//   return (
//     <div>
//       {users.map(user => (
//         <Profile
//           key={user.tag}
//           avatar={user.avatar}
//           name={user.name}
//           tag={user.tag}
//           location={user.location}
//           followers={user.stats.followers}
//           views={user.stats.views}
//           likes={user.stats.likes}
//         />
//       ))}
//     </div>
//   );
// }
