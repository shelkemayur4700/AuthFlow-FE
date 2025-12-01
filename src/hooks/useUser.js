import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { logout } from "@/redux/thunk/user.thunk"; // adjust import

const useUser = () => {
  const dispatch = useDispatch();
  const { user, token, loading, error } = useSelector((state) => state.user);

  const isAuthenticated = !!token;

  // const handleLogout = useCallback(() => {
  //   dispatch(logout());
  // }, [dispatch]);

  const getToken = useCallback(() => {
    if (token && isAuthenticated) return token;
    // handleLogout();
    return null;
  }, [token, isAuthenticated]);

  return {
    user,
    token,
    isAuthenticated,
    loading,
    error,
    // logout: handleLogout,
    getToken,
  };
};

export default useUser;
