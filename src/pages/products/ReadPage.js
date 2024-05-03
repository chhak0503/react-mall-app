import { useParams } from "react-router-dom";
import ReadComponent from "../../components/products/ReadComponent";

const ReadPage = () => {
  const { pno } = useParams();

  return (
    <div className="w-full p-4 bg-white">
      <div className="text-3xl font-extrabold">Products Read Page</div>

      <ReadComponent pno={pno}></ReadComponent>
    </div>
  );
};

export default ReadPage;
