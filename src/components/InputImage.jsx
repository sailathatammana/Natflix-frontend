// Project files
import Placeholder from "assets/images/placeholders/card-basic.png";
import readFile from "scripts/resize-image/readFile";
import resizeImage from "scripts/resize-image/resizeImage";

export default function InputImage({ fields, state }) {
  const { key, label, imageWidth } = fields;
  const [value, setValue] = state;

  // Properties
  const selectedImage = value[key];
  const imageURL = selectedImage === undefined ? Placeholder : selectedImage;

  // Methods
  async function onChange(event) {
    const file = event.target.files[0];
    const image = await readFile(file);
    const resizedImage = await resizeImage(image, 500);
    const finalImage = await readFile(resizedImage);

    const clonedItem = { ...value };
    clonedItem[key] = finalImage;

    setValue(clonedItem);
  }

  return (
    <label className="input input-image">
      <span>{label}:</span>
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={(event) => onChange(event)}
      />
      <img
        src={imageURL}
        onError={(event) => (event.currentTarget.src = Placeholder)}
      />
    </label>
  );
}
