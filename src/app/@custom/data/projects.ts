export declare interface Project {
  id: number;
  date: string;
  date_gmt: string;
  guid: ObjectResult;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: ObjectResult;
  content: ObjectResult;
  excerpt: ObjectResult;
  author: number;
  feature_media: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: { [key: string]: string };
  project_category: number[];
  project_tag: any[];
  _links: { [key: string]: Link[] };
}

declare interface ObjectResult {
  rendered: string;
  protected?: boolean;
}
declare interface Link {
  embeddable?: boolean;
  href: string;
}
