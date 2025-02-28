import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../context/loginContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { dispatchLogin } = useAuth();
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (response.ok) {
        dispatchLogin({
          type: "TOKEN",
          payload: {
            value: true,
          },
        });
        dispatchLogin({
          type: "USERID",
          payload: {
            id: result.id,
          },
        });
        dispatchLogin({
          type: "ROLE",
          payload: {
            role: result.role,
          },
        });
        localStorage.setItem("accessToken", JSON.stringify({ ...result }));

        alert("Login successful!");
        navigate("/");
      } else {
        alert(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  const handleUsername = (e) => {
    const username = e.target.value;
    dispatchLogin({
      type: "USERNAME",
      payload: {
        username,
      },
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[100vh] bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-lg rounded-2xl p-6 w-[22vw] flex flex-col gap-4 border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Login
          </h2>

          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Username</label>
            <input
              name="username"
              type="text"
              placeholder="Enter your username..."
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
              onChange={handleUsername}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Password</label>
            <input
              name="password"
              type="password"
              placeholder="********"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Login
          </button>

          <p className="text-sm text-center text-gray-500">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              <Link to="/signup">Sign Up</Link>
            </a>
          </p>
        </form>
      </div>
    </>
  );
};
