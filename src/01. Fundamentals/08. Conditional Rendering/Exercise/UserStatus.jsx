const UserStatus = ({ loggedIn, isAdmin }) => {
  return (
    <section>
      {loggedIn && isAdmin && <h1>Welcome Admin</h1>}
      {loggedIn && !isAdmin && <h1>Welcome User</h1>}
    </section>
  );
};

export default UserStatus;
