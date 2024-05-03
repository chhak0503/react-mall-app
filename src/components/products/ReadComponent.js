import { useEffect, useState } from "react";
import { getOne } from "../../api/productsApi";
import { API_SERVER_HOST } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import FetchingModal from "../common/FetchingModal";

const initState = {
  pno: 0,
  pname: "",
  pdesc: "",
  price: 0,
  uploadFileNames: [],
};

const host = API_SERVER_HOST;

const ReadComponent = ({ pno }) => {
  const [product, setProduct] = useState(initState);

  //화면 이동용 함수
  const { moveToList, moveToModify } = useCustomMove();

  //fetching
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    getOne(pno).then((data) => {
      setProduct(data);
      setFetching(false);
    });
  }, [pno]);

  return (
    <div className="p-4 m-2 mt-10 border-2 border-sky-200">
      {fetching ? <FetchingModal /> : <></>}

      <div className="flex justify-center mt-10">
        <div className="relative flex flex-wrap items-stretch w-full mb-4">
          <div className="w-1/5 p-6 font-bold text-right">PNO</div>
          <div className="w-4/5 p-6 border border-solid rounded-r shadow-md">
            {product.pno}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative flex flex-wrap items-stretch w-full mb-4">
          <div className="w-1/5 p-6 font-bold text-right">PNAME</div>
          <div className="w-4/5 p-6 border border-solid rounded-r shadow-md">
            {product.pname}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative flex flex-wrap items-stretch w-full mb-4">
          <div className="w-1/5 p-6 font-bold text-right">PRICE</div>
          <div className="w-4/5 p-6 border border-solid rounded-r shadow-md">
            {product.price}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative flex flex-wrap items-stretch w-full mb-4">
          <div className="w-1/5 p-6 font-bold text-right">PDESC</div>
          <div className="w-4/5 p-6 border border-solid rounded-r shadow-md">
            {product.pdesc}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full m-auto">
        {product.uploadFileNames.map((imgFile, i) => (
          <img
            alt="product"
            key={i}
            className="w-1/2 p-4"
            src={`${host}/api/products/view/${imgFile}`}
          />
        ))}
      </div>

      <div className="flex justify-end p-4">
        <button
          type="button"
          className="inline-block w-32 p-4 m-2 text-xl text-white bg-red-500 rounded"
          onClick={() => moveToModify(pno)}
        >
          Modify
        </button>
        <button
          type="button"
          className="w-32 p-4 m-2 text-xl text-white bg-blue-500 rounded"
          onClick={moveToList}
        >
          List
        </button>
      </div>
    </div>
  );
};

export default ReadComponent;
