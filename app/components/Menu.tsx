import InfiniteText from "./InfiniteText";

const Text = () => (
    <div className="flex w-full justify-around">
        <p>Spa</p>
        <p>Salon</p>
        <p>Sauna</p>
        <p>Poundfit</p>
        <p>Yoga</p>
    </div>  
);

export default function Menu() {
    
    return (
        <div className="flex h-full w-full flex-col">
            <InfiniteText Component={Text} />
            <div 
                className="flex flex-col h-screen overflow-y-scroll snap-y snap-mandatory" data-lenis-prevent
            >
                <div className="bg-gray-400">
                    <div className="flex h-screen w-full justify-center items-center">
                        <h1>
                            Motherhood Package
                        </h1>
                        
                    </div>
                </div>
                <div className="bg-gray-700">
                    <div className="flex h-screen w-full justify-center items-center">
                        Test Menu 2
                    </div>
                </div>
                <div className="bg-gray-900">
                    <div className="flex h-screen w-full justify-center items-center">
                        Test Menu 3
                    </div>
                </div>
            </div>
            <InfiniteText Component={Text} />
        </div>
    );
};
