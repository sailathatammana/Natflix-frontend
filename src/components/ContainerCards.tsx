// Project files
import iContent from "interfaces/iContent";
import CardBasic from "./CardBasic";

interface iProps {
  title: String;
  data: iContent[];
}

export default function ContainerCards({ title, data }: iProps) {
  const Cards = data.map((item) => <CardBasic key={item.id} item={item} />);

  return (
    <section className="container-cards">
      <h2>{title}</h2>
      <div>{Cards}</div>
    </section>
  );
}
