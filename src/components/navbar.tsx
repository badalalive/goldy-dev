export default function NavBar() {
    return (
        <div>
            <nav className="mt-9 container flex items-center justify-center">
                <div className="container flex space-x-16 items-center">
                    <a href="#" className=""><img src='/goldy_logo.svg' className="w-44"/></a>
                    <ul className="flex space-x-12">
                        <li><a href="#" className="text-white text-[18px] hover:text-gray-400">Portfolio</a></li>
                        <li><a href="#" className="text-white text-[18px] hover:text-gray-400">Contact Us</a></li>
                    </ul>
                </div>
                <div className="container flex justify-end space-x-4">
                  <button className="text-[18px] text-white px-5 py-2 rounded-full border-2 border-[#F4DA7A] border-b-[#8A4502]">Download White Paper</button>
                  <button className="text-[18px] text-white px-5 py-2 bg-gradient-to-r from-[#be9f59] to-[#433420] rounded-full">Connect to Wallet</button>
                </div>
            </nav>
        </div>
    )
  }
  