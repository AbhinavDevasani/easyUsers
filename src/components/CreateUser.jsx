import { useContext } from "react";
import UserContext from "../context/userContext";

const CreateUser = ({ setIsOpen }) => {
  const { users, setUsers, setFiltered } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newUser = {
      id: Date.now(),
      name: formData.get("name"),
      username: formData.get("username"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      website: formData.get("website"),
      address: {
        street: formData.get("street"),
        suite: formData.get("suite"),
        city: formData.get("city"),
        zipcode: formData.get("zipcode"),
        geo: {
          lat: formData.get("lat"),
          lng: formData.get("lng")
        }
      },
      company: {
        name: formData.get("companyName"),
        catchPhrase: formData.get("catchPhrase"),
        bs: formData.get("bs")
      }
    };

    const updatedUsers = [...users, newUser];
    
    setUsers(updatedUsers);
    setFiltered(updatedUsers);

    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center p-6 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl w-full max-w-3xl space-y-4 overflow-y-auto"
      >
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Create New User</h2>
          <button type="button" onClick={() => setIsOpen(false)} className="cursor-pointer text-red-500 font-bold">✕</button>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <input name="name" placeholder="Name" className="input border-gray-200 p-1 border-2 rounded-lg" required />
          <input name="username" placeholder="Username" className="input border-gray-200 p-1 border-2 rounded-lg" />
          <input name="email" type="email" placeholder="Email" className="input border-gray-200 p-1 border-2 rounded-lg" />
          <input name="phone" placeholder="Phone" className="input border-gray-200 p-1 border-2 rounded-lg" />
          <input name="website" placeholder="Website" className="input border-gray-200 p-1 border-2 rounded-lg" />
        </div>

        
        <h3 className="font-semibold">Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="street" placeholder="Street" className="input border-gray-200 p-1 border-2 rounded-lg" />
          <input name="suite" placeholder="Suite" className="input border-gray-200 p-1 border-2 rounded-lg" />
          <input name="city" placeholder="City" className="input border-gray-200 p-1 border-2 rounded-lg" />
          <input name="zipcode" placeholder="Zipcode" className="input border-gray-200 p-1 border-2 rounded-lg" />
        </div>

        
        <h3 className="font-semibold">Geo Location</h3>
        <div className="grid grid-cols-2 gap-4">
          <input name="lat" placeholder="Latitude" className="input border-gray-200 p-1 border-2 rounded-lg" />
          <input name="lng" placeholder="Longitude" className="input border-gray-200 p-1 border-2 rounded-lg" />
        </div>

        <h3 className="font-semibold">Company</h3>
        <div className="grid grid-cols-1 gap-4">
          <input name="companyName" placeholder="Company Name" className="input border-gray-200 p-1 border-2 rounded-lg" />
          <input name="catchPhrase" placeholder="Catch Phrase" className="input border-gray-200 p-1 border-2 rounded-lg" />
          <input name="bs" placeholder="Business" className="input border-gray-200 p-1 border-2 rounded-lg" />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
