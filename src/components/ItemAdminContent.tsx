// Project files
import iContent from "interfaces/iContent";

interface iProps {
  item: iContent;
  onUpdate: Function;
}

export default function ItemAdminContent({ item, onUpdate }: iProps) {
  const { id, title } = item;

  return (
    <article className="item-admin-content">
      <span className="id">{id}</span>
      <h3>{title}</h3>
      <button className="button-gray" onClick={() => onUpdate(item)}>
        Update
      </button>
    </article>
  );
}
