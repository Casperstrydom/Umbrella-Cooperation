import useGetUsers from '../../../hooks/useGetUsers';

const UserList = () => {
  const { loading, users } = useGetUsers();

  return (
    <div className="flex flex-col space-y-2">
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        users.map(user => (
          <div key={user._id} className="user-item">
            <span>{user.username}</span> {/* Display username or any other user info */}
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;