import FAQ from "@/components/faq"
import Landing from "@/components/landing"
import { ServiceCard } from "@/components/services"

export default function Home(){
    return(<div>
        <Landing />
        <ServiceCard />
        <FAQ />
    </div>)
}