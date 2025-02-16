export async function getAllData() {
  const req = await fetch("http://localhost:3000/data");

  if (req.status === 200) {
    return await req.json();
  } else {
    throw new Error("Something went wrong");
  }
}

export async function getOneData(id) {
  const req = await fetch(`http://localhost:3000/data/${id}`);

  if (req.status === 200) {
    return await req.json();
  } else {
    throw new Error("Something went wrong");
  }
}

// export async function getFilter() {
//   const req = await fetch(
//     `http://localhost:3000/data${
//       queryGenerator() !== "" ? `?status=${queryGenerator()}` : ""
//     }`
//   );

//   if (req.status === 200) {
//     return await req.json();
//   } else {
//     throw new Error("Something went wrong");
//   }
// }
// const baseURL = "https://json-api.uz/api/project/Invoice/data";
