import type React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-32 h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <p className="text-lg">
        Please check the URL or return to the home page.
      </p>
      <Link to="/" className="mt-4 text-blue-500 hover:underline text-lg">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
