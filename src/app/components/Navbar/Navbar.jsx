
import SwitchDarkMode from "../../shared/SwitchDarkMode/SwitchDarkMode"
import Header from "../Header/Header"
const Navbar = () => {
    const logged = false

    return (

        <div className='w-full   flex flex-col   shadow-lg z-max bg-white/95 p-0 m-0 '  >
            {/* <Logo/>
<MainNav2Logged/> */}
            <div className="w-full h-max py-2 bg-black">
                <div className=" flex items-center justify-center h-full w-full">
                    <p className="text-white font-black text-3xl ">

                        Tout ce que vous voulez !
                    </p>
                </div>
                {/* <SwitchDarkMode/> */}
            </div>

            <Header />

        </div>
    )

}

export default Navbar