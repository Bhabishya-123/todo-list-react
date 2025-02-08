import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Form from "./components/Form";
import List from "./components/List";
import Filter from "./components/Filter";
import "./styles/App.scss";
import "./styles/responsive.scss";

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <h1>TODO List</h1>
        <Form />
        <Filter />
        <List />
      </div>
    </DndProvider>
  );
};

export default App;
