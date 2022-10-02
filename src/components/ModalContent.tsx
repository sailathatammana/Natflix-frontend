interface iProps {
  id: number;
}

export default function ModalContent({ id }: iProps) {
  return (
    <div className="modal-content">
      <h1>Modal content</h1>
      <p>id: @{id}@</p>
    </div>
  );
}
