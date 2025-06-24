<script lang="ts">
    import { buildApiUrl, buildImageUrl, fetchApiVideoResponse, type VideoType } from '~/utils/archive';
    import VideoGridItem from './VideoGridItem.svelte';
    let { videoPath, videoType }: { videoPath: string, videoType: VideoType } = $props();

    const path = buildApiUrl(videoPath, videoType)
    const request = fetchApiVideoResponse(path)
</script>

{#await request}
<div>Put a spinner here or some bs...</div>

{:then videos}
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {#each videos as video}
        <VideoGridItem {video} {videoPath} {videoType}></VideoGridItem>
    {/each}
</div>

{:catch error}
<p>Something went horribly wrong... {error}</p>
{/await}
