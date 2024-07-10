<script>
    import { _ } from "svelte-i18n";
    let ruleItem = [1, 2, 9, 3, 4, 5, 6, 7, 8];
</script>

<svelte:head>
    <title>{$_("rules.title")}</title>
    <meta name="description" content="About this app" />
</svelte:head>
<section>
    <div class="max-w-3xl mx-auto print">
        <div class="sm:card-body">
            <div class="w-[500px] h-1 mx-auto print:block hidden">
                <svg class="w-full">
                    <path
                        id="curve"
                        class="mx-auto"
                        fill="transparent"
                        transform="translate(0,-15)"
                        d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                    />
                    <text class="text-5xl">
                        <textPath
                            xlink:href="#curve"
                            startOffset="50%"
                            text-anchor="middle"
                        >
                            {$_("zokxay-app")}
                        </textPath>
                    </text>
                </svg>
            </div>
            <div class="w-full print:h-[80px]"></div>
            <h1 class="text-center text-3xl py-5">{$_("rules.title")}</h1>
            {#each ruleItem as rit}
                <div class="rvl">
                    <div class="flex odd:border-b-2 py-2 border-primary gap-5">
                        <div class="rvl-icon-tag flex-none">
                            <img
                                src="/icrule/icrule-{rit}.svg"
                                class="w-6 h-6"
                                alt={$_("rules.title")}
                                on:error={() => rit = 1}
                            />
                        </div>
                        <p>{@html $_("rules.param" + rit)}</p>
                    </div>
                </div>
            {/each}
            <div class="flex justify-between py-5">
                <div></div>
                <p>{$_("update_date")} 09/07/2024</p>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    .rvl-icon-tag {
        background-color: #00838F;
        border-radius: 100%;
        width: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
    }
</style>
