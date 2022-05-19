import React from "react";
import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.container}>
      <Navbar />

      <Header />
    </div>
  );
}

export default App;
