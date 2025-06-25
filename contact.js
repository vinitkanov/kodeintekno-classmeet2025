import React from 'react';
import { User, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center md:p-6 p-2">
            <div className="bg-white rounded-sm max-w-6xl w-full pt-18 pb-7 pl-3 pr-3 md:p-16 md:flex gap-16 border-[#DDDDDD] border-1">





                <div className="flex-1 flex flex-col justify-start text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl text-gray-900 leading-tight font-semibold mb-4">
                        Hubungi Kami
                    </h1>
                    <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-md">
                        Punya ide yang ingin diwujudkan?
                        Kami siap bantu dalam UI/UX Design, Web Development,
                        Digital Marketing, hingga 3D & Graphic Design.
                        Hubungi kami sekarang dan mari mulai kolaborasi untuk
                        membuat sesuatu yang luar biasa.
                    </p>
                </div>

                {/*formulir pengisiannya */}

                <div className="flex-1 mmd:max-w-2xl">
                    <div className="space-y-6">

                        <div className="grid grid-cols-2 gap-4">

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 md:w-10 md:h-10 bg-[#F3BFC8] rounded-sm flex items-center justify-center border-[#D10123] border-1">
                                        <User className="w-4 h-4 md:w-5 md:h-5 text-[#D10123]" />
                                    </div>
                                    <div className="text-gray-800 font-semibold text-sm md:text-xl">
                                        Nama
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Fulan bin Fulan ..."
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent placeholder-gray-400 text-sm text-black"
                                />
                            </div>


                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 md:w-10 md:h-10 bg-[#F3BFC8] rounded-sm flex items-center justify-center border-[#D10123] border-1">
                                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#D10123]" />
                                    </div>
                                    <div className="text-gray-800 font-semibold text-sm md:text-xl">
                                        Email
                                    </div>
                                </div>
                                <input
                                    type="email"
                                    placeholder="Fulan@gmail.com ..."
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent placeholder-gray-400 text-sm text-black"
                                />
                            </div>
                        </div>


                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-6 h-6 md:w-10 md:h-10 bg-[#C6DFF1] rounded-sm flex items-center justify-center border-[#1B80C8] border-1">
                                    <MessageSquare className="w-3 h-3 md:w-5 md:h-5 text-[#1B80C8]" />
                                </div>
                                <div className="text-gray-800 font-semibold text-sm md:text-xl">
                                    Pesan
                                </div>
                            </div>
                            <textarea
                                rows="4"
                                placeholder="tung tung tung tung tung tung tung tung tung tung sahur ..."
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent placeholder-gray-400 text-sm resize-none text-black"
                            />
                        </div>


                        <button
                            className="w-full bg-[#FF743C] hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-sm"
                            id="submit-button"
                        >
                            Kirim
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
