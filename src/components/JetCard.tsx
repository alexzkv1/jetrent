import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

type CardProps = {
  image: string;
  title: string;
  description: string;
};

export default function JetCard({ image, title, description }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-900 flex flex-col lg:flex-row justify-between border-2 rounded-md shadow-md overflow-hidden lg:max-h-180"
    >
      <figure className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto flex items-center justify-center border-b lg:border-b-0 lg:border-r overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </figure>

      <div className="flex flex-col justify-center w-full lg:w-1/2 text-white text-left items-center px-6 sm:px-8 py-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight text-blue-400 drop-shadow-lg">
          {title}
        </h2>
        <hr className="border-b-2 border-blue-700 w-full mb-4" />
        <p className="text-base sm:text-lg mb-4 sm:px-6 lg:px-10 font-medium text-gray-200 text-center lg:text-left">
          {description}
        </p>
        <ul className="list-disc list-inside italic mb-6 space-y-2 text-base sm:text-lg text-blue-200">
          <li className="hover:text-blue-400 transition-colors">Feature 1</li>
          <li className="hover:text-blue-400 transition-colors">Feature 2</li>
          <li className="hover:text-blue-400 transition-colors">Feature 3</li>
        </ul>
        <div className="flex justify-center">
          <Link
            to="/broneeri"
            className="btn border rounded-lg px-6 py-3 bg-blue-700 hover:bg-blue-900 transition-colors duration-200 text-sm sm:text-base min-w-[150px] mt-2"
          >
            Brooneri
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
