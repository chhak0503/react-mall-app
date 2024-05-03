import { useParams } from "react-router-dom";
import ModifyComponent from "../../components/products/ModifyComponent";

const ModifyPage = () => {
  const { pno } = useParams();

  return (
    <div className="w-full p-4 bg-white">
      <div className="text-3xl font-extrabold">Products Modify Page</div>

      <ModifyComponent pno={pno} />
    </div>
  );
};

export default ModifyPage;
