import { Header } from "@/app/components/header";
import { Cover } from "./components/cover";
import { Sections } from "./components/sections";
import { FeaturedProducts } from "./components/featuredProducts";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Cover/>
        <Sections/>
        <FeaturedProducts />
        <FeaturedProducts />
      </main>
      <Footer/>
    </>
  );
}
