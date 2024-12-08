import Box from "@/components/Box";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Popular from "@/components/Popular"
import Signup from "@/components/Signup";
import About from "@/components/About";
import Image from "next/image";


export default function Home() {
  return (
   <div>
        <Hero/>
        <Box/>
        <Product/>
        <Popular/>
        <Signup/>
        <About/>
   </div>
  );
}
