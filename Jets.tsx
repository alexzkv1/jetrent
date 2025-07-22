import JetCard from "../components/JetCard";

export default function Jets() {
    return(
        <div className="bg-[#1f2937]/90 gap-3 grid lg:mx-50 rounded-2xl shadow-2xl p-10 border-3">
        <div className="flex flex-col  justify-start mb-5 bg-gray-900 rounded-2xl border-2 p-6">
            <h1 className="text-4xl font-semibold text-white">
            Meie Jetid
            </h1>
            <hr className="border-b-1 my-4" />
            <p className="text-lg w-full">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum, mi at bibendum scelerisque, est ligula pellentesque turpis, nec placerat nunc dui non dui.</p>
        </div>
        <JetCard image={'./GTI.jpg'} title={'Seadoo GTI-130'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nisi in libero dictum pharetra. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent facilisis egestas leo non eleifend. Suspendisse mollis lectus a lorem.'} />
        <JetCard image={'./Yamaha.jpg'} title={'Yamaha'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nisi in libero dictum pharetra. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent facilisis egestas leo non eleifend. Suspendisse mollis lectus a lorem.'} />
        <JetCard image={'./Spark.jpg'} title={'Seadoo Spark Trixx'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nisi in libero dictum pharetra. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent facilisis egestas leo non eleifend. Suspendisse mollis lectus a lorem.'} />
        </div>
    )
};