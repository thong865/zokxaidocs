<script>
	import { _ } from "svelte-i18n";
</script>

<svelte:head>
	<title>ຫ້ອງແຖວໂຊກໄຊ</title>
	<meta name="description" content="ຫ້ອງແຖວໂຊກໄຊ,ຫ້ອງແຖວ,ຫ້ອງເຊົ່າ" />
</svelte:head>

<section>
	<div
		class="hero min-h-screen"
		style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);"
	>
		<div class="hero-overlay bg-opacity-60"></div>
		<div class="hero-content text-neutral-content">
			<div class="max-w-md">
				<div class="text-left">
					<h2 class="mb-2 text-2xl font-bold">
						{$_("HomePage.sec1.welcome")}
					</h2>
					<h1 class="mb-5 text-5xl font-bold">
						{$_("HomePage.sec1.title")}
					</h1>
					<p class="mb-5 text-2xl">
						ໄກ້ກັບເສດຖະກິດນົນທອງ ຫຼັກ 21,
						ມີສິ່ງອຳນວຍຄວາມສະດວກອ້ອມຮອບ: ຕະຫຼາດ, ປ້ຳນ້ຳມັນ ແລະ
						ອື່ນໆ.
					</p>
				</div>
				<button class="btn btn-primary">ຕິດຕໍ່ສອບຖາມ</button>
			</div>
		</div>
	</div>
</section>
<section>
	<div
		class="hero min-h-screen"
		style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);"
	>
		<div class="hero-overlay bg-opacity-60"></div>
		<div class="hero-content text-neutral-content text-center">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">ສະຖານທີ</h1>
				<p class="mb-5">ບ້ານ. ເມືອງ ນະຄອນຫຼວງວຽງຈັນ</p>
				<button class="btn btn-primary">ເບິ່ງແຜນທີ</button>
			</div>
		</div>
	</div>
</section>

<style>
</style>
