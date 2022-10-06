// Fake data
import Content from "./fake-data/content.json";
import SingleDocumentary from "./fake-data/singleDocumentary.json";
import SingleMovie from "./fake-data/singleMovie.json";
import SingleSerie from "./fake-data/singleSerie.json";

// Project files
import iDetailsOther from "interfaces/iDetailsOther";
import iDetailsSeries from "interfaces/iDetailsSeries";
import iContent from "interfaces/iContent";

export default function fakeServer(endPoint: string, data: any = null): any {
  switch (endPoint) {
    // Content
    case "content/":
      return Content;
    case "content/create/":
      return contentCreate(data);
    case "content/delete/":
      return contentDelete(data);
    case "content/update/":
      return contentUpdate(data);

    // Details
    case "details/:content-type/:id":
      return detailsContentType(data);
    case "details/:content-type/create/:id":
      return detailsContentType(data);
    case "details/:content-type/create/:id":
      return detailsContentType(data);
    case "details/:content-type/create/:id":
      return detailsContentType(data);

    // Search
    case "search/:query":
      return searchQuery(data);

    // Exception
    default:
      throw new Error(`invalid endpoint ${endPoint}`);
  }
}

// Content
function contentCreate(item: iContent): string {
  return `Created new content ${item.title}`;
}

function contentUpdate(id: number): string {
  return `Updated content with id ${id}`;
}

function contentDelete(id: number): string {
  return `Deleted content with id ${id}`;
}

// Details
function detailsContentType(id: number): iDetailsOther | iDetailsSeries[] {
  const content = Content.filter((item) => item.id === id)[0];

  switch (content.type_id) {
    case 1:
      return SingleSerie;
    case 2:
      return SingleMovie;
    case 3:
      return SingleDocumentary;
    default:
      throw new Error(`Invalid type id ${id}`);
  }
}

// Search
function searchQuery(query: string): string {
  return `No search results for ${query}`;
}
