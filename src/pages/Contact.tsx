import { motion } from "framer-motion";

export default function Contact() {
    return (
        <motion.div
            className="min-h-screen bg-gray-900/95 rounded-2xl border-2 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="w-full max-w-7xl mx-auto">
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 w-full">
                    <motion.section
                        className="w-full text-center bg-gray-800 border-2 rounded-xl p-4 sm:p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-100">Kontakt</h1>
                        <hr className="border-b border-gray-600 mt-2 mx-auto w-3/4" />
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-6 sm:mt-8 mx-auto max-w-2xl">
                            Võta meiega ühendust, et broneerida oma järgmine veesõiduk või saada lisainfot meie teenuste kohta.
                        </p>
                    </motion.section>
                    <motion.section
                        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 bg-gray-200 rounded-xl shadow-lg p-4 sm:p-6 border border-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="flex flex-col gap-3 justify-center">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Kontaktandmed</h2>
                            <p className="text-gray-800"><span className="font-semibold">Mobiil:</span> +372 5555 1234</p>
                            <p className="text-gray-800"><span className="font-semibold">E-post:</span> info@waterrental.com</p>
                            <p className="text-gray-800"><span className="font-semibold">Lahtiolekuajad:</span> E-P, 9:00 - 20:00</p>
                            <p className="text-gray-800"><span className="font-semibold">Aadress:</span> Lakeview tee 123, Tallinn</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Asukoht</h2>
                            <div className="rounded-lg overflow-hidden border border-gray-400 shadow-md w-full">
                                <iframe
                                    title="Ettevõtte asukoht"
                                    src="https://www.google.com/maps/embed?pb=!1m18..."
                                    width="100%"
                                    height="260"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="min-h-[260px]"
                                ></iframe>
                            </div>
                        </div>
                    </motion.section>
                    <motion.section
                        className="w-full bg-gray-200 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Saada meile sõnum</h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name" className="font-semibold text-gray-800">Nimi</label>
                                <input id="name" name="name" type="text" required className="p-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 w-full" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="font-semibold text-gray-800">E-post</label>
                                <input id="email" name="email" type="email" required className="p-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 w-full" />
                            </div>
                            <div className="flex flex-col gap-1 md:col-span-2">
                                <label htmlFor="message" className="font-semibold text-gray-800">Sõnum</label>
                                <textarea id="message" name="message" rows={6} required className="p-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 w-full" />
                            </div>
                            <div className="md:col-span-2 flex justify-end">
                                <motion.button
                                    type="submit"
                                    className="px-6 py-2 sm:px-8 sm:py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold shadow hover:scale-105 transition-transform w-full sm:w-auto"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Saada
                                </motion.button>
                            </div>
                        </form>
                    </motion.section>
                    <motion.section
                        className="w-full text-center text-gray-900 text-sm sm:text-base"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <div className="inline-block bg-blue-100 rounded-xl px-4 py-3 sm:px-6 sm:py-4 shadow border border-blue-200 max-w-3xl">
                            Lisainfo saamiseks helista, kirjuta või külasta meid meie järveäärses asukohas. Ootame sind, et aidata sul sel hooajal mõnusalt aega veeta!
                        </div>
                    </motion.section>
                </div>
            </div>
        </motion.div>
    );
}
