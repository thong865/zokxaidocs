<script>
	import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
	import { addMessages, init } from "svelte-i18n";
	import en from "../locals/en.json";
	import lo from "../locals/la.json";
	import Header from "./Header.svelte";
	import "../app.css";

	injectSpeedInsights();

	addMessages("en", en);
	addMessages("lo", lo);
	init({
		initialLocale: "lo",
	});
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
</div>
