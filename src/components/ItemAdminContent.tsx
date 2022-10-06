// Project files
import iContent from "interfaces/iContent";

interface iProps {
  item: iContent;
  onEdit: Function;
  onDelete: Function;
}

export default function ItemAdminContent({ item, onEdit, onDelete }: iProps) {
  const { id, title } = item;

  return (
    <article className="item-admin-content">
      <span className="id">{id}</span>
      <h3>{title}</h3>
      <button className="button-gray" onClick={() => onEdit(id)}>
        Edit
      </button>
      <button className="button-gray" onClick={() => onDelete(id)}>
        Delete
      </button>
    </article>
  );
}
