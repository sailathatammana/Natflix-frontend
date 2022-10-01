interface iProps {
  id: number;
  imageURL: string;
}

export default function CardBasic({ id, imageURL }: iProps) {
  // Methods
  function onClick(): void {
    alert(`Clicked on ${id}`);
  }

  return (
    <article onClick={onClick} className="card-basic">
      <img src={imageURL} />
    </article>
  );
}
