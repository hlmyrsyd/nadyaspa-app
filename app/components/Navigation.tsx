// import Image from "next/image"

export default function Navigation() {
    return (
        <div 
            className="absolute flex w-full py-4 px-20 justify-between items-center"
        >
            {/* <div className="w-1/6">
            <Image
                src='/logo/nadyaspa.png'
                height={40}
                width={40}
                quality={60}
                alt='nadya spa logo'  
            />
            </div> */}
            <div 
                className="flex items-center text-center text-6xl font-semibold text-primary"
                style={{
                    fontFamily: 'var(--font-palace-script)',
                }}
            >
            <h1>Nadya Ethnic Spa</h1>
            </div>
            <button 
                className="flex w-1/6 justify-end text-3xl"
                onClick={() => console.log('click reserve')}
            >
                Reserve
            </button>
        </div>
    )
};
