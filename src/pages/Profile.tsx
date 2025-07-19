import { useBooksContext } from "../context/BooksContext";

const Profile = () => {
  const { user, loading } = useBooksContext();
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-center text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-center text-red-500">No Profile</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Profile</h1>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-semibold">
            Username:
          </label>
          <p className="text-gray-900">{user.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-semibold">Bio:</label>
          <p>{user.bio || "This user has not provided a bio."}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-semibold">
            Profile Picture:
          </label>
          <img
            src={user.img}
            alt="Profile"
            className="w-36 h-36 rounded-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
