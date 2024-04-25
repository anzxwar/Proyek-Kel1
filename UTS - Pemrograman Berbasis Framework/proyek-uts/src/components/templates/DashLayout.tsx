import Navbar from "../atoms/navbar"
import Sidebar from "../atoms/sidebar"

const DashLayout = ({children}) => {
    return(
        <div className="flex"> 
            <div className="menu flex-1 bg-yellow-200 p-10">
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