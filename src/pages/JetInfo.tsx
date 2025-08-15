import JetCard from "../components/JetCard";

export default function JetInfo() {
    return(
        <div className="bg-[#1f2937]/90 gap-3 grid mx-auto rounded-2xl shadow-2xl p-10 border-3">
        <JetCard image={'./GTI.jpg'} title={'Seadoo GTI-130'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nisi in libero dictum pharetra. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent facilisis egestas leo non eleifend. Suspendisse mollis lectus a lorem.'} />
        <JetCard image={'./Yamaha.jpg'} title={'Yamaha'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nisi in libero dictum pharetra. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent facilisis egestas leo non eleifend. Suspendisse mollis lectus a lorem.'} />
        <JetCard image={'./Spark.jpg'} title={'Seadoo Spark Trixx'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nisi in libero dictum pharetra. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent facilisis egestas leo non eleifend. Suspendisse mollis lectus a lorem.'} />
        </div>
    )
};