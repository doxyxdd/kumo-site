<script lang="ts">
  import type { VideoType } from "~/utils/archive";
  import VideoGrid from "./VideoGrid.svelte";
  import AgeGate from "./AgeGate.svelte";

  let { videoPath, videoType }: { videoPath: string; videoType: VideoType } =
    $props();
</script>

{#if videoType === "rplay"}
  <AgeGate>
    <VideoGrid {videoPath} {videoType} />
  </AgeGate>
{:else}
  <VideoGrid {videoPath} {videoType} />
{/if}
