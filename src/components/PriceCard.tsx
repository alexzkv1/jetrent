import { Link } from 'react-router-dom';

type CardProps = {
    time: string;
    price: string;
    features: string[];
};

export default function PriceCard({time, price, features}: CardProps) {
  return (
    <div className="flex w-full">
      <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-300 overflow-hidden mx-2 ">
        <div className="bg-gray-600 rounded-t-2xl p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl text-center font-semibold text-white">{time}</h1>
          <h2 className="text-lg sm:text-xl text-center text-gray-200 mt-1 sm:mt-2">Rent</h2>
        </div>
        <hr className="border-t border-gray-400" />
        <div className="my-6 sm:my-8">
          <p className="text-4xl sm:text-5xl font-bold text-center text-gray-800">{price}</p>
        </div>
        <div className="mb-4 sm:mb-6 px-3 sm:px-4">
          <ul className="bg-gray-100 space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 rounded-xl p-3 sm:p-4">
            {features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start border-b border-gray-300 pb-2 last:border-0 last:pb-0">
                <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 00-1.414-1.414l-7.586 7.586-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center w-full px-3 sm:px-4 pb-4 sm:pb-5">
          <Link 
            to="/broneeri" 
            className="w-full bg-blue-600 text-white py-2 px-4 text-center rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
          >
            Bronneri
          </Link>
        </div>
      </div>
    </div>
  );
}