import CallToAction from "../buttons/CallToAction";
import fetchData from "../../hooks/fetchData";

export default function DailyPizza({ title, description }) {
  return (
    <section className="responsive-image">
      <span className="z-20 text-lg uppercase text-light w-fit">
        the pizza of the day
      </span>
      <h1 id="dailyName" className="z-20 mt-4 text-6xl w-fit">
        {title}
      </h1>
      <p
        id="dailyDesc"
        className="text-light w-[60ch] z-20 mb-8 mt-8 text-center"
      >
        {description}
      </p>
      <span className="z-30 text-lg">
        <CallToAction name="order now" link="/takeaway" active={undefined} />
      </span>
    </section>
  );
}
