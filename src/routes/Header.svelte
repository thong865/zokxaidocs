<script>
	import { page } from "$app/stores";
	import { _ } from "svelte-i18n";
	let navbar = [
		{
			path: "/",
			title: "nav.home",
		},
		{
			path: "/news",
			title: "nav.news",
		},
		{
			path: "/how-to-payment",
			title: "nav.how-to-payment",
		},
		{
			path: "/rules",
			title: "nav.rules",
		},
	];
	$: curRoute = $page.url.pathname;
	$: layNvclass = curRoute == '/' ? 'absolute' : 'relative';
</script>

<header class="{layNvclass} w-full backdrop-blur-sm bg-white/5 print:hidden">
	<div class="navbar max-w-5xl mx-auto sticky top-0">
		<div class="navbar-start">
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</div>
				<ul
					class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
				>
					{#each navbar as nt}
						<li><a href={nt.path}>{$_(nt.title)}</a></li>
					{/each}
				</ul>
			</div>
			<a href="/" class="btn btn-ghost text-xl">ZXF|ຫ້ອງແຖວໂຊກໄຊ</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				{#each navbar as nt}
					<li><a href={nt.path}>{$_(nt.title)}</a></li>
				{/each}
			</ul>
		</div>
		<div class="navbar-end">
			<a href="/login" class="btn">ເຂົ້າສູ່ລະບົບ</a>
		</div>
	</div>
</header>
