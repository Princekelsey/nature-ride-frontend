import React, { useState } from "react";
import "./App.scss";

import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Modal from "./components/modal/Modal";

function App() {
  const [isModalOpen, setModal] = useState(false);

  return (
    <div className="App">
      <Nav />
      <HomePage setModal={setModal} />
      <Footer />
      {isModalOpen && <Modal setModal={setModal} />}
    </div>
  );
}

export default App;
