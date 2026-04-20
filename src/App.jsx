import React from 'react'
import Header from './Header'
import Section from './section'
import ImageSlider from "./Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiParagraph } from 'react-icons/bi';
import Home from './Home'
import ButtonSection from './ButtonSection'
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  const data = [
    { img: "https://www.bbassets.com/media/uploads/p/l/40357284_2-red-bull-plus-drink.jpg" },
    { img: "https://webcdn.freedomfromdiabetes.org/storage/blog/2971/c90a7bcc-7c56-4775-a19d-665267679301.webp" },
    { img: "https://www.healthdigest.com/img/gallery/how-bad-is-red-bull-for-your-health/l-intro-1655220646.jpg" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwpMMZ_v4eLta49Abck3Al5IrizWTU09sz8A&s" },
    { img: "https://www.liquor.com/thmb/by95CAoF-nj4w1til5itnQFFrg8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2016__12__22114511__vodka-red-bull-720x720-recipe-b16a667ca354445799610e39be61e40a.jpg" },
    { img: "https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F9271%2F1708673403888.png%3Ftype%3Dpng&w=1080&q=75" },
    { img: "https://kickinchicken.com/wp-content/uploads/2023/08/Red-Bull-Energy-Drink.jpg" },
    { img: "https://lifeboostcoffee.com/cdn/shop/articles/Feature_Image_6_23c2b5eb-297c-417a-995a-1e1aa7778186.jpg?v=1758972031" },
    { img: "https://lifeboostcoffee.com/cdn/shop/articles/Feature_Image_3_75f2fdcb-97dc-40af-8230-ca251e36d32b.jpg?v=1762423508" }

  ];

  const Cardsdata = [
    {
      id: 1,
      img: "https://www.businessoutreach.in/wp-content/uploads/2023/09/Red-bulls-3-ies-tagline.jpg",
      heading: "Energy Drink",
      Paragraph: "Gives you wings and boosts energy.",
      btn: "Explore",
      year: "2024",
    },
    {
      id: 2,
      img: "https://cdn.uengage.io/uploads/18085/image-381513-1685703917.jpeg",
      heading: "Coca Cola",
      Paragraph: "Classic refreshing soft drink.",
      btn: "Explore",
      year: "2023",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HFnMjdSxrkIGufRB3um2hiUPDo4XmI60pQ&s",
      heading: "Pepsi",
      Paragraph: "Bold taste for every moment.",
      btn: "Explore",
      year: "2022",
    },
    {
      id: 4,
      img: "https://gharstuff.com/wp-content/uploads/2018/12/Sprite-Soft-Drink-Can-300ml.jpg",
      heading: "Sprite",
      Paragraph: "Clear lemon-lime refreshment.",
      btn: "Explore",
      year: "2024",
    },
    {
      id: 5,
      img: "https://cdn.uengage.io/uploads/18085/image-546261-1694859044.jpeg",
      heading: "Fanta",
      Paragraph: "Fun fruity flavors.",
      btn: "Explore",
      year: "2023",
    },
    {
      id: 6,
      img: "https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-11-13/monster_energy_drink_can.jpg",
      heading: "Monster",
      Paragraph: "Modern development platform.",
      btn: "Explore",
      year: "2025",
    },
  ];
  return (
    <div>
      <Header />
      <Section />
      <ImageSlider data={data} />

      <div className="grid grid-cols-3 gap-6 m-auto px-80">

        {Cardsdata.map((item) => (
          <Home

            key={item.id}
            img={item.img}
            heading={item.heading}
            Paragraph={item.Paragraph}
            btn={item.btn}
            year={item.year}
          />
        ))}
      </div>
      <ButtonSection />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;