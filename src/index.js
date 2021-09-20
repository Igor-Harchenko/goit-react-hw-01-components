import ReactDOM from 'react-dom';
import user from './user.json';
  
function Profile(props) {
    console.log(props);
    return (
        <div class="profile" >
            <div class="description">
                <img
                    src={props.avatar}
                    alt="Аватар пользователя"
                    class="avatar"
                    width="480"
                />
                <p class="name">{props.name}</p>
                <p class="tag">{props.tag}</p>
                <p class="location">{props.location}</p>
            </div>
            <ul class="stats">
                <li>
                    <span class="label">Followers</span>
                    <span class="quantity">{props.followers}</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">{props.views}</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">{props.likes}</span>
                </li>
            </ul>
        </div >
    );
}



ReactDOM.render(
    <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
    />, document.querySelector('#root'));

// ===========================================

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// reportWebVitals();
