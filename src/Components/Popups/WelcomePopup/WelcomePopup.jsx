import React from "react";
import styles from "./WelcomePopup.module.scss";
import wavingHand from "../../assets/wavinghand.png";
import crown from "../../assets/crown.png";
import { motion } from "framer-motion";

const WelcomePopup = ({ popup, setPopup }) => {
  return (
    popup && (
      <div>
        <div className={styles.backdrop}>
          <motion.div
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.overlay}
          >
            <img src={wavingHand} alt="" className={styles.wavingHand} />
            <h1 className={styles.msg}>
              Yo!, I hope ur doin' great this is PLAN A2Z
              <br />
              Comes with a modern user friendly interface
              <br />
              and all desired features now let's hack life
              <br />
              and make some money, BROSKI!
              <img src={crown} alt="" className={styles.crown} />
            </h1>
            <button
              className={styles.popupCloseBtn}
              onClick={() => setPopup(false)}
            >
              LESGOOOOO!
            </button>
          </motion.div>
        </div>
      </div>
    )
  );
};

export default WelcomePopup;
