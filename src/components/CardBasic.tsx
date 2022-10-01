// Project files
import Placeholder from "assets/images/placeholders/card-basic.png";

interface iProps {
  id: number;
  imageURL: string;
}

export default function CardBasic({ id, imageURL }: iProps) {
  // Methods
  function onClick(): void {
    alert(`Clicked on ${id}`);
  }

  console.log(imageURL);

  return (
    <article onClick={onClick} className="card-basic">
      <img
        src={imageURL}
        onError={(event) => (event.currentTarget.src = Placeholder)}
      />
    </article>
  );
}
