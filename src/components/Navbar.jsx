import { FaApple, FaSearch, FaShoppingBag, FaBars } from "react-icons/fa";
function Navbar() {
    const navlinks = [
        {
            name: "Store"
        },
        {
            name: "Mac"
        },
        {
            name: "ipad"
        },
        {
            name: "iphone"
        },
        {
            name: "Watch"
        },
        {
            name: "AirPods"
        },
        {
            name: "TV & Home"
        },
        {
            name: "Entertainment"
        },
        {
            name: "Accessories"
        },
        {
            name: "Support"
        },

    ]
    return (
        <nav className="bg-white/70 sticky top-0 z-20 backdrop-blur-sm p-3 ">
            <div className="flex justify-center items-center gap-[4vw] ">
                <div className="flex flex-grow md:flex-none" >
                <p className="text-lg cursor-pointer"><FaApple/></p>
                </div>
                <ul className="text-xs gap-[2.5vw] items-center  flex md:flex">
                    {/* <li>Store</li>
                    <li>Mac</li>
                    <li>ipad</li>
                    <li>iphone</li>
                    <li>Watch</li>
                    <li>AirPods</li>
                    <li>TV & Home</li>
                    <li>Entertainment</li>
                    <li>Accessories</li> */}
                    
                    
                    {navlinks.map((link, index) => (
                        <li className="hidden md:flex " key={index}>{link.name}</li>

                    ))}


                </ul>
                <div className="flex gap-[2vw]">
                <p className="font-light cursor-pointer"><FaSearch/></p>
                <p className="fill-none cursor-pointer"><FaShoppingBag/></p>
                <p className="block md:hidden cursor-pointer"><FaBars/></p>
                 </div>
            </div>
        </nav>
    )

}
export default Navbar