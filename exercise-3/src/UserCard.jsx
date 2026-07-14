const UserCard = (props) => {
    console.log(props)
  return (
    <>
      <h2>Name is; {props.Username}</h2>
      <p>Email is; {props.Email}</p>
    </>
  );
};

export default UserCard;
