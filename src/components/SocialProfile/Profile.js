import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import defaultImage from '../../data/defaultImg.png';

const Profile = ({
    avatar = defaultImage,
    name,
    tag,
    location,
    followers,
    views,
    likes
}) => {
    return (
        <div className={styles.profile} key={name}>
            <div className={styles.description}>
                <img
                    src={avatar ?? defaultImage}
                    alt="Аватар пользователя"
                    className={styles.avatar}
                    width="480"
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>
            <ul className={styles.stats}>
                <li>
                    <span className={styles.label}>Followers: </span>
                    <span className={styles.quantity}>{followers}</span>
                </li>
                <li>
                    <span className={styles.label}>Views: </span>
                    <span className={styles.quantity}>{views}</span>
                </li>
                <li>
                    <span className={styles.label}>Likes: </span>
                    <span className={styles.quantity}>{likes}</span>
                </li>
            </ul>
        </div >
    );
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

export default Profile;