import CalendarInput from '../components/CalendarInput';
import { useState } from 'react';

export default function Form() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    if (date && endDate && date > endDate) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    if (!startDate || (date && date >= startDate)) {
      setEndDate(date);
    }
  };

    return(
        <div>
            <form className="bg-gray-100 rounded-2xl shadow-lg p-8 border-3 border-black flex flex-col gap-5 max-w-300 mx-auto mt-10 text-black">
                <label className="flex flex-col gap-1">
                    <span className="font-semibold">Name</span>
                    <input
                        type="text"
                        name="name"
                        className="border border-gray-300 rounded px-3 py-2 text-black"
                        placeholder="Enter your name"
                    />
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <label className="flex flex-col gap-1">
                        <span className="font-semibold">Email</span>
                        <input
                            type="email"
                            name="email"
                            className="border border-gray-300 rounded px-3 py-2 text-black"
                            placeholder="Enter your email"
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span className="font-semibold">Phone</span>
                        <input
                            type="tel"
                            name="phone"
                            className="border border-gray-300 rounded px-3 py-2 text-black"
                            placeholder="Enter your phone number"
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span className="font-semibold">Teenus</span>
                        <select
                            name="teenus"
                            className="border border-gray-300 rounded px-3 py-2 text-black"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select a service
                            </option>
                            <option value="consulting">30 min</option>
                            <option value="development">1 tund</option>
                            <option value="design">2 tund</option>
                            <option value="design">1 paev</option>
                        </select>
                    </label>
                    <label className="flex flex-col gap-1">
                        <span className="font-semibold">Jeti mudel</span>
                        <input
                            type="checkbox"
                            name="jetiMudel"
                            className="w-5 h-5 accent-blue-600 text-black"
                        />
                        <span className="ml-2">Võta ühendus</span>
                    </label>
                    <label className="flex flex-col gap-1">
                        <span className="font-semibold">Algus</span>
                        <CalendarInput
                        selectedDate={startDate}
                        onChange={handleStartDateChange}
                        minDate={new Date()}
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span className="font-semibold">Lõpp</span>
                        <CalendarInput
                        selectedDate={endDate}
                        onChange={handleEndDateChange}
                        minDate={startDate || new Date()}
                        disabled={!startDate}
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span className="font-semibold">Alustame</span>
                        <select
                            name="alustame"
                            className="border border-gray-300 rounded px-3 py-2 text-black"
                            defaultValue=""
                        >
                            <option value="" disabled>
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
                    <span className="font-semibold">Teade</span>
                    <textarea
                        name="message"
                        className="border border-gray-300 rounded px-3 py-2 h-32 text-black"
                        placeholder="Enter your message"
                    ></textarea>
                </label>
                <button
                    type="submit"
                    className="btn bg-blue-600 text-xl rounded px-4 py-2 font-bold hover:bg-blue-700 transition"
                >
                    Brooneri
                </button>
            </form>
        </div>
    )
}