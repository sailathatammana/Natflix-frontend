// Project files
import iContent from "interfaces/iContent";

interface iProps {
  item: iContent;
  onUpdate: Function;
}

export default function ItemAdmin({ item, onUpdate }: iProps) {
  const { id, title } = item;

  return (
    <article className="item-admin">
      <span className="number">{id}</span>
      <h3>{title}</h3>
      <div className="buttons">
        <button className="button-gray" onClick={() => onUpdate(item)}>
          Update
        </button>
      </div>
    </article>
  );
}
