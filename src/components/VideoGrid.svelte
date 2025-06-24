<script lang="ts">
  import {
    buildApiUrl,
    buildImageUrl,
    fetchApiVideoResponse,
    type VideoType,
  } from "~/utils/archive";
  import VideoGridItem from "./VideoGridItem.svelte";
  let { videoPath, videoType }: { videoPath: string; videoType: VideoType } =
    $props();

  const path = buildApiUrl(videoPath, videoType);
  const request = fetchApiVideoResponse(path);
</script>

<div class="p-2">
  {#await request}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {#each [0, 1, 2, 3, 4, 5] as {}}
        <div class="w-full animate-pulse">
          <div class="bg-gray-700 aspect-video rounded w-full flex align-items-center justify-center">
            <div class="m-auto size-10 iconify line-md--loading-twotone-loop"></div>
          </div>
          <div class="bg-gray-700 h-4 w-2/3 rounded-2xl mt-4"></div>
          <div class="bg-gray-700 h-2 w-1/3 rounded mt-4"></div>
        </div>
      {/each}
    </div>
  {:then videos}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-2">
      {#each videos as video}
        <VideoGridItem {video} {videoPath} {videoType}></VideoGridItem>
      {/each}
    </div>
  {:catch error}
    <p>Something went horribly wrong... {error}</p>
  {/await}
</div>
