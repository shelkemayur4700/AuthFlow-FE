import { useState } from "react";
import {
  UserIcon,
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

// export default function SignupForm({ onSubmit, isLoading }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ name, email, password });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       {/* Name */}
//       <div className="space-y-2">
//         <label className="text-sm font-medium text-gray-700">Full Name</label>
//         <div className="relative">
//           <UserIcon className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
//           <Input
//             type="text"
//             placeholder="Enter your full name"
//             className="border-gray-300 bg-white pl-10"
//             disabled={isLoading}
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Email */}
//       <div className="space-y-2">
//         <label className="text-sm font-medium text-gray-700">
//           Email Address
//         </label>
//         <div className="relative">
//           <MailIcon className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
//           <Input
//             type="email"
//             placeholder="Enter your email"
//             autoComplete="email"
//             className="border-gray-300 bg-white pl-10"
//             disabled={isLoading}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Password */}
//       <div className="space-y-2">
//         <label className="text-sm font-medium text-gray-700">Password</label>
//         <div className="relative">
//           <LockIcon className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
//           <Input
//             type={showPassword ? "text" : "password"}
//             placeholder="Enter your password"
//             className="border-gray-300 bg-white pr-10 pl-10"
//             disabled={isLoading}
//             autoComplete="new-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute top-3 right-3 h-4 w-4 text-gray-400 hover:text-gray-600"
//             disabled={isLoading}
//           >
//             {showPassword ? <EyeOffIcon /> : <EyeIcon />}
//           </button>
//         </div>
//       </div>

//       {/* Submit Button */}
//       <Button
//         type="submit"
//         disabled={isLoading}
//         className="w-full bg-gray-900 text-white hover:bg-gray-800"
//       >
//         {isLoading ? "Signing up..." : "Sign up"}
//       </Button>
//       {/* Link to Login */}
//       <p className="mt-2 text-center text-sm text-gray-600">
//         Already have an account?{" "}
//         <Link to="/login" className="text-gray-600 hover:underline">
//           Log in
//         </Link>
//       </p>
//     </form>
//   );
// }

export default function SignupForm({ onSubmit, isLoading }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Full Name</label>
        <div className="relative">
          <UserIcon className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Enter your full name"
            className="border-gray-300 bg-white pl-10"
            disabled={isLoading}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Email Address
        </label>
        <div className="relative">
          <MailIcon className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
          <Input
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            className="border-gray-300 bg-white pl-10"
            disabled={isLoading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      {/* Password */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Password</label>
        <div className="relative">
          <LockIcon className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="border-gray-300 bg-white pr-10 pl-10"
            disabled={isLoading}
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-3 right-3 h-4 w-4 text-gray-400 hover:text-gray-600"
            disabled={isLoading}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gray-900 text-white hover:bg-gray-800"
      >
        {isLoading ? "Signing up..." : "Sign up"}
      </Button>

      {/* Link to Login */}
      <p className="mt-2 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-gray-600 hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
}
