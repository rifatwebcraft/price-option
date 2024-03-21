import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '/404' }
      ];
      


    return (
        <nav className="bg-slate-400 p-6">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                }
            
            </div>
            
            <ul className={`md:flex  bg-slate-400 px-6 duration-1000
                absolute lg:static
                ${open ? 'top-16' : '-top-60'}
            `}>
                {
                    routes.map(route=> <Link key={route.id} route={route}></Link> )
                }
            </ul>
         
        </nav>
    );
};

export default NavBar;