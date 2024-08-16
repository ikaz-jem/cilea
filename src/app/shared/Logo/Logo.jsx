import { Philosopher } from "next/font/google";
import Link from "next/link";

const philo = Philosopher({
  subsets: ["latin"],
  weight: [ '700'],
  style: ['normal'],
})


const Logo = ()=>{


    return (

        <Link href={'/'} className={`${philo?.className} dark:text-white `} style={{fontSize:"40px"}} >CILEA </Link>
    )
}

export default Logo