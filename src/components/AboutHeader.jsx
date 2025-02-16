import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneData } from "../request/dataRequest";
import DeleteAlertModal from "./DeleteAlertModal";
import StatusStyle from "../components/StatusStyle";
import EditDrawer from "./EditDrawer";

function AboutHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getOneData(id)
      .then((res) => {
        setData(res);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <p className="m-auto flex items-center gap-2">
        Loading<span className="loading loading-dots loading-md"></span>
      </p>
    );

  const handleMarkAsPaid = async () => {
    try {
      const response = await fetch(`http://localhost:3000/data/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "paid" }),
      });

      if (!response.ok) {
        throw new Error("Error marking invoice as paid");
      }

      const updatedData = await response.json();
      setData(updatedData);
    } catch (error) {
      console.error("Error marking as paid:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/data/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Xatolik yuz berdi!");
      }

      window.location.href = "/";
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  return (
    <div className="align-elements flex items-center justify-between font-spartan rounded-lg shadow-md">
      <div className="flex items-center gap-4">
        <h3 className=" font-normal text-secondary text-xs">Status</h3>
        <span className={`px-3 py-1 rounded-sm text-xs font-bold`}>
          <StatusStyle status={data?.status} />
        </span>
      </div>
      <div className="flex items-center gap-6">
        <div>
          <EditDrawer />
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn bg-accent-light text-white rounded-3xl font-bold text-xs hover:bg-accent"
        >
          Delete
        </button>
        {data?.status === "paid" ? (
          ""
        ) : (
          <button
            onClick={handleMarkAsPaid}
            className="btn bg-primary-light text-white rounded-3xl font-bold text-xs hover:bg-primary"
          >
            Mark as Paid
          </button>
        )}
      </div>
      <DeleteAlertModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          setIsModalOpen(false);
          handleDelete();
        }}
        invoiceId={data?.id}
      />
    </div>
  );
}

export default AboutHeader;
