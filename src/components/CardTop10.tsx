interface iProps {
  id: number;
  number: number;
  imageURL: string;
}

export default function CardTop10({ id, number, imageURL }: iProps) {
  // Methods
  function onClick(): void {
    alert(`Clicked on ${id}`);
  }

  return (
    <article onClick={onClick} className="card-top-10">
      <span>{number}</span>
      <img src={imageURL} />
    </article>
  );
}
