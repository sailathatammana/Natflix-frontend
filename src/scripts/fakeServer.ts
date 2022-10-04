// Project files
import iContent from "interfaces/iContent";
import iDetailsOther from "interfaces/iDetailsOther";
import iDetailsSeries from "interfaces/iDetailsSeries";
import Content from "./fake-data/content.json";
import SingleMovie from "./fake-data/singleMovie.json";
import SingleSerie from "./fake-data/singleSerie.json";
import SingleDocumentary from "./fake-data/singleDocumentary.json";

export default function fakeServer(endPoint: string, id: number): any {
  let result: any;

  switch (endPoint) {
    case "content":
      result = content();
      break;
    case "contentDetails":
      result = contentDetails(id);
      break;
    default:
      throw new Error("invalid endpoint");
  }

  return result;
}

function content(): Array<iContent> {
  const result = Content;

  return result;
}

function contentDetails(id: number): iDetailsOther | iDetailsSeries[] {
  const content = Content.filter((item) => item.id === id)[0];
  let result: iDetailsOther | iDetailsSeries[];

  switch (content.type_id) {
    case 1:
      result = SingleSerie;
      break;
    case 2:
      result = SingleMovie;
      break;
    case 3:
      result = SingleDocumentary;
      break;
    default:
      throw new Error("Invalid type id");
  }

  return result;
}
