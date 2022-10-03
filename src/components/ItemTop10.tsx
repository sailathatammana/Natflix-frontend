interface iProps {
  id: number;
  number: number;
  imageURL: string;
}

export default function ItemTop10({ id, number, imageURL }: iProps) {
  // Methods
  function onClick(): void {
    alert(`Clicked on ${id}`);
  }

  return (
    <article onClick={onClick} className="item-top-10">
      <span>{number}</span>
      <img src={imageURL} />
    </article>
  );
}
