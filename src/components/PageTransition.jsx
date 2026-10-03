import { motion } from "framer-motion";

const PageTransition = ({ children }) => (
  <motion.div
    className="page-transition"
    initial={{ opacity: 0, y: 22 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -14 }}
    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
