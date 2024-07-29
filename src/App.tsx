import React from "react";
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable";
import "./App.css";
import { data } from "./mocks/mocks";

const App: React.FC = () => {
    return <FilterableProductTable products={data} />;
  };

export default App;
