import UserList from './UserList';

const App = () => {
  const users = [
    { id: 1, name: 'ahmed', email: 'ahmed@gmail.com' },
    { id: 2, name: 'ali', email: 'ali@gmail.com' },
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;