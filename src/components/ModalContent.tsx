interface iProps {
  id: number;
}

export default function ModalContent({ id }: iProps) {
  // Methods
  function onClick(): void {
    // check if is a movie or series.
    // if movie get video code
    // if series get video code of S01E01
  }

  return (
    <div className="modal-content">
      <h1>Modal content</h1>
      <p>id: @{id}@</p>
      <button onClick={onClick} className="button-white">
        Play
      </button>
    </div>
  );
}
