
import AllProduct from "./AllProduct";
import Heading from "./Heading";
import Slider from "./Slider";

export default function Home() {

  return (
    <div>
      <Slider/>




<Heading heading="Our Best Beauty Collections" pera="Discover our exclusive range of Beauty products." />

      <AllProduct category="beauty"/>

<Heading heading="Our Best Fragrances Collections" pera="Discover our exclusive range of Fragrances products." />
      <AllProduct category="fragrances"/>

<Heading heading="Our Best Furniture Collections" pera="Discover our exclusive range of Furniture products." />

      <AllProduct category="furniture"/>

<Heading heading="Our Groceries " pera="Discover our exclusive range of Groceries products." />

      <AllProduct category="groceries"/>
      
    
  </div>
  
  );
}
