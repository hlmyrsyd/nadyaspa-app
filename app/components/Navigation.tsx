// import Image from "next/image"

export default function Navigation() {
    return (
        <div 
            className="sticky top-0 z-50 flex w-full py-4 px-10 sm:px-20 justify-center sm:justify-between items-center bg-white/5 backdrop-blur-md bg-opacity-90 border-b border-white/15"
            style={{
                transition: 'background-color 0.3s ease-in-out',
            }}
        >
            {/* <div>
                <Image
                    src='/logo/nadyaspa.png'
                    height={30}
                    width={30}
                    alt='nadya spa logo'
                    style={{
                        width: 'auto',
                        height: 'auto'
                    }}  
                />
            </div> */}
            <div 
                className="flex justify-center items-center text-center text-6xl font-semibold text-primary"
                style={{
                    fontFamily: 'var(--font-palace-script)',
                    whiteSpace: 'nowrap'
                }}
            >
                <h1>Nadya Ethnic Spa</h1>
            </div>
            <button 
                className="text-3xl hidden md:flex"
                onClick={() => console.log('click reserve')}
            >
                Reserve
            </button>
        </div>
    )
};
