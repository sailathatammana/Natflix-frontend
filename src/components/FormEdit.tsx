import iContent from "interfaces/iContent";
import iDetailsOther from "interfaces/iDetailsOther";
import iDetailsSeries from "interfaces/iDetailsSeries";

interface iProps {
  endPoint: string;
  fields: Array<any>;
  item: iContent | iDetailsOther | iDetailsSeries;
}

export default function FormEdit({ endPoint, fields, item }: iProps) {
  return <form className="form-edit"></form>;
}
