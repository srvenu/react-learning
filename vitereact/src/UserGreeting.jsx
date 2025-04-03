import PropTypes from "prop-types";

function UserGreeting({isLoggedIn = false, username = "Guest" }) {
  //   if (props.isLoggedIn) {
  //     return <h2>Welcome {props.username}</h2>;
  //   } else {
  //     return <h2>Please log in to continue</h2>;
  //   }

  const welcomeMsg = <h2 className="welcome-msg">Welcome {username}</h2>;

  const logginPromot = (
    <h2 className="loggin-prompt">Please log in to continue</h2>
  );

  return isLoggedIn ? welcomeMsg : logginPromot;
}
UserGreeting.Proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};
export default UserGreeting;
