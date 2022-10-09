// Project files
import eInputFieldType from "./eInputFieldType";

export default interface iInputField {
  key: string;
  label: string;
  autoFocus: boolean;
  placeholder: string;
  type: eInputFieldType;
  required: boolean;
}
