import Banner from "./components/banner/Banner";
import FeaturedAnimals from "./components/featured/FeaturedAnimals";



export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
     <Banner></Banner>
         <FeaturedAnimals></FeaturedAnimals>
    </div>
  );
}
