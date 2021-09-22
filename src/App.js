import './App.css';
import Profile from './components/Profile'
import user from './user.json' 


function App() {
  return (
    <div className="App">
      <Profile
        key={user.tag}
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
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
