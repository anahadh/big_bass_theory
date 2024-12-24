import { Link } from "react-router-dom"

const testimonials = [
    {
        name: "Brian Smith",
        testimonial: "The baits I purchased here are impressively durable and incredibly lifelike in the water. Since using them, I’ve consistently reeled in more fish, and they’ve quickly become my go-to choice.",
        pic: "https://live.staticflickr.com/7109/7466716928_d37f3f5fc9.jpg"
    },
    {
        name: "María Hernández",
        testimonial: "I decided to try their backpacks and was blown away by how comfortable and spacious they are. I can carry all my tackle, extra baits, and a thermos without feeling weighed down during my long fishing excursions.",
        pic: "https://media.istockphoto.com/id/1369509530/photo/portrait-of-natural-beauty-woman-at-beach.jpg?s=612x612&w=0&k=20&c=7xvyPUdDvNZMYuxyA9wM3H0gHNaBCyjA87G0-jhtbEA="
    },
    {
        name: "Amit Patel",
        testimonial: "Their baits have a natural, alluring movement that seems irresistible to fish of all sizes. I’ve noticed a significant uptick in my catch rate, making every trip out feel more productive and rewarding.",
        pic: "https://media.istockphoto.com/id/628330740/photo/portrait-of-a-beautifull-smiling-man.jpg?s=612x612&w=0&k=20&c=t10Nhvv-kzaSEdYpL0-dUvN5_Z9YV58vvDGmwcjZrIk="
    },
    {
        name: "Hana Tanaka",
        testimonial: "I recently tried one of their specialized fishing backpacks and was immediately impressed by the thoughtful design and numerous compartments. It’s made organizing my gear a breeze and saved me precious time when switching lures or baits.",
        pic: "https://media.istockphoto.com/id/1182564506/photo/portrait-of-a-young-confident-man.jpg?s=612x612&w=0&k=20&c=zTzGLC7cqprsIV7xiP5Y_HU-zbomPxlYsJx9DrE8wmE="
    },
    {
        name: "Jean Dupont",
        testimonial: "Their shirts are exceptionally comfortable and breathable, perfect for long days in the sun. Not only do they look great, but they also help keep me cool, allowing me to focus on landing the next big catch.",
        pic: "https://media.istockphoto.com/id/589122048/photo/paris-street-fashion.jpg?s=612x612&w=0&k=20&c=g5n_MvFYlZktT49Wa4VlaQJWfCy2row6cx5OXBb3zw0="
    },
    {
        name: "Faith Johnson",
        testimonial: "The baits I bought here strike the perfect balance between durability and realism, holding up even after multiple strikes. I’m seeing better results on every trip, and it’s been a genuine confidence boost in my fishing abilities.",
        pic: "https://media.istockphoto.com/id/97830053/photo/mature-woman-at-coast.jpg?s=612x612&w=0&k=20&c=MJTA3r1xoR7KAQRPPVLv4pFtoSrvdXjiY-fZpaJyXWw="
    }
]

