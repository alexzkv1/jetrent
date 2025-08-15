import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import JetCard from "../components/JetCard";

const jets = [
  {
    id: "gti",
    image: "/GTI.jpg",
    title: "Sea-Doo Gti-130",
    description: `Sea-Doo GTI 2023 on jettide turul populaarne valik, mis on tuntud oma lihtsa kasutamise, mugavuse ja praktilisuse poolest.
  Kui sa eelistad pigem rahulikku ja pingevaba sõidustiil, sinu jaoks pole juhitavuse teravus nii oluline kui mugavus ja stabiilsus, siis GTI 130 on just sulle. 
  Meie uhiuus Sea-Doo Gti 130 on kiiruse, sõidu ja stabiilsuse täiuslik tasakaal. 
  See mahutab täiesti mugavalt pardale kuni 3 inimest ja sobib ideaalselt kruiisimiseks perega, kallimaga või sõbraga. 
  Taga on suur platvorm, mis tagab suurema stabiilsuse ja mugavuse mõnusal soojal päikesepaistelisel suvepäeval. 
  Platvormi peal saad rahulikkult istuda, päevitada või kasutada vette hüppamiseks. Ja neid, kes soovivad siiski veidi kiirust tunda, võib Gti 130 üllatada hea kiirendusega sportrežiimis, olenemata ilmast.`,
  },
  {
    id: "yamaha",
    image: "/Yamaha.jpg",
    title: "Yamaha GP1800R SVHO",
    description: `Kui ihkad peadpööritavat kiirust, on GP1800R sinu valik. See on esmaklassiline sportlik jett tõelistele entusiastidele:
• Mõeldud kahele inimesele, kuid nagu solorakett, avaneb see uutmoodi, arendades muljetavaldavat kiirust veelgi kiiremini
• SVHO tehnoloogia: ülivõimas ülelaadimine tagab kohese kiirenduse ja maksimaalse võimsuse.
• Täpne kontroll + stabiilsus: kõigis režiimides hoiab see trajektoori ja siseneb enesekindlalt kurvidesse.
• Dünaamiline disain: agressiivne siluett, erksad graafilised aktsendid ja eksklusiivsed värvid rõhutavad ainulaadsust.
P.S. Pakume ainult kogemustega sõitjatele, soovitav on väikekaeva või jeti juhtimise luba`,
  },
  {
    id: "spark",
    image: "/Spark.jpg",
    title: "Sea-Doo Spark Trixx",
    description: `ui ihkad peadpööritavat kiirust, on GP1800R sinu valik. See on esmaklassiline sportlik jett tõelistele entusiastidele:
• Mõeldud kahele inimesele, kuid nagu solorakett, avaneb see uutmoodi, arendades muljetavaldavat kiirust veelgi kiiremini
• SVHO tehnoloogia: ülivõimas ülelaadimine tagab kohese kiirenduse ja maksimaalse võimsuse.
• Täpne kontroll + stabiilsus: kõigis režiimides hoiab see trajektoori ja siseneb enesekindlalt kurvidesse.
• Dünaamiline disain: agressiivne siluett, erksad graafilised aktsendid ja eksklusiivs`,
  },
];

export default function Jets() {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentIndex = jets.findIndex(j => j.id === id);
  const jet = jets[currentIndex];

  if (!jet) return <div className="text-white text-center mt-20">Jetski not found.</div>;

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + jets.length) % jets.length;
    navigate(`/jetid/${jets[prevIndex].id}`);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % jets.length;
    navigate(`/jetid/${jets[nextIndex].id}`);
  };

  return (
    <div className="mt-5 relative flex items-center justify-center">
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl p-2 rounded-full hover:bg-gray-800/85 transition-colors"
        aria-label="Previous Jet"
      >
        &#8592;
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={jet.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <JetCard image={jet.image} title={jet.title} description={jet.description} />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl p-2 rounded-full hover:bg-gray-800/85 transition-colors"
        aria-label="Next Jet"
      >
        &#8594;
      </button>
    </div>
  );
}
