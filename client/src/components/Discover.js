import Card from "./Card";
import HomeNav from "./HomeNav";

function Discover() {
  return (
    <div>
      Discover
      <HomeNav />
      <div className="flex flex-wrap gap-x-8 gap-y-6 justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Discover;
