import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserDetails } from "@/redux/thunk/user.thunk";
import { showSuccessToast, showErrorToast } from "@/components/toast-functions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  // Fetch user data
  const fetchUserData = async () => {
    if (!user?._id) return;

    try {
      const data = await dispatch(getUserDetails(user._id)).unwrap();
      setFormData({
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        address: data.address || "",
        password: "",
      });
    } catch (err) {
      console.error(err);
      showErrorToast("Failed to fetch user details");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []); // Fetch only once on mount

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        password: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Make password undefined if empty
    const updatedData = {
      ...formData,
      password: formData.password || undefined,
    };

    try {
      const result = await dispatch(
        updateUserDetails({ id: user._id, updatedData }),
      ).unwrap();
      showSuccessToast(result.message || "Profile updated successfully!");
      setFormData((prev) => ({ ...prev, password: "" })); // Clear password field
    } catch (err) {
      showErrorToast(err.message || "Update failed");
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl p-6">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Dashboard</h1>

      <div>
        <form className="space-y-6" onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className="mt-1 rounded-md border border-gray-300 px-3 py-2"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 rounded-md border border-gray-300 px-3 py-2"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                className="mt-1 rounded-md border border-gray-300 px-3 py-2"
                value={formData.phone}
                onChange={handleChange}
                disabled={isLoading}
                placeholder="Enter phone number"
              />
            </div>

            {/* Address */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                className="mt-1 rounded-md border border-gray-300 px-3 py-2"
                value={formData.address}
                onChange={handleChange}
                disabled={isLoading}
                placeholder="Enter your address"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-gray-900 py-2 text-white transition hover:bg-gray-800"
          >
            {isLoading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
