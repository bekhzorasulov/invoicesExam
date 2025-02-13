function FormInput({ name, type, placeholder }) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{name}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
      />
    </label>
  );
}

export default FormInput;
