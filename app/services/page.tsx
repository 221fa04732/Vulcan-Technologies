import { Spotlight } from "@/components/ui/spotlight";

export default function Blog(){
    return (<div className="w-full flex flex-col justify-center items-center bg-black pb-32">
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center relative overflow-hidden">
            <Spotlight />
            <div className=" p-4 max-w-7xl  mx-auto r z-10  w-full pt-20 md:pt-0">
            <h1 className="text-xl md:text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Want to know more about us?</h1>
            <p className="mt-4 font-bold text-4xl md:text-7xl text-neutral-300 max-w-lg text-center mx-auto">Read our blogs</p>
            </div>
        </div>
        <div className="text-red-500 pb-40 pt-32">No blog post yet.</div>
    </div>
  );
}