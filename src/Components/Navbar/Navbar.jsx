import React from "react";
import styles from "./Navbar.module.css";
import ListTopic from "./List/ListTopic";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <header className={styles.top}>
        <h2>React</h2>
      </header>
      <section className={styles.topicList}>
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic /> <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic /> <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
        <ListTopic />
      </section>
    </nav>
  );
}

export default Navbar;
