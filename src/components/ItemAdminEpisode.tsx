// Project files
import iDetailsSeries from "interfaces/iDetailsSeries";

interface iProps {
  item: iDetailsSeries;
  actions: Function[];
}

/**
 * Refactor:
 * This is identical to ItemAdminContent just with 1 less button
 * and a different interface for item
 */
export default function ItemAdminEpisode({ item, actions }: iProps) {
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
