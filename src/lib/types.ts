export interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    channelId: string;
    title: string;
    description: string;
    channelTitle: string;
    thumbnails: {
      high: {
        url: string;
      };
      default: {
        url: string;
      };
    };
  };
}
