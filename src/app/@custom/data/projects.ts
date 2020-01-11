export declare interface Project {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: ObjectResult;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: Status;
  type: string;
  link: string;
  title: StringOrObjectResult;
  content: StringOrObjectResult;
  excerpt: StringOrObjectResult;
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

declare type Status = 'draft' | 'publish' | 'pending' | 'private';
declare interface ObjectResult {
  rendered: string;
  protected?: boolean;
}
declare type StringOrObjectResult = string | ObjectResult;
declare interface Link {
  embeddable?: boolean;
  href: string;
}
