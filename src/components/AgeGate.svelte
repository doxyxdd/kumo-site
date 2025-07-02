<script lang="ts">
    import { adult } from "~/stores/age";
    let { children } = $props();
</script>

{#if $adult === 'yes'}
    {@render children?.()}
{:else if $adult === 'no'}
    <div>This content is NSFW and not suitable for minors.</div>
{:else}
    <div class="w-full h-full">
        <h2 class="text-4xl text-center">Are you over 18 years of age?</h2>
        <div class="flex m-4 w-full justify-center gap-12">
            <button class="py-2 px-6 text-2xl bg-gray-800 ring-2 rounded cursor-pointer" onclick={() => $adult = 'yes'}>Yes</button>
            <button class="py-2 px-6 text-2xl bg-gray-800 ring-2 rounded cursor-pointer" onclick={() => $adult = 'no'}>No</button>
        </div>
    </div>
{/if}
