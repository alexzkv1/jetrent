import { motion } from "motion/react";

export default function Footer() {
  return (
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="footer w-full p-4 border-t-3 bg-blue-700 flex justify-center">
    <p className="text-md">JetRent © {new Date().getFullYear()} - All right reserved</p>
  </motion.div>
  );
}