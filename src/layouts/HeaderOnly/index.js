import Header from "../components/Header/Header";

function HeaderOnly({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="container"></div>
    </div>
  );
}

export default HeaderOnly;
