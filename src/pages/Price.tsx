import PriceCard from "../components/PriceCard";

export default function Price() {
  return (
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full bg-[#1f2937]/95 rounded-xl border-2 py-5 mt-10 md:mt-20 mx-auto">
            <div className="bg-gray-900 border-2 rounded-2xl max-w-4xl mx-5 lg:mx-auto px-5 sm:px-6 py-4 mb-8 shadow-2xl">
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center'>Hinnad</h1>
              <hr className="border-b  my-4" />
              <p className="text-base sm:text-lg text-gray-300 text-center max-w-3xl mx-auto py-4 sm:py-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum, mi at bibendum scelerisque, est ligula pellentesque turpis, nec placerat nunc dui non dui. 
                Donec iaculis finibus erat vitae mattis. Nunc eget nibh gravida libero sodales tempus. Integer tincidunt elit.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4">
              <PriceCard 
                time='30 min' 
                price="$50" 
                features={["Life jackets included", "Full tank of fuel", "Safety briefing", "Up to 2 persons"]} 
              />
              <PriceCard 
                time='1 hour' 
                price="$100" 
                features={["Life jackets included", "Full tank of fuel", "Safety briefing", "Up to 2 persons"]} 
              />
              <PriceCard 
                time='1 day' 
                price="$150" 
                features={["Life jackets included", "Full tank of fuel", "Safety briefing", "Up to 2 persons"]} 
              />
            </div>
          </div>
        </div>
      </div>
  );
}