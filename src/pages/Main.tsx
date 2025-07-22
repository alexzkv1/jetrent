import Hero from '../components/Hero';
import Card from '../components/Card'

export default function Main() {
    return(
        <>
        <div className='flex items-center justify-center min-h-screen'>
        <div className="w-full flex flex-col items-center">
          <Hero />
          <div className="w-full max-w-400 px-10 bg-[#1f2937]/95 rounded-2xl border-3 py-5 mt-20">
            <h1 className="text-4xl font-semibold text-white text-center bg-gray-900/90 border-2 rounded-2xl shadow-lg max-w-7xl mx-auto px-6 py-4 mb-10">
            Meie Jetid
            </h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-5 px-4 mx-auto">
            <Card title='Sea-Doo Gti-130'  buttonText='Broneeri' imageUrl='./images/GTI.jpg'/>
            <Card title='Yamaha GP1800R SVHO' buttonText='Broneeri' imageUrl='./images/Yamaha.jpg'/>
            <Card title='Sea-Doo Spark Trixx' buttonText='Broneeri' imageUrl='./images/Spark.jpg'/>
            </div>
          </div>
        </div>
      </div>
     
     </>
    )
}