const AdminLogin = () => {
  return (
    <div className="flex h-screen  items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-[34rem] h-96">
        <h2 className="text-3xl font-bold mb-8">Admin Login</h2>
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block text-lg font-medium text-gray-700"
            
          >
            Email
          </label>
          <input
            type="text"
            id="username"
            className="mt-2 p-3 border border-gray-300 rounded w-full"
            placeholder="Enter your email..."
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-lg font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-2 p-3 border border-gray-300 rounded w-full"
            placeholder="Enter your password..."
            required
          />
        </div>

        <button
          type="submit"
          className="inline-flex  w-[120px] h-12 my-4 gap-1 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#4CBB17,45%,#F6F5F2,48%,#4CBB17)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
