
const AuthLayout = ({children, title}) => {
    return (
        <div className="w-full max-w-xs">
            <h1 className="text-3xl font-bold mb-2 text-blue-600 text-center">{title}</h1>
            <p className="font-medium text-slate-500">Selamat Datang, silakan isi data</p>
            {children}
        
        </div>
    );
}

export default AuthLayout