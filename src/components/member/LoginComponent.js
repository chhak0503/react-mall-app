import { useState } from "react";
import useCustomLogin from "../../hooks/useCustomLogin";

const initState = {
  email: "",
  pw: "",
};

const LoginComponent = () => {
  const [loginParam, setLoginParam] = useState({ ...initState });

  const { doLogin, moveToPath } = useCustomLogin();

  const handleChange = (e) => {
    loginParam[e.target.name] = e.target.value;
    setLoginParam({ ...loginParam });
  };

  const handleClickLogin = (e) => {
    doLogin(loginParam) // loginSlice의 비동기 호출
      .then((data) => {
        console.log(data);

        if (data.error) {
          alert("이메일과 패스워드를 다시 확인하세요");
        } else {
          alert("로그인 성공");
          moveToPath("/");
        }
      });
  };

  return (
    <div className="p-4 m-2 mt-10 border-2 border-sky-200">
      <div className="flex justify-center">
        <div className="p-4 m-4 text-4xl font-extrabold text-blue-500">
          Login Component
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative flex flex-wrap items-stretch w-full mb-4">
          <div className="w-full p-3 font-bold text-left">Email</div>
          <input
            className="w-full p-3 border border-solid rounded-r shadow-md border-neutral-500"
            name="email"
            type={"text"}
            value={loginParam.email}
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative flex flex-wrap items-stretch w-full mb-4">
          <div className="w-full p-3 font-bold text-left">Password</div>
          <input
            className="w-full p-3 border border-solid rounded-r shadow-md border-neutral-500"
            name="pw"
            type={"password"}
            value={loginParam.pw}
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative flex justify-center w-full mb-4">
          <div className="flex justify-center w-2/5 p-6 font-bold">
            <button
              className="p-4 text-xl text-white bg-blue-500 rounded w-36"
              onClick={handleClickLogin}
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
