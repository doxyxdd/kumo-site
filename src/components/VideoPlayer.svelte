<script lang="ts">
    import { coerceToVideoType, type VideoType } from "~/utils/archive";

    function buildVideoUrl(videoPath: string, videoType: string, videoId: string) {
        return `${videoPath}/${videoType}/${videoId}.mp4`;
    }

    let { videoPath } = $props();

    const params = new URLSearchParams(window.location.search)
    const videoType = coerceToVideoType(params.get('type'))
    const videoId = params.get('id') || 'unknown'
    let src = buildVideoUrl(videoPath, videoType, videoId)
</script>

{#if videoType === 'unknown'}
<h1 class="text-2xl">Invalid Params!</h1>
<p>The <code>type</code> param must be valid and included!</p>
{:else if videoId === 'unknown'}
<h1 class="text-2xl">Invalid Params!</h1>
<p>Missing the <code>id</code> http parameter!</p>
{:else}
<!-- svelte-ignore a11y_media_has_caption -->
<div class="p-4 w-full">
    <video class="w-full" preload="metadata" controls>
        <source {src} type="video/mp4">
    </video>
</div>

{/if}


