<script>
    export let type = "text";
    export let value = "";
    export let label = "";
    export let mserr = "";
    const typeWorkaround = (node) => (node.type = type);
</script>

<label class="form-control w-full">
    {#if label}
        <div class="label">
            <span class="label-text">{label}</span>
        </div>
    {/if}
    <div class="flex input input-bordered w-full items-center gap-2">
        <slot name="icon"/>
        <input
            use:typeWorkaround
            bind:value
            placeholder="Type here"
        />
    </div>
    
    {#if mserr}
        <div class="label">
            <span class="label-text-alt">{mserr}</span>
        </div>
    {/if}
</label>
