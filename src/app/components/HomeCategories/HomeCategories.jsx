
import Image from "next/image"




async function getData() {
    const res = await fetch('http://localhost:3000/api/categories',
        {cache:"no-store"})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    return data
}

const HomeCategories = async () => {


    const categories = await getData()


    return (
        <>

            <h1 className="text-3xl font-bold text-center">Categories</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                {
                    categories && categories?.map((cat, idx) => {
                        let img = cat.image
                        return (

                            <div className=" h-full p-5  " key={idx}>

                                <div className="flex gap-2 flex-col items-center justify-center w-full h-full ">

                                    {cat.image && < Image alt="img" width={400} height={400} src={img} className="rounded-full max-w-40 h-40 object-cover shadow-lg" />
                                    }

                                    <h1 className="text-neutral-800 font-bold">{cat?.name} </h1>

                                </div>

                            </div>

                        )
                    })}

            </div>

        </>
    )


}

export default HomeCategories