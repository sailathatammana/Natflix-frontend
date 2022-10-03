/**
 * About:
 * The additional details a series need to its seasons and episodes in the content modal
 */
export default interface iDetailsSeries {
  id: number;
  content_id: number;
  season: number;
  episode: number;
  title: string;
  summary: string;
  thumbnail_url: string;
  video_code: string;
}
