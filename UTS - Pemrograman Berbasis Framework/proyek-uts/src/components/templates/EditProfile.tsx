import { Switch } from "antd";
import Link from 'next/link';

const EditProfile = () => {
    return (
        <div>
            <div className="h-full p-8 flex flex-col items-left gap-8">

                <div style={{color : "#03045e"}} className="grid grid-cols-3 gap-auto">
                    <div className="flex justify-center col-span-1">
                        <div className="rounded-full">
                            <img src="/mbak.png" alt="Profile Picture" className="rounded-full w-24 h-24 object-cover" />
                        </div>
                    </div>
                    <div className="col-span-1 space-y-3">
                        <div className="mb-1">
                            <label htmlFor="name" className="font-bold mb-1 block">Your Name</label>
                            <input type="text" id="name" name="name" className="p-1 border text-black border-blue-300 rounded-md w-4/5"  />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="email" className="font-bold mb-1 block">Email</label>
                            <input type="email" id="email" name="email" className="p-1 border text-black border-blue-300 rounded-md w-4/5"  />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="date" className="font-bold mb-1 block">Date of Birth</label>
                            <input type="date" id="date" name="date" className="p-1 border text-black border-blue-300 rounded-md w-4/5"  />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="address" className="font-bold mb-1 block">Permanent Address</label>
                            <input type="address" id="address" name="address" className="p-1 border text-black border-blue-300 rounded-md w-4/5"  />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="telegram" className="font-bold mb-1 block">Telegram Username</label>
                            <input type="telegram" id="telegram" name="telegram" className="p-1 border text-black border-blue-300 rounded-md w-4/5"  />
                        </div>
                        
                    </div>
                    <div className="col-span-1 space-y-3">
                        <div className="mb-1">
                            <label htmlFor="user" className="font-bold mb-1 block">User Name</label>
                            <input type="user" id="user" name="user" className="p-1 border text-black border-blue-300 rounded-md w-4/5"  />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="password" className="font-bold mb-1 block">Password</label>
                            <input type="password" id="password" name="password" className="p-1 border text-black border-blue-300 rounded-md w-4/5" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="address" className="font-bold mb-1 block">Present Address</label>
                            <input type="address" id="address" name="address" className="p-1 border text-black border-blue-300 rounded-md w-4/5"  />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="city" className="font-bold mb-1 block">City</label>
                            <input type="city" id="city" name="city" className="p-1 border text-black border-blue-300 rounded-md w-4/5"  />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="Country" className="font-bold mb-1 block">Country Username</label>
                            <input type="Country" id="Country" name="Country" className="p-1 border text-black border-blue-300 rounded-md w-4/5"  />
                        </div>
                        <div className="flex justify-start">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-4/5">Submit</button>
                        </div>
                    </div>
                    
                    
                </div>

                

            </div>
        </div>
    );
}

export default EditProfile;
