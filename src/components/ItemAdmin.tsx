// Project files
import iContent from "interfaces/iContent";

interface iProps {
  item: iContent;
  actions: Function[];
}

export default function ItemAdmin({ item, actions }: iProps) {
  const { id, title } = item;
  const [onUpdate, onDelete] = actions;

  return (
    <article className="item-admin">
      <span className="number">{id}</span>
      <h3>{title}</h3>
      <div className="buttons">
        <button className="button-gray" onClick={() => onUpdate(item)}>
          Update
        </button>
        <button className="button-gray" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </article>
  );
}
