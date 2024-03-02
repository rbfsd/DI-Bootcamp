const User = () => {
  const users = [
    { id: 1, name: "John", email: "jjj@gamil.com" },
    { id: 2, name: "Marry", email: "mmm@gamil.com" },
    { id: 3, name: "Anne", email: "aaa@gamil.com" },
  ];

  return (
    <div>
      {users.map((item) => {
        <div>
          {item.name}
          <p>{item.email}</p>
        </div>;
      })}
    </div>
  );
};

export default User;
