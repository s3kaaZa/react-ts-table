import React, { useEffect } from "react";
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable";
import "./App.css";
import { data } from "./mocks/mocks";

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'React + TS + full table';
  })
    return <FilterableProductTable products={data} />;
  };

export default App;
