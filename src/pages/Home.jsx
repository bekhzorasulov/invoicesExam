import Header from "../components/Header";
import ItemList from "../components/ItemList";

function Home() {
  return (
    <div className="align-elements my-auto h-screen">
      <Header />
      <div className="flex flex-col gap-4 mt-16 h-[400px] overflow-y-auto scrollbar-custom">
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
      </div>
    </div>
  );
}

export default Home;
