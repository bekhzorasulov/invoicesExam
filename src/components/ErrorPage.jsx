function ErrorPage() {
  return (
    <div className="align-elements flex items-center flex-col  gap-16">
      <img src="./error.png" alt="" />
      <div className="flex flex-col items-center ">
        <h2>There is nothing here</h2>
        <p className="text-center w-56">
          {" "}
          Create an invoice by clicking the{" "}
          <a className="bg-slate-600" href="">
            New Invoice
          </a>{" "}
          button and get started
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