const Landing = () => {
    

    return (
        <>
            <div className="relative w-screen h-[75vh] outline outline-4 grid grid-cols-2">
                <img className="w-full h-full bg-red-500"/>
                <img className="w-full h-full bg-blue-500" />
                <div className="absolute w-[740px] h-[375px] top-[360px] left-[440px] flex flex-col p-5">
                    <p className="mb-4 italic font-bold tracking-wider font-title text-9xl">Tacklepack</p>
                    <p className="text-5xl font-info italic font-thin tracking-wide w-[550px] leading-[60px] mb-7">A sleek backpack for your tackle expeditions</p>
                    <Link to="/shop"  className="relative flex font-info items-center justify-center h-full w-[300px] bg-accent text-[40px] font-bold transition-all duration-300 ease-in-out hover:bg-yellow-300/85 before:transition-transform before:duration-100 before:ease-out before:absolute before:w-[300px] before:h-full before:bg-transparent before:outline before:outline-8 before:outline-accent/50 hover:before:scale-x-110 hover:before:scale-y-125">
                        SHOP NOW
                    </Link>
                </div>
            </div>

            <div className="relative flex justify-center items-center h-[85vh] w-screen bg-background">
                <div className="relative flex flex-row w-3/5 gap-8 mb-60 mt-60 h-5/6">
                    <div className="relative flex flex-col items-center justify-center w-full h-full p-8 space-y-8">
                        <img className="object-cover w-full h-3/4 rounded-xl" src="/nodinkpink.png" />
                        <p className="flex justify-center text-4xl font-bold font-info">No Dink Pink Baits</p>
                        <Link to="/shop"  className="relative flex font-info items-center justify-center h-[80px] w-5/6 bg-accent text-[40px] font-bold transition-all duration-300 ease-in-out hover:bg-yellow-300/85 before:transition-transform before:duration-100 before:ease-out before:absolute before:inset-0 before:bg-transparent before:outline before:outline-8 before:outline-accent/50 hover:before:scale-x-110 hover:before:scale-y-125">
                            SHOP NOW
                        </Link>
                    </div>
                    <div className="relative flex flex-col items-center justify-center w-full h-full p-8 space-y-8">
                        <img className="object-cover aspect-auto rounded-xl" src="/bbtnewspapergreen.png" />
                        <p className="flex justify-center text-4xl font-bold text-center font-info">BBT Shirt Newspaper Decal</p>
                        <Link to="/shop"  className="relative flex font-info items-center justify-center h-[80px] w-5/6 bg-accent text-[40px] font-bold transition-all duration-300 ease-in-out hover:bg-yellow-300/85 before:transition-transform before:duration-100 before:ease-out before:absolute before:inset-0 before:bg-transparent before:outline before:outline-8 before:outline-accent/50 hover:before:scale-x-110 hover:before:scale-y-125">
                            SHOP NOW
                        </Link>
                    </div>
                    <div className="relative flex flex-col items-center justify-center w-full h-full p-8 space-y-10">
                        <img className="object-cover w-full h-3/4 rounded-xl" src="/bbttacklepacksketches.png" />
                        <p className="relative flex justify-center text-4xl font-bold text-center font-info">
                            Tacklepack
                            <p className="absolute bottom-[-13px] left-1 text-sm font-black text-accent">Coming Soon!</p>
                        </p>
                        <Link to="/"  className="relative opacity-50 flex font-info items-center justify-center h-[80px] w-5/6 bg-accent text-[40px] font-bold transition-all duration-300 ease-in-out hover:bg-yellow-300/85 before:transition-transform before:duration-100 before:ease-out before:absolute before:inset-0 before:bg-transparent before:outline before:outline-8 before:outline-accent/50 hover:before:scale-x-110 hover:before:scale-y-125 disabled:opacity-50">
                            SHOP NOW
                        </Link>
                    </div>
                </div>
            </div>

            <div className="relative flex justify-center items-center h-[85vh] w-screen bg-secondary/30 p-10 space-x-10">
                <div className="relative flex flex-col items-end w-1/2 space-y-16">
                    <p className="w-2/3 text-end relative italic font-title font-black leading-[95px] tracking-wide text-[80px] text-black">Understanding Big Bass Theory</p>
                    <p className="relative w-[70%] text-justify font-info text-4xl leading-[60px] tracking-wide text-black">
                        Big Bass Theory was founded by two passionate young tackle enthusiasts, Kota and Cade, who crafted innovative fishing gear to elevate the sport they love. Their determination and vision continue to drive the company today.
                    </p>
                    <Link to="/about"  className="relative flex items-center justify-center h-[80px] w-[70%] bg-primary/50 text-[40px] font-info font-bold transition-all duration-300 ease-in-out hover:bg-primary/85 before:transition-transform before:duration-100 before:ease-out before:absolute before:inset-0 before:bg-transparent before:outline before:outline-8 before:outline-primary/70 hover:before:scale-x-[1.05] hover:before:scale-y-[1.5]">
                        LEARN MORE
                    </Link>
                </div>

                <div className="relative flex items-start w-1/2 pl-20">
                    <img className="relative aspect-auto w-[80%] border-4  border-primary rounded-2xl object-cover" alt="A photo of the founders of the company, Kota and Cade" src="/bbtkota&cade.png" />
                </div>
            </div>

            <div className="relative flex flex-col items-center self-center justify-center w-2/3 h-auto p-10 mb-40 space-x-5 justify-self-center bg-background">
                <p className="mt-20 font-black font-title text-8xl">Why Big Bass Theory?</p>
                <p className="mt-10 text-4xl italic font-info">Hear from some satisfied customers</p>

                <div className="relative grid items-start justify-center w-full h-auto grid-cols-3 gap-12 mt-20">
                    {testimonials.map((item, index) => {
                        return (
                            <div key={index}  className="relative rounded-2xl flex flex-col w-full h-auto h-max-[90%] bg-gray-400 p-10">
                                <div className="relative flex flex-row w-full h-[40%]">
                                    <div className="flex flex-col space-y-4">
                                        <p className="w-1/2 text-4xl font-bold font-info leading-[40px] text-white tracking-[3px]">{item.name}</p>
                                        <div className="flex flex-row mt-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-yellow-400 size-8 fill-yellow-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-yellow-400 size-8 fill-yellow-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-yellow-400 size-8 fill-yellow-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-yellow-400 size-8 fill-yellow-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-yellow-400 size-8 fill-yellow-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <img className="absolute object-cover object-top rounded-full right-9 top-9 size-36" src={item.pic} />

                                <p className="flex items-stretch mt-8 text-2xl text-white font-info">{item.testimonial}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="relative flex items-center justify-center w-screen h-auto px-20 py-40 bg-primary/30">
                <div className="relative grid w-5/6 grid-cols-3 gap-x-8">
                    <img className="aspect-16/9 object-cover object-right h-[500px] rounded-xl border-accent border-8 shadow-xl" src="https://media.istockphoto.com/id/664304800/photo/fishing-concepts.jpg?s=612x612&w=0&k=20&c=PsxpGtuYvyhpi-g6wxjIS0NM2GC1mIjnXyVIo7QMiuM=" />
                
                    <div className="flex flex-col items-center justify-center w-full space-y-10">
                        <p className="relative text-6xl font-black text-center font-title">Shop BBT Today</p>
                        <p className="relative text-4xl font-medium text-center font-title">Elevate Your Fishing Game</p>
                        <Link to="/shop"  className="relative flex font-info items-center justify-center h-[100px] w-[300px] bg-accent text-[40px] font-bold transition-all duration-300 ease-in-out hover:bg-yellow-300/85 before:transition-transform before:duration-100 before:ease-out before:absolute before:w-[300px] before:h-full before:bg-transparent before:outline before:outline-8 before:outline-accent/50 hover:before:scale-x-110 hover:before:scale-y-125">
                            SHOP NOW
                        </Link>
                    </div>

                    <img className="aspect-16/9 object-cover h-[500px] rounded-xl border-accent border-8 shadow-xl" src="https://t3.ftcdn.net/jpg/08/72/30/04/360_F_872300405_zpnAh0xmytmbZtvheyYReNnHTgLiqUxE.jpg" />
                </div>
            </div>
        </>
    )
}

export default Landing