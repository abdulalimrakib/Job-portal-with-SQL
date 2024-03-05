import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";




const Navbar = () => {
    const [isMenuCliked, setIsMenuCliked] = useState(false)

    return (
        <div className="">
            <div className="flex justify-between items-center px-[1rem] sm:px-[2rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] w-[100%] mx-auto">
                <div>
                    <a className="text-[30px] md:text-[40px] font-bold" href="/">logo</a>
                </div>
                <ul className="hidden md:flex gap-5">
                    <li><a className="font-medium" href="">link1</a></li>
                    <li><a className="font-medium" href="">link2</a></li>
                    <li><a className="font-medium" href="">link3</a></li>
                    <li><a href="">logo1</a></li>
                    <li><a href="">logo2</a></li>
                </ul>

                <div className="md:hidden">
                    <div className="flex items-center gap-5">
                        <ul className="flex gap-5">
                            <li><a href="">logo1</a></li>
                            <li><a href="">logo2</a></li>
                        </ul>
                        {
                            isMenuCliked ? (<MdClose onClick={() => setIsMenuCliked(false)} />) : (<FiMenu onClick={() => setIsMenuCliked(true)} />)
                        }
                    </div>
                </div>
            </div>
            <div className={`container ${isMenuCliked ? "block" : "hidden"}`}>
                <ul>
                    <li><a className="font-medium" href="">link1</a></li>
                    <li><a className="font-medium" href="">link2</a></li>
                    <li><a className="font-medium" href="">link3</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar