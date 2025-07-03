import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import { Particles } from "../ui/particles";
import RetroGrid from "../ui/retro-grid";

const CTA = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
            <Container>
                <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0 mx-auto h-[500px] border border-foreground/10 rounded-3xl overflow-hidden relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-violet-500 blur-[10rem]"></div>
                    <div className="flex flex-col items-center justify-center w-full z-20">
                    <h2 className="text-4xl md:text-6xl font-heading heading font-semibold !leading-tight mt-6">
  Start your store in minutes <br className="hidden md:block" /> with no code or stress
</h2>
<p className="text-base md:text-lg text-center text-accent-foreground/80 max-w-xl mx-auto mt-6">
  Shopigo makes it super easy to launch your own online store. Mobile-friendly, fast, and fully managed — everything you need at just ₹500/month.
</p>
<div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 mt-6">
  <Button asChild size="lg" className="w-full md:w-max">
    <Link href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I'm%20interested%20in%20starting%20my%20store%20with%20Shopigo.">
      Start Now on WhatsApp
    </Link>
  </Button>
  <Button asChild size="lg" variant="secondary" className="w-full md:w-max">
    <Link href="/demo">
      See Demo
    </Link>
  </Button>
</div>

                    </div>
                    <RetroGrid />
                    <Particles
                        refresh
                        ease={80}
                        color="#0065F8"
                        quantity={100}
                        className="size-full absolute inset-0"
                    />
                </div>
            </Container>
        </div>
    )
};

export default CTA
