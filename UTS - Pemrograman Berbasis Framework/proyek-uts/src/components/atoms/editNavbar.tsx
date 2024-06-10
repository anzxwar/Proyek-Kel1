import Link from 'next/link';

export default function EditNavbar() {
    return (
        <div className="h-full p-8 flex flex-col items-left gap-8">
            <nav className="flex text-base text-gray-500 border-b border-gray-300 py-2 px-2">

                <Link href="/account">
                    <h2 className="navItem hover:text-blue-500 mr-10">Edit Profile</h2>
                </Link>
                <Link href="/account/wali">
                    <h2 className="navItem hover:text-blue-500 mr-10">Edit Wali</h2>
                </Link>
                <h2 className="navItem hover:text-blue-500 mr-10">Edit Kontak Dokter</h2>
            </nav>
        </div>
    )
}
