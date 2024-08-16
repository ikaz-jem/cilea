import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { LiaShippingFastSolid } from "react-icons/lia";

import { Alegreya } from "next/font/google";

const abril = Alegreya({
    subsets: ['latin'],
    weight: ["700"],


})

export default function ProductCard({ product }) {
    const percent = Number(product?.promo)

    const RenderImage = () => {
        return (
            <div className="relative z-[-10] group  cursor-pointer">

                {/* <Image width={500} height={500} src={product?.image} className=" object-contain" /> */}


                <Image width={400} height={400} src={product?.image} className="hover:opacity-0 duration-700  opacity-100  object-contain transition-all rounded-xl group-hover:rounded-b-[0px] " />
                <Image width={400} height={400} src={'https://img.ltwebstatic.com/images3_pi/2023/08/30/71/1693325097ac6e96b98b72af19a9b4d00055d84d06.webp'} className="rounded-xl absolute top-0 object-fill group-hover:rounded-b-[0px]  opacity-0 group-hover:opacity-100  duration-700  " />

            </div>
        )
    }

    return (

        <>
            <div className=" h-full max-w-80  rounded-xl overflow-hidden  relative group hover:outline outline-1 outline-neutral-200/80  ">
                {product?.promo && <span className="bg-red-500 absolute top-2 right-[-60px] w-40 text-center  z-10 rounded-r px-4 text-white font-bold rotate-[45deg]">-{product?.promo} % </span>}                <div className="flex flex-col gap-2 ">


                    <div className="z-0  ">

                        <RenderImage />
                    </div>
                    <div className="flex flex-col py-4 px-2 items-between h-full ">

                        <h1 className=" text-sm truncate hover:underline  cursor-pointer">{product.title} </h1>

                        <div className="flex justify-between items-center">

                            <span className={`${abril.className}  text-orange-600 w-max p-1 text-2xl font-bold truncate `}>{Number(product?.price).toFixed(2)} <span className="text-sm">MAD</span> </span>

                            {product?.promo && <span className={`${abril.className}  text-neutral-600 w-max p-1 text-md  truncate line-through`}>{((percent * Number(product.price) / 100) + Number(product.price)).toFixed(2)} <span className="text-xs">MAD</span>  </span>}
                    
                        </div>
                        <div className="flex   items-center capitalize h-5 gap-2">

                            {/* <LiaShippingFastSolid className="w-10 h-10 p-2 " /> */}
                       
{                            product.promo && <p className="bg-red-500  px-2 py-1 text-white text-[9px]"> Economisez {(percent * Number(product.price) / 100)} MAD !</p>
}                
{                            product.promo && <p className="bg-red-500  px-2 py-1 text-white text-[9px]">-{percent}%</p>
}                
        </div>


                    </div>
                </div>

            </div>
        </>
    )

}

