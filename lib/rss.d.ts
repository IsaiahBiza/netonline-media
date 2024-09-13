declare module 'rss' {
  import { FeedOptions, ItemOptions } from 'rss';

  class RSS {
    constructor(options: FeedOptions);
    item(item: ItemOptions): void;
    xml(options?: { indent: boolean }): string;
  }

  export = RSS;
}
