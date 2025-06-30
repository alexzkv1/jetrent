export default function Hero() {
    return (
    <div className="max-w-6xl hero p-6 flex rounded-lg  mx-auto  shadow-2xl bg-blue-800 border-3 border-gray-400">
        <img src="/image.jpg" alt="Hero" className="w-full h-96 object-cover rounded-lg shadow-lg mb-6" />
        <div className="w-full ml-7">
            <h1 className="text-4xl font-bold text-center mb-6">Welcome to Our Service</h1>
        <p className="text-lg text-center mb-6">
            Discover the best solutions tailored for your needs Join us and experience excellence
        </p>
        <hr className="w-full border-t-2 border-gray-300 my-4" />
        </div>
    </div>
    );
};