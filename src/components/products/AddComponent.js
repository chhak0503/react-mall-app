import { useRef, useState } from "react";

import { postAdd } from "../../api/productsApi";
import FetchingModal from "../common/FetchingModal";
import ResultModal from "../common/ResultModal";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  pname: "",
  pdesc: "",
  price: 0,
  files: [],
};

const AddComponent = () => {
  const [product, setProduct] = useState({ ...initState });
  const uploadRef = useRef();

  const [fetching, setFetching] = useState(false);
  const [result, setResult] = useState(null);

  const { moveToList } = useCustomMove(); //이동을 위한 함수

  const handleChangeProduct = (e) => {
    product[e.target.name] = e.target.value;
    setProduct({ ...product });
  };

  const handleClickAdd = (e) => {
    const files = uploadRef.current.files;

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    //other data
    formData.append("pname", product.pname);
    formData.append("pdesc", product.pdesc);
    formData.append("price", product.price);

    console.log(formData);

    setFetching(true);

    postAdd(formData).then((data) => {
      setTimeout(() => {
        setFetching(false);
        setResult(data.result);
      }, 2000);
    });
  };

  const closeModal = () => {
    //ResultModal 종료

    setResult(null);
    moveToList({ page: 1 }); //모달 창이 닫히면 이동
  };

  return (
    <div className="p-4 m-2 mt-10 border-2 border-sky-200">
      {fetching ? <FetchingModal /> : <></>}

      {result ? (
        <ResultModal
          title={"Product Add Result"}
          content={`${result}번 등록 완료`}
          callbackFn={closeModal}
        />
      ) : (
        <></>
      )}

      <div className="flex justify-center">
        <div className="relative flex flex-wrap items-stretch w-full mb-4">
          <div className="w-1/5 p-6 font-bold text-right">Product Name</div>
          <input
            className="w-4/5 p-6 border border-solid rounded-r shadow-md border-neutral-300"
            name="pname"
            type={"text"}
            value={product.pname}
            onChange={handleChangeProduct}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative flex flex-wrap items-stretch w-full mb-4">
          <div className="w-1/5 p-6 font-bold text-right">Desc</div>
          <textarea
            className="w-4/5 p-6 border border-solid rounded-r shadow-md resize-y border-neutral-300"
            name="pdesc"
            rows="4"
            onChange={handleChangeProduct}
            value={product.pdesc}
          >
            {product.pdesc}
          </textarea>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative flex flex-wrap items-stretch w-full mb-4">
          <div className="w-1/5 p-6 font-bold text-right">Price</div>
          <input
            className="w-4/5 p-6 border border-solid rounded-r shadow-md border-neutral-300"
            name="price"
            type={"number"}
            value={product.price}
            onChange={handleChangeProduct}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative flex flex-wrap items-stretch w-full mb-4">
          <div className="w-1/5 p-6 font-bold text-right">Files</div>
          <input
            ref={uploadRef}
            className="w-4/5 p-6 border border-solid rounded-r shadow-md border-neutral-300"
            type={"file"}
            multiple={true}
          ></input>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="relative flex flex-wrap items-stretch p-4 mb-4">
          <button
            type="button"
            className="p-4 text-xl text-white bg-blue-500 rounded w-36 "
            onClick={handleClickAdd}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddComponent;
