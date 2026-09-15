
const Footer = () => {
    return (
        <footer className="border-t border-dark-600 py-8 px-6">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Nuwagaba Victor. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;