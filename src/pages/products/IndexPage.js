import React, { useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
  const navigate = useNavigate();

  const handleClickList = useCallback(() => {
    navigate({ pathname: "list" });
  });

  const handleClickAdd = useCallback(() => {
    navigate({ pathname: "add" });
  });

  return (
    <BasicLayout>
      <div className="-mt-10 font-extrabold text-black">Products Menus</div>

      <div className="flex w-full p-2 m-2 ">
        <div
          className="w-20 p-2 m-1 text-xl font-extrabold text-center underline"
          onClick={handleClickList}
        >
          LIST
        </div>

        <div
          className="w-20 p-2 m-1 text-xl font-extrabold text-center underline"
          onClick={handleClickAdd}
        >
          ADD
        </div>
      </div>
      <div className="flex flex-wrap w-full ">
        <Outlet />
      </div>
    </BasicLayout>
  );
};

export default IndexPage;
