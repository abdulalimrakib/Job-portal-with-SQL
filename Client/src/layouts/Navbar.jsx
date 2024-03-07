import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";




const Navbar = () => {
    const [isMenuCliked, setIsMenuCliked] = useState(false)

    return (
        <div className="">
            <div className="flex justify-between items-center px-[1rem] sm:px-[2rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] w-[100%] mx-auto">
                <div>
                    <Link className="text-[30px] md:text-[40px] font-bold" to="/">logo</Link>
                </div>
                <ul className="hidden md:flex gap-5 items-center">
                    <li><NavLink to='/' className='font-medium'>Start a Search</NavLink></li>
                    <li><NavLink to='/my-job' className='font-medium'>My Jobs</NavLink></li>
                    <li><NavLink to='/salary' className='font-medium'>Salary Estimate</NavLink></li>
                    <li><NavLink to='/post-job' className='font-medium'>Post a Job</NavLink></li>
                    <li><button className="border-2 py-1 px-2 rounded-md font-bold hover:bg-blue-100 duration-150">Sign In</button></li>
                    <li><button className="border py-1 px-2 rounded-md font-bold bg-blue-500 hover:bg-opacity-90 duration-150">Sign Up</button></li>
                </ul>

                <div className="md:hidden">
                    <div className="flex items-center gap-5">
                        {/* <ul className="flex gap-5">
                            <li><button className="border-2 py-1 px-2 rounded-md font-bold hover:bg-blue-100 duration-150">Sign In</button></li>
                            <li><button className="border py-1 px-2 rounded-md font-bold bg-blue-500 hover:bg-opacity-90 duration-150">Sign Up</button></li>
                        </ul> */}
                        {
                            isMenuCliked ? (<MdClose onClick={() => setIsMenuCliked(false)} />) : (<FiMenu onClick={() => setIsMenuCliked(true)} />)
                        }
                    </div>
                </div>
            </div>
            <div className={`my-2 px-[1rem] sm:px-[2rem] md:hidden ${isMenuCliked ? "block" : "hidden"}`}>
                <ul>
                    <li><NavLink className="font-medium" to="/">Start a Search</NavLink></li>
                    <li><NavLink className="font-medium" to="/my-job">My Jobs</NavLink></li>
                    <li><NavLink className="font-medium" to="/salary">Salary Estimate</NavLink></li>
                    <li><NavLink className="font-medium" to="/post-job">Post a Job</NavLink></li>
                </ul>
                <ul className="flex justify-end gap-5 my-2">
                    <li><button className="border-2 py-1 px-2 rounded-md font-bold hover:bg-blue-100 duration-150">Sign In</button></li>
                    <li><button className="border py-1 px-2 rounded-md font-bold bg-blue-500 hover:bg-opacity-90 duration-150">Sign Up</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar