import { useParams } from "react-router-dom";
import StatusStyle from "../components/StatusStyle";
import { useFetch } from "../hooks/useFetch";

function AboutHeader() {
  const { data } = useFetch();
  const { id } = useParams();

  if (!data)
    return (
      <p className="m-auto flex items-center gap-2">
        Loading<span className="loading loading-dots loading-md"></span>
      </p>
    );

  const product = data.find((item) => String(item.id) === id);

  return (
    <div className="align-elements flex items-center justify-between font-spartan rounded-lg shadow-md">
      <div className="flex items-center gap-4">
        <h3 className=" font-normal text-secondary text-xs">Status</h3>
        <span className={`px-3 py-1 rounded-sm text-xs font-bold`}>
          <StatusStyle status={product.status} />
        </span>
      </div>
      <div className="flex items-center gap-6">
        <button className="btn rounded-3xl font-spartan font-bold text-xs text-secodary-dark ">
          Edit
        </button>
        <button className="btn bg-accent-light text-white rounded-3xl font-bold text-xs hover:bg-accent">
          Delete
        </button>
        <button className="btn bg-primary-light text-white rounded-3xl font-bold text-xs hover:bg-primary">
          Mark as Paid
        </button>
      </div>
    </div>
  );
}

export default AboutHeader;
