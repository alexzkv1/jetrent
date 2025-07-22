import { Link } from 'react-router-dom'

export default function JetCard({ image, title, description }) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center border-2 rounded-2xl lg:rounded-3xl bg-gray-900 p-4 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-6 text-white order-2 lg:order-1 mt-4 lg:mt-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
        <hr className="border-b border-gray-600 mt-1 sm:mt-2" />
        <p className="text-sm sm:text-base md:text-lg">{description}</p>
        <ul className="list-disc list-inside text-sm sm:text-base md:text-lg italic space-y-1 sm:space-y-2">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <Link to='/broneeri' className="btn mt-3 sm:mt-4 border border-gray-400 w-full rounded-lg px-3 py-2 sm:px-4 sm:py-2 bg-blue-700 hover:bg-blue-900 transition-colors duration-200 text-sm sm:text-base">
          Brooneri
        </Link>
      </div>
      
      <figure className="w-full lg:w-1/2 mt-0 lg:ml-6 xl:ml-8 order-1 lg:order-2">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded-xl aspect-[4/3] border border-gray-600 shadow-md"
        />
      </figure>
    </div>
  );
}