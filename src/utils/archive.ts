export const VideoTypes: ReadonlyArray<string> = ['vods', 'highlights', 'clips', 'rplay', 'unknown'] as const;
export type VideoType = typeof VideoTypes[number]

export interface VideoDetails {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  duration: string;
}


export function coerceToVideoType(videoType: unknown): VideoType {
  if (typeof videoType === 'string') {
    if (VideoTypes.includes(videoType)) {
      return videoType
    }
  }
  return "unknown";
}

export async function fetchApiVideoResponse(
  url: string,
): Promise<VideoDetails[]> {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json().then(result => {
    if (Array.isArray(result)) {
      result.forEach(item => {
        if (typeof item === "object" && 'created_at' in item) {
          item.createdAt = new Date(item.created_at)
        }
      })
    }
    return result
  }));
}

export function buildApiUrl(
  videoPath: string,
  videoType: VideoType
) {
  return `${videoPath}/api/${videoType}`
}

export function buildVideoUrl(
  videoPath: string,
  videoType: VideoType,
  videoId: string,
) {
  return `${videoPath}/${videoType}/${videoId}.mp4`;
}

export function buildImageUrl(
  videoPath: string,
  videoType: VideoType,
  videoId: string,
) {
  return `${videoPath}/${videoType}/${videoId}.jpg`;
}

export function buildWatchLink(
  videoType: VideoType,
  videoId: string
) {
  return `/archive/watch/?type=${videoType}&id=${videoId}`;
}
