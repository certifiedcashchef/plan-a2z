import React from "react";
import styles from "./ZeroTasksPopup.module.scss";
import party from "../../assets/party.png";
import { motion } from "framer-motion";

const ZeroTasksPopup = ({ setZeroTasksPopup }) => {
  return (
    <div>
      <div className={styles.backdrop}>
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.overlay}
        >
          <img src={party} alt="" className={styles.party} />
          <h1 className={styles.msg}>
            <span className={styles.alert}>CONGRATULATIONS:</span> UR Leavin' Us
            Without Any Remaining Tasks
          </h1>
          <div>
            <button
              onClick={() => setZeroTasksPopup(false)}
              className={styles.popupCloseBtn}
            >
              SHOUT-OUT TO YAAA!
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ZeroTasksPopup;
