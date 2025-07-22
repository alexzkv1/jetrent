export default function Gallery() {
    const images = [...Array(9)].map((_, index) => ({
        src: `https://picsum.photos/600/400?random=${index}`,
        title: `Image ${index + 1}`,
        desc: `Description for image ${index + 1}.`,
    }));

    return (
        <div className="bg-gray-900/90 p-7 border-3 rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-350 mx-auto">
                {images.map((img, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <img
                            src={img.src}
                            alt={img.title}
                            className="rounded-xl w-full h-70 object-cover border-3 border-gray-300 shadow-2xl"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
