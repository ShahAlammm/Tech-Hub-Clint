import Navbar from "@/src/components/Shared/NavBar/navbar";



const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto">

                {children}

            </main>
        </div>
    );
};

export default layout;