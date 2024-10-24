import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";


const perks = [
  {
  name: "instant delivery",
  Icon: ArrowDownToLine,
  description: "Get your item delivered in minutes"
},
 {
  name: "Guaranteed quality",
  Icon: CheckCircle,
  description: "Every asset is verified for high quality"
},
 {
  name: "For the planet",
  Icon: Leaf,
  description: "Environmentally friendly"
},

]
export default function Home() {
  return (
    <>
    <MaxwidthWrapper >
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tighter">Your market place for high quality{ ' '}
          <span className="text-blue-600">
            Products
          </span>
          .
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to Digitalhippo, where quality meets affordability. Shop Smart, Shop HippoMart!</p>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Link rel="stylesheet" href="/products" className={buttonVariants()}> Browse Trending</Link>
        <Button variant={'ghost'}>Our quality promise &rarr;</Button>
      </div>
      </div>



      {/*TODO: List products */}
    </MaxwidthWrapper>

    <section className="border-t border-gray-300 bg-gray-50">
      <MaxwidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) => (
            <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0 flex justify-center">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-50 text-blue-900" >
                {<perk.Icon className='w-q/3 h-1/3'/>}
                </div>
            </div>

            <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6' >
              <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {perk.description}
              </p>
            </div>
            </div>
          ))}


        </div>
      </MaxwidthWrapper>
    </section>
    </>
  );
}
