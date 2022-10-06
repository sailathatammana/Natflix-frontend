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
import iContent from "interfaces/iContent";

export default function fakeServer(endPoint: string, data: any = null): any {
  let result;

  switch (endPoint) {
    case "content/":
      result = Content;
      break;
    case "details/":
      result = getDetails(data);
      break;
    case "movies/":
      result = Movies;
      break;
    case "documentaries/":
      result = Documentaries;
      break;
    case "series/":
      result = Series;
      break;
    case "content/create/":
      result = createContent(data);
      break;
    case "content/edit/":
      result = editContent(data);
      break;
    case "content/delete/":
      result = deleteContent(data);
      break;
    default:
      throw new Error(`invalid endpoint ${endPoint}`);
  }

  return result;
}

function getDetails(id: number): iDetailsOther | iDetailsSeries[] {
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
      throw new Error(`Invalid type id ${id}`);
  }

  return result;
}

function createContent(item: iContent) {
  return { data: `Created new content ${item.title}` };
}

function editContent(id: number) {
  return { data: `Updated content with id ${id}` };
}
