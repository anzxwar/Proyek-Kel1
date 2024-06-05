import Navbar from "../atoms/navbar"
import Sidebar from "../atoms/sidebar"

const DashLayout = ({children}) => {
    return(
        <div className="flex"> 
            <div className="menu flex-auto bg-gradient-to-r from-gray-100 to-yellow-200 p-10 border-double border-2 border-yellow-500">
                <Sidebar/>
            </div>
            <div className="p-0">
                <Navbar/>
                <div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashLayout