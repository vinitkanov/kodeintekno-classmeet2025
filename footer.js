import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 ">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-4 md:gap-8">
                    {/* Logo */}
                    <img src="/logo.svg" alt="logo"/>

                    {/* Menu */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Menu</h3>
                        <nav className="space-y-3">
                            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                                Home
                            </a>
                            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                                About Us
                            </a>
                            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                                Services
                            </a>
                            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                                Team
                            </a>
                            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                                Contact Us
                            </a>
                        </nav>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Kontak</h3>
                        <div className="space-y-3">
                            <a href="tel:+000-0000-0000" className="block text-gray-600 hover:text-gray-900 transition-colors">
                                +000-0000-0000
                            </a>
                            <a href="mailto:tekno@gmail.com" className="block text-gray-600 hover:text-gray-900 transition-colors">
                                tekno@gmail.com
                            </a>
                            <address className="text-gray-600 not-italic">
                                Harvest City,<br />
                                Ragemanunggal, Setu,<br />
                                Bekasi.
                            </address>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Media</h3>
                        <div className="space-y-3">
                            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                                Instagram
                            </a>
                            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                                Facebook
                            </a>
                            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                    {/* Logo */}
                    <img src="/logo.svg" alt="logo" className="mb-6"/>

                    {/* Three Column Layout */}
                    <div className="grid grid-cols-3 gap-10">
                        {/* Menu */}
                        <div>
                            <h3 className="text-base font-semibold text-gray-900 mb-4">Menu</h3>
                            <nav className="space-y-3">
                                <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Home
                                </a>
                                <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    About Us
                                </a>
                                <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Services
                                </a>
                                <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Team
                                </a>
                                <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Contact Us
                                </a>
                            </nav>
                        </div>

                        {/* Kontak */}
                        <div>
                            <h3 className="text-base font-semibold text-gray-900 mb-4">Kontak</h3>
                            <div className="space-y-3">
                                <a href="tel:+000-0000-0000" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    +000-0000-0000
                                </a>
                                <a href="mailto:tekno@gmail.com" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    tekno@gmail.com
                                </a>
                                <address className="text-sm text-gray-600 not-italic">
                                    Harvest City,<br />
                                    Ragemanunggal, Setu,<br />
                                    Bekasi.
                                </address>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-base font-semibold text-gray-900 mb-4">Social Media</h3>
                            <div className="space-y-3">
                                <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Instagram
                                </a>
                                <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Facebook
                                </a>
                                <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8">
                    <p className="text-sm text-black">
                        ©2025 Kodeintekno | All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
