import SectionTitle from "../Components/SectionTitle";
import useMenu from "../Hooks/useMenu";
import PopularItems from "./PopularItems";

export default function OurMenu() {
  const [menu] = useMenu();
  const popularItem = menu.filter((item) => item.category === "popular");
  return (
    <section className="py-4">
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"from our menu"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {popularItem.map((item) => (
          <PopularItems key={item._id} item={item}></PopularItems>
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="border-b-2 border-black text-md font-semibold px-6 py-2 rounded-xl">
          View Full Menu
        </button>
      </div>
    </section>
  );
}
