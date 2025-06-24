<script lang="ts">
    import { buildImageUrl, buildWatchLink, type VideoDetails, type VideoType } from '~/utils/archive'
    import { getRelativeTime } from '~/utils/std';
    let { videoPath, videoType, video }: { videoPath: string, videoType: VideoType, video: VideoDetails } = $props();

    let imageUrl = buildImageUrl(videoPath, videoType, video.id)
    let watchLink = buildWatchLink(videoType, video.id)
</script>

<a class="relative group" href={watchLink}>
    <img class="aspect-video" src={imageUrl} alt="video thumbnail" />
    <div class="font-bold group-hover:underline pt-1">{video.title}</div>
    <div class="font-light text-sm">{getRelativeTime(video.createdAt)}</div>
    <div class="absolute top-0.5 left-0.5 bg-gray-900 font-mono opacity-90">{video.duration}</div>
</a>
