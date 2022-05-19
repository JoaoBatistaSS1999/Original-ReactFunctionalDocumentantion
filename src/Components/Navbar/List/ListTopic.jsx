import React, { useState } from "react";
import SubtopicList from "./SubtopicList";
import styles from "./ListTopic.module.css";

function ListTopic({ title }) {
  const [showSublist, setShowSublist] = useState(false);

  const showSublistHandler = () => {
    setShowSublist((prevState) => !prevState);
  };

  return (
    <div className={styles.title}>
      <h4 className={styles.topicTitle} onClick={showSublistHandler}>
        {title} title
      </h4>
      {showSublist && <SubtopicList />}
    </div>
  );
}

export default ListTopic;
