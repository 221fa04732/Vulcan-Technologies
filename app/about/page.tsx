import { Tooltip } from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";

export default function AboutUs(){
    return(<div className="bg-slate-950 text-white w-full flex flex-col justify-center items-center pt-32 pb-40">
        <div className="w-10/12 flex flex-col justify-center items-center gap-6">
            <div className='font-extrabold text-3xl lg:text-5xl'>Meet our team</div>
            <div className="flex flex-row items-center justify-center mt-14 w-full"><Tooltip items={teanList}/></div>
        </div>
        <div className="w-full flex justify-center items-center text-white bg-slate-950 pt-20" >
            <Accordion
            type="single"
            collapsible
            className="w-10/12 md:w-8/12">
            {teanList.map((item, index)=>(
                <AccordionItem value={index.toString()} key={index}>
                    <AccordionTrigger className="hover:no-underline">
                        <div className={`flex flex-col md:flex-row gap-2 md:gap-6`}>
                            <Image src={item.image} alt="founder-pic" width={128} height={128} className="max-h-20 md:max-h-32 max-w-20 md:max-w-32 rounded-lg"/>
                            <div className="flex flex-col items-start justify-center">
                                <div className="text-xl md:text-3xl md:font-semibold font-sans">{item.name}</div>
                                <div className="test-sm md:text-base pt-2">{item.designation}</div>
                                <div className="flex justify-center items-end gap-2">
                                    <a href={item.linkedinURL} target="_blank"><Image src="/linkedin_blue.png" alt="linkedin" width={50} height={50} className="max-h-5 max-w-5 rounded-sm" /></a>
                                    <a href={item.twitterURL} target="_blank"><Image src="/twitter_blue.png" alt="twitter" width={50} height={50} className="max-h-5 max-w-5 rounded-sm" /></a>
                                    <a href={`mailto:${item.emailURL}`}><Image src="/message.png" alt="linkedin" width={50} height={50} className="max-h-5 max-w-5 rounded-sm" /></a>
                                </div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>{item.description}</p>
                    </AccordionContent>
                </AccordionItem>))}
            </Accordion>
        </div>
    </div>
)}

type teamType = {
    id: number;
    name: string;
    designation: string;
    image: string;
    description? :string,
    linkedinURL? :string,
    twitterURL? :string,
    emailURL? : string
};

const teanList : teamType[] = [{
    id: 1,
    name: "Tanner H. Jones",
    designation: "Founder & CEO",
    image: "/tanner.avif",
    description : "Tanner studied Politics, Philosophy, Economics, and Classical studies at Dartmouth, graduating in 2023. Previously, he was the CEO and co-founder of Downballot Solutions, managing local level political campaigns in seven states across two election cycles. After college, Tanner was the Technology Policy Director and Regulatory Policy Fellow at the Cicero Institute, contributing to legislative reforms in 30 states. Outside of Vulcan, Tanner is involved in the high school speech and debate community, where he was the 2018 national runner-up and coached the 2021 national champion. Tanner also holds powerlifting records in two states and qualified to the IPL world championships.",
    linkedinURL : "https://www.linkedin.com/in/tanner-jones-817192167/",
    twitterURL : "https://x.com/Tanner_H_Jones",
    emailURL : "tanner@vulcanconsultancy.com"
},{
    id: 2,
    name: "Alek J. Mekhanik",
    designation: "Founder & CTO",
    image: "/alek.avif",
    description : "Alek earned the prestigious Jack Byrne grant offered to the top math students at Dartmouth, where he studied electrical computer engineering with a focus in machine learning. Previously, Alek was a nationally competitive chess player and high school varsity athlete. He has also contributed to several startups as a machine learning engineer. Beyond Vulcan, Alek holds Ivy League and Arizona powerlifting records and qualified to USAPL collegiate nationals.",
    linkedinURL : "https://www.linkedin.com/in/alek-mekhanik-41547b272/",
    twitterURL : "https://x.com/",
    emailURL : "alek@vulcanconsultancy.com"
},{
    id: 3,
    name: "Chris O. Minge",
    designation: "Founder & Engineer",
    image: "/chris.avif",
    description : "Chris studied computer science and philosophy at Princeton University, graduating in 2022. After graduating, he was a software engineer at Google, where he worked on ML infrastructure, supporting Gemini, Waymo, and Vertex AI, among other Google services.",
    linkedinURL : "https://www.linkedin.com/in/chrisminge/",
    twitterURL : "https://x.com/",
    emailURL : "chris@vulcanconsultancy.com"
}]