import CalendarInput from '../components/CalendarInput';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Form() {
    
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [showAlert, setShowAlert] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [jetModel, setJetModel] = useState<string[]>([]);
    const [startTime, setStartTime] = useState('');
    const [message, setMessage] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    


    const formatDate = (date: Date | null): string => {
    if (!date) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
    };



  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    if (date && endDate && date > endDate) {
      setEndDate(null);
    }
  };

  const handleJetModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setJetModel((prev) =>
        checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
};


  const clearStates = () => {
    setMessage('')
    setEmail('')
    setPhone('')
    setService('')
    setName('')
    setJetModel([])
    setStartDate(null)
    setEndDate(new Date())
    setStartTime('')
  }

  const inputCheck = () => {
    const checkboxes = document.getElementsByClassName('w-5 h-5 accent-blue-600 text-black');
    const checkCount = Array.from(checkboxes).filter(
      (checkbox) => (checkbox as HTMLInputElement).checked
    ).length;
    if (checkCount < 1) {
        setShowAlert(true);
        return
    }
    setShowAlert(false);
    return true
  }


const sendEmail = async () => {
    const data = {
        service_id: import.meta.env.VITE_SERVICE_ID,
        template_id: import.meta.env.VITE_TEMPLATE_ID,
        user_id: import.meta.env.VITE_PUBLIC_KEY,
        template_params: {
            from_name: name,
            from_email: email,
            phone: phone,
            service: service,
            start_date: formatDate(startDate),
            jets: jetModel.join(', '),
            time: startTime,
            message: message
        }
    };

    try {
        await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
        setShowSuccess(true);
        clearStates();
    } catch (err) {
        console.error(err.response?.data || err.message);
    }
};



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(inputCheck() === true){
        sendEmail()
        clearStates()
    }
  }

    return(
        <>
<AnimatePresence>
  {showAlert && (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        role="alert"
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center max-w-sm w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 stroke-current text-red-600" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-center text-lg font-semibold mb-4 text-black">
          Palun, valige vähemalt üks jetski
        </span>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="btn bg-blue-600 text-white rounded px-4 py-2 font-bold hover:bg-blue-700 transition"
          onClick={() => setShowAlert(false)}
        >
          OK
        </motion.button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

<AnimatePresence>
  {showSuccess && (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900/95"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        role="alert"
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center max-w-sm w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 stroke-current text-green-600" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-center text-lg font-semibold mb-4 text-black">
          Broneering on edukalt saadetud!
        </span>
        <div className='flex flex-col gap-2 mt-2'>
          <Link to="/" className="w-full">
            <motion.button
            className="btn w-full bg-blue-600 text-white rounded px-4 py-2 font-bold hover:bg-blue-700 transition"
            whileHover={{ scale: 1.1 }}>
                Esileht
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="btn bg-blue-600 text-white rounded px-4 py-2 font-bold hover:bg-blue-700 transition"
            onClick={() => { setShowSuccess(false); clearStates(); }}
          >
            Saada uus vorm
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

        <div>
            <motion.form initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gray-100 rounded-2xl shadow-lg p-8 border-3 border-black flex flex-col gap-5 max-w-300 mx-auto mt-10 text-black"
            onSubmit={(e) => {
            handleSubmit(e);
            }}>
                <label className="flex flex-col gap-1">
                    <span className="font-semibold">Name</span>
                    <input
                        type="text"
                        required
                        name="name"
                        className="border border-gray-300 rounded px-3 py-2 text-black"
                        placeholder="Nimi"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <label className="flex flex-col gap-1">
                        <span className="font-semibold">Email</span>
                        <input
                            type="email"
                            name="email"
                            required
                            className="border border-gray-300 rounded px-3 py-2 text-black"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span className="font-semibold">Phone</span>
                        <input
                            type="tel"
                            name="phone"
                            required
                            className="border border-gray-300 rounded px-3 py-2 text-black"
                            placeholder="Telefoninumber"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span className="font-semibold">Teenus</span>
                        <select
                            name="teenus"
                            className="border border-gray-300 rounded px-3 py-2 text-black"
                            defaultValue=""
                            required
                            onChange={(e) => setService(e.target.value)}
                            value={service}
                        >
                            <option value="" disabled selected hidden>Vali Kestus</option>
                            <option value="30 min">30 min</option>
                            <option value="1 tund">1 tund</option>
                            <option value="2 tund">2 tund</option>
                            <option value="1 päev">1 päev</option>
                        </select>
                    </label>
                    
                   <label className="flex flex-col gap-2">
    <span className="font-semibold">Jeti mudel</span>

    <label className="flex items-center">
        <input type="checkbox" name="jets" value="Jetcar" onChange={handleJetModelChange} checked={jetModel.includes("Jetcar")} className="w-5 h-5 accent-blue-600 text-black" />
        <span className="ml-2">Jetcar</span>
    </label>
    <label className="flex items-center">
        <input type="checkbox" name="jets" value="Seadoo Spark Trixx" onChange={handleJetModelChange} checked={jetModel.includes("Seadoo Spark Trixx")} className="w-5 h-5 accent-blue-600 text-black" />
        <span className="ml-2">Seadoo Spark Trixx</span>
    </label>
    <label className="flex items-center">
        <input type="checkbox" name="jets" value="Seadoo GTI-130" onChange={handleJetModelChange} checked={jetModel.includes("Seadoo GTI-130")} className="w-5 h-5 accent-blue-600 text-black" />
        <span className="ml-2">Seadoo GTI-130</span>
    </label>
    <label className="flex items-center">
        <input type="checkbox" name="jets" value="Yamaha GP1800RSVHO" onChange={handleJetModelChange} checked={jetModel.includes("Yamaha GP1800RSVHO")} className="w-5 h-5 accent-blue-600 text-black" />
        <span className="ml-2">Yamaha GP1800RSVHO</span>
    </label>
</label>


                    <label className="flex flex-col gap-1">
                        <span className="font-semibold">Küüpäev</span>
                        <CalendarInput
                        selectedDate={startDate}
                        onChange={handleStartDateChange}
                        minDate={new Date()}
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span className="font-semibold">Alustame</span>
                        <select
                            name="alustame"
                            className="border border-gray-300 rounded px-3 py-2 text-black"
                            defaultValue=""
                            required
                            onChange={(e) => setStartTime(e.target.value)}
                            value={startTime}
                        >
                            <option value="" disabled hidden>
                                Vali aeg
                            </option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                        </select>
                    </label>
                </div>
                <label className="flex flex-col gap-1">
                    <span className="font-semibold">Lisainfo</span>
                    <textarea
                        name="message"
                        className="border border-gray-300 rounded px-3 py-2 h-32 text-black"
                        placeholder="Lisainfo"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    ></textarea>
                </label>
                <button
                    type="submit"
                    className="btn bg-blue-600 text-xl rounded px-4 py-2 font-bold hover:bg-blue-700 transition"
                >
                    Brooneri
                </button>
            </motion.form>
        </div>
        </>
    )
}