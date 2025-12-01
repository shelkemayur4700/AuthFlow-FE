import React from "react";
import SignupForm from "./component/signup-form";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "@/redux/thunk/user.thunk";
import { showErrorToast, showSuccessToast } from "@/components/toast-functions";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.user);

  const handleSubmit = async (formData) => {
    try {
      const result = await dispatch(signupUser(formData)).unwrap();
      showSuccessToast(result.message || "Sign up successful!");
      // You can redirect to login page or dashboard here
    } catch (err) {
      const errorMessage = err?.message || "Sign up failed. Please try again.";
      showErrorToast(errorMessage);
    }
  };

  return (
    <div className="bg-background relative flex min-h-screen items-center justify-center px-4 py-4 sm:px-6 md:py-4 lg:px-8 lg:py-12">
      <div className="w-full max-w-5xl">
        <div className="overflow-hidden rounded-xl bg-white shadow-xl md:rounded-2xl md:shadow-2xl lg:flex lg:max-h-[550px]">
          {/* Branding Section */}
          <div className="hidden items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 lg:flex lg:w-1/2">
            <div className="max-w-sm space-y-4 text-white">
              <h1 className="text-3xl font-bold tracking-tight">Auth Flow</h1>
            </div>
          </div>

          {/* Signup Section */}
          <div className="flex flex-1 items-center justify-center bg-white px-6 py-12 md:px-8 md:py-6 lg:px-12 lg:py-24">
            <div className="w-full max-w-md">
              <SignupForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
