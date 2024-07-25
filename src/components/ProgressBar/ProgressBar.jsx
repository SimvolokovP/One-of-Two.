import { motion } from "framer-motion";

import './ProgressBar.css';

export default function ProgressBar({ progress = 0 }) {
  return (
    <div className="progress">
        <div>Загрузка..</div>
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: progress + "%" }}
      ></motion.div>
    </div>
  );
}
