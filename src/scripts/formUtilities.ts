import iContent from "interfaces/iContent";
import iDetailsOther from "interfaces/iDetailsOther";
import iDetailsSeries from "interfaces/iDetailsSeries";

export function generateFields(
  fields: Array<any>,
  data: iContent | iDetailsOther | iDetailsSeries
) {
  let result = {};

  fields.forEach((item) => {
    const key = item.key;

    // @ts-ignore
    result[key] = data[key];
  });

  return result;
}
