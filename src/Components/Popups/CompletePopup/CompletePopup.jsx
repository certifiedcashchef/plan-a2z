import React from "react";
import styles from "./CompletePopup.module.scss";
import partyface from "../../assets/partyface.png";
import raisinghands from "../../assets/raisinghands.png";
import { motion } from "framer-motion";

const CompletePopup = ({ setCompletePopup }) => {
  return (
    <div>
      <div className={styles.backdrop}>
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.overlay}
        >
          <img src={partyface} alt="" className={styles.partyface} />
          <h1 className={styles.msg}>
            WOAH!, U Just Finished a Task Give Yourself a Prize and Let's get
            back to work!
            <img src={raisinghands} alt="" className={styles.raisingHands} />
          </h1>
          <div>
            <button
              onClick={() => setCompletePopup(false)}
              className={styles.popupCloseBtn}
            >
              YESSIR!
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompletePopup;
