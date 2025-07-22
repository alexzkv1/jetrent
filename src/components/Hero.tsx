export default function Hero() {
    return (
    <div className="max-w-7xl hero p-6 flex flex-col md:flex-row rounded-2xl mx-auto shadow-2xl bg-blue-800 border-3 border-gray-200">
        
        <img
            src="./images/wave.jpg"
            alt="Jetski"
            className=" w-250 h-100 object-cover rounded-lg shadow-lg mb-6 md:mb-0 border-2"
        />
        <div className="w-full md:ml-7 flex flex-col justify-center text-center">
            <h1 className="text-4xl font-bold mb-6 text-white">
                Tere tulemast Jet Rentingu juurde!
            </h1>
            <p className="text-lg text-gray-200">
                Pakume kvaliteetset jetirendi teenust Eestis. Naudi kiiret ja turvalist sõitu meie kaasaegsete jetidega. Broneeri juba täna ja avasta Eesti veed uuel moel!
            </p>
            <hr className="w-full border-t-2 border-gray-300 my-2" />
        </div>
    </div>
    );
};