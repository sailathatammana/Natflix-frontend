// Project files
import iContent from "interfaces/iContent";

interface iProps {
  item: iContent;
  onUpdate: Function;
  onDelete: Function;
}

export default function ItemAdmin({ item, onUpdate, onDelete }: iProps) {
  const { id, title } = item;

  return (
    <article className="item-admin">
      <span className="number">{id}</span>
      <h3>{title}</h3>
      <div className="buttons">
        <button className="button-gray" onClick={() => onUpdate(item)}>
          Update
        </button>
        <button className="button-gray" onClick={() => onDelete(id)}>
          Update
        </button>
      </div>
    </article>
  );
}
