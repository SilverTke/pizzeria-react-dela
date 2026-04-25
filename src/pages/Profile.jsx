const Profile = () => {
  const email = "test@example.com";
  return (
    <div>
      <p>
        <strong>Mail: </strong>
        {email}
      </p>
      <button className="bg-green-700 hover:bg-green-300 text-white hover:text-black">
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
