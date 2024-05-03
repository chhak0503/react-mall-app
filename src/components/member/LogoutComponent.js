import useCustomLogin from "../../hooks/useCustomLogin";

const LogoutComponent = () => {
  const { doLogout, moveToPath } = useCustomLogin();

  const handleClickLogout = () => {
    doLogout();
    alert("로그아웃되었습니다.");
    moveToPath("/");
  };

  return (
    <div className="p-4 m-2 mt-10 border-2 border-red-200">
      <div className="flex justify-center">
        <div className="p-4 m-4 text-4xl font-extrabold text-red-500">
          Logout Component
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative flex justify-center w-full mb-4">
          <div className="flex justify-center w-2/5 p-6 font-bold">
            <button
              className="p-4 text-xl text-white bg-red-500 rounded w-36"
              onClick={handleClickLogout}
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutComponent;
