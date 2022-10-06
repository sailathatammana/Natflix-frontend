// Fake data
import Content from "./fake-data/content.json";
import Documentaries from "./fake-data/documentaries.json";
import Movies from "./fake-data/movies.json";
import Series from "./fake-data/series.json";
import SingleDocumentary from "./fake-data/singleDocumentary.json";
import SingleMovie from "./fake-data/singleMovie.json";
import SingleSerie from "./fake-data/singleSerie.json";

// Project files
import iDetailsOther from "interfaces/iDetailsOther";
import iDetailsSeries from "interfaces/iDetailsSeries";

export default function fakeServer(endPoint: string, id: number): any {
  let result;

  switch (endPoint) {
    case "content":
      result = Content;
      break;
    case "contentDetails":
      result = getContentDetails(id);
      break;
    case "movies":
      result = Movies;
      break;
    case "documentaries":
      result = Documentaries;
      break;
    case "series":
      result = Series;
      break;
    default:
      throw new Error("invalid endpoint");
  }

  return result;
}

function getContentDetails(id: number): iDetailsOther | iDetailsSeries[] {
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
