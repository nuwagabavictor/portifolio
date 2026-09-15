import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-dark-600 py-8 px-6">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <p className="flex items-center gap-1.5">
                    Built with <Heart size={14} className="text-primary-500 fill-primary-500" /> using React & Tailwind
                </p>
            </div>
        </footer>
    );
}

export default Footer;