import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { motion } from "motion/react";

export default function Gallery() {
  const images = [...Array(9)].map((_, index) => 
    `https://picsum.photos/1200/800?random=${index}`
  );
  window.global = window;

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="p-6 bg-gray-900/80 rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <motion.div whileHover={{ scale: 1.02 }}
            key={idx}
            className="cursor-pointer overflow-hidden rounded-xl shadow-lg"
            onClick={() => { setIsOpen(true); setPhotoIndex(idx); }}
          >
            <img
              src={src}
              alt={`Scooter ${idx + 1}`}
              className="w-full h-60 object-cover transform hover:scale-105 transition duration-300"
            />
          </motion.div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
}
