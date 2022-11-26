import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (<div>
        <h2>{username}</h2>
    </div>);
  
};


Profile.propTypes = {
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.objectOf (PropTypes.number.isRequired).isRequired,
};
