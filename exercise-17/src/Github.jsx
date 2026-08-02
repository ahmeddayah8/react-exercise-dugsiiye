import UseFetch from "./UseFetch";

function Github() {

  const { data, loading, error } = UseFetch(
    "https://api.github.com/users/ahmeddayah8",
  );

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Name: {data.name}</h1>
      <img
        src={data.avatar_url}
        width={100}
        style={{ borderRadius: "50px" }}
        alt=""
      />
      <h3>Public Respos: {data.public_repos}</h3>
      <h3> Followers: {data.followers}</h3>
      <h3>Location: {data.location}</h3>
    </div>
  );
}
export default Github;
