<script lang="ts">
    import { buildImageUrl, buildWatchLink, type VideoDetails, type VideoType } from '~/utils/archive'
    import { getRelativeTime } from '~/utils/std';
    let { videoPath, videoType, video }: { videoPath: string, videoType: VideoType, video: VideoDetails } = $props();

    let imageUrl = buildImageUrl(videoPath, videoType, video.id)
    let watchLink = buildWatchLink(videoType, video.id)
</script>

<a class="relative group" href={watchLink}>
    <img class="aspect-video w-full" src={imageUrl} alt="video thumbnail" />
    <div class="font-bold group-hover:underline pt-1">{video.title}</div>
    <div class="font-light text-xs text-gray-300 font-mono italic">{getRelativeTime(video.createdAt)}</div>
    <div class="absolute top-0.5 left-0.5 bg-black font-mono opacity-80">{video.duration}</div>
</a>
