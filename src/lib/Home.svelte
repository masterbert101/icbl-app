<script>
	import { onMount, onDestroy } from 'svelte';
	import Button from './Button.svelte';

	let clientsLogo = [
		{ src: '/Acer.png', alt: 'Acer' },
		{ src: '/Asus.png', alt: 'Asus' },
		{ src: '/911.png', alt: '911' },
		{ src: '/Accupower.png', alt: 'Accupower' },
		{ src: '/Acserve.png', alt: 'Acserve' },
		{ src: '/Alcatel.png', alt: 'Alcatel' },
		{ src: '/Aoc.png', alt: 'Aoc' },
		{ src: '/APC.png', alt: 'APC' },
		{ src: '/Bosch.png', alt: 'Bosch' },
		{ src: '/Canon.png', alt: 'Canon' },
		{ src: '/Cisco.png', alt: 'Cisco' },
		{ src: '/Citrix.png', alt: 'Citrix' },
		{ src: '/D Link.png', alt: 'D Link' },
		{ src: '/Dahua.png', alt: 'Dahua' },
		{ src: '/Dell.png', alt: 'Dell' },
		{ src: '/Delta.png', alt: 'Delta' },
		{ src: '/Epson.png', alt: 'Epson' },
		{ src: '/Fortinet.png', alt: 'Fortinet' },
		{ src: '/Fujitsu.png', alt: 'Fujitsu' },
		{ src: '/Hikvision.png', alt: 'Hikvision' },
		{ src: '/Logitech.png', alt: 'Logitech' },
		{ src: '/Microsoft.png', alt: 'Microsoft' },
		{ src: '/Mitel.png', alt: 'Mitel' },
		{ src: '/Nec.png', alt: 'Nec' },
		{ src: '/NetApp.png', alt: 'NetApp' },
		{ src: '/Nuance.png', alt: 'Nuance' },
		{ src: '/Panasonic.png', alt: 'Panasonic' },
		{ src: '/Panduit.png', alt: 'Panduit' },
		{ src: '/Quantum.png', alt: 'Quantum' },
		{ src: '/Samsung.png', alt: 'Samsung' },
		{ src: '/Sandisk.png', alt: 'Sandisk' },
		{ src: '/Seagate.png', alt: 'Seagate' },
		{ src: '/Sketchup.png', alt: 'Sketchup' },
		{ src: '/Sonic Wall.png', alt: 'Sonic Wall' },
		{ src: '/Sophos.png', alt: 'Sophos' },
		{ src: '/Televic.png', alt: 'Televic' },
		{ src: '/TOA.png', alt: 'TOA' },
		{ src: '/Toshiba.png', alt: 'Toshiba' },
		{ src: '/TP Link.png', alt: 'TP Link' },
		{ src: '/Ubiquiti.png', alt: 'Ubiquiti' },
		{ src: '/Unify.png', alt: 'Unify' },
		{ src: '/View Sonic.png', alt: 'View Sonic' },
		{ src: '/Yeastar.png', alt: 'Yeastar' }
	];

	let icblClient = [
		{
			svg: `<svg
							width="30px"
							height="30px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7 10C7 8.58579 7 7.87868 7.43934 7.43934C7.87868 7 8.58579 7 10 7H14C15.4142 7 16.1213 7 16.5607 7.43934C17 7.87868 17 8.58579 17 10V14C17 15.4142 17 16.1213 16.5607 16.5607C16.1213 17 15.4142 17 14 17H10C8.58579 17 7.87868 17 7.43934 16.5607C7 16.1213 7 15.4142 7 14V10Z"
								stroke="#fff"
								stroke-width="1.5"
							/>
							<path
								d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z"
								stroke="#fff"
								stroke-width="1.5"
							/>
							<path d="M4 12H2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M22 12H20" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M4 9H2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M22 9H20" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M4 15H2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M22 15H20" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M12 20L12 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M12 2L12 4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M9 20L9 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M9 2L9 4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M15 20L15 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M15 2L15 4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
						</svg>`,
			title: 'Lorem ipsum dolor',
			excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
		},
		{
			svg: `<svg
							width="30px"
							height="30px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7 10C7 8.58579 7 7.87868 7.43934 7.43934C7.87868 7 8.58579 7 10 7H14C15.4142 7 16.1213 7 16.5607 7.43934C17 7.87868 17 8.58579 17 10V14C17 15.4142 17 16.1213 16.5607 16.5607C16.1213 17 15.4142 17 14 17H10C8.58579 17 7.87868 17 7.43934 16.5607C7 16.1213 7 15.4142 7 14V10Z"
								stroke="#fff"
								stroke-width="1.5"
							/>
							<path
								d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z"
								stroke="#fff"
								stroke-width="1.5"
							/>
							<path d="M4 12H2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M22 12H20" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M4 9H2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M22 9H20" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M4 15H2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M22 15H20" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M12 20L12 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M12 2L12 4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M9 20L9 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M9 2L9 4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M15 20L15 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M15 2L15 4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
						</svg>`,
			title: 'Lorem ipsum dolor',
			excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
		},
		{
			svg: `<svg
							width="30px"
							height="30px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7 10C7 8.58579 7 7.87868 7.43934 7.43934C7.87868 7 8.58579 7 10 7H14C15.4142 7 16.1213 7 16.5607 7.43934C17 7.87868 17 8.58579 17 10V14C17 15.4142 17 16.1213 16.5607 16.5607C16.1213 17 15.4142 17 14 17H10C8.58579 17 7.87868 17 7.43934 16.5607C7 16.1213 7 15.4142 7 14V10Z"
								stroke="#fff"
								stroke-width="1.5"
							/>
							<path
								d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z"
								stroke="#fff"
								stroke-width="1.5"
							/>
							<path d="M4 12H2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M22 12H20" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M4 9H2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M22 9H20" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M4 15H2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M22 15H20" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M12 20L12 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M12 2L12 4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M9 20L9 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M9 2L9 4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M15 20L15 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M15 2L15 4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
						</svg>`,
			title: 'Lorem ipsum dolor',
			excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
		},
		{
			svg: `<svg
							width="30px"
							height="30px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7 10C7 8.58579 7 7.87868 7.43934 7.43934C7.87868 7 8.58579 7 10 7H14C15.4142 7 16.1213 7 16.5607 7.43934C17 7.87868 17 8.58579 17 10V14C17 15.4142 17 16.1213 16.5607 16.5607C16.1213 17 15.4142 17 14 17H10C8.58579 17 7.87868 17 7.43934 16.5607C7 16.1213 7 15.4142 7 14V10Z"
								stroke="#fff"
								stroke-width="1.5"
							/>
							<path
								d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z"
								stroke="#fff"
								stroke-width="1.5"
							/>
							<path d="M4 12H2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M22 12H20" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M4 9H2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M22 9H20" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M4 15H2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M22 15H20" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M12 20L12 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M12 2L12 4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M9 20L9 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M9 2L9 4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M15 20L15 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
							<path d="M15 2L15 4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
						</svg>`,
			title: 'Lorem ipsum dolor',
			excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
		}
	];

	let news = [
		{ src: 'news1.webp', title: 'News 1', excerpt: 'Lorem ipsum lorem ipsum' },
		{ src: 'news1.webp', title: 'News 2', excerpt: 'Lorem ipsum lorem ipsum' },
		{ src: 'news3.webp', title: 'News 3', excerpt: 'Lorem ipsum lorem ipsum' },
		{ src: 'news3.webp', title: 'News 4', excerpt: 'Lorem ipsum lorem ipsum' }
	];

	let container = $state();
	let track = $state();
	let speed = $state(60);
	let pos = $state(0);
	let start = $state(null);
	let rafId;
	let trackWidth = $state(0);

	function animate(timestamp) {
		if (!start) start = timestamp;

		const elapsed = timestamp - start;
		pos = -(elapsed / 1000) * speed;

		if (Math.abs(pos) >= trackWidth) {
			start = timestamp;
			pos = 0;
		}

		container.style.transform = `translateX(${pos}px)`;
		rafId = requestAnimationFrame(animate);
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			trackWidth = track.getBoundingClientRect().width;
			container.style.width = `${trackWidth}px`;
			rafId = requestAnimationFrame(animate);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			cancelAnimationFrame(rafId);
			if (container) container.style.transform = '';
		}
	});
</script>

<section class="relative bg-[#0a0e30]">
	<!-- Hero -->
	<div class="relative h-175 md:h-screen overflow-hidden">
		<header class="absolute bottom-0 left-0 md:w-[650px] z-999 px-4 md:px-16 py-16">
			<h1 class="text-white text-4xl font-bold lg:text-8xl">
				Your BEST link to the Future of Communications!
			</h1>

			<p class="text-white text-sm md:text-lg my-4">
				Delivering cutting-edge ICT solutions, telecommunications services, and innovative products
				that empower a better, connected life — driving technology forward.
			</p>
			<Button text="Contact Us" />
		</header>
		<spline-viewer url="https://prod.spline.design/0TcuxsszFRJmc6N0/scene.splinecode"
		></spline-viewer>
		<div class="bg-gradient"></div>
	</div>
</section>

<!-- Moving banner -->
<section class="pt-8 p-0 relative flex gap-4 items-center md:pt-12 md:p-12">
	<div class="wrapper">
		<div class="marquee">
			<div bind:this={container} class="marquee-container">
				<div bind:this={track} class="marquee-track">
					{#each clientsLogo as { src, alt }}
						<div class="marquee-item">
							<img class="block max-w-full object-cover" {src} {alt} />
						</div>
					{/each}
				</div>
				<!-- duplicate for looping effect -->
				<div class="marquee-track" aria-hidden="true">
					{#each clientsLogo as { src, alt }}
						<div class="marquee-item">
							<img class="block max-w-full object-cover" {src} {alt} />
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ICBL client -->
<section class="pt-8 px-4 items-center md:pt-12 md:p-12 max-w-7xl mx-auto">
	<div class="text-left md:text-center mb-12 w-full">
		<div class="">
			<h2 class="text-sm font-bold my-2">ICBL CLIENTS</h2>
			<h3 class="text-2xl font-bold">15k+ companies across the globe growing further with ICBL</h3>
			<p class="text-base mt-2 font-medium">
				4 of the 5 largest companies in the world trust ICBL for outsourced sales and marketing
				solutions.
			</p>
		</div>
	</div>

	<ul class="grid md:flex gap-4 md:gap-8">
		{#each icblClient as { title, excerpt, svg }}
			<li class="bg-white py-6 px-8 rounded-2xl shadow-xl/20">
				<div class="inline-block bg-[#0a0e30] rounded-full p-4">
					{@html svg}
				</div>
				<h3 class="text-xl font-bold">{title}</h3>
				<p class="font-medium text-base">{excerpt}</p>
			</li>
		{/each}
	</ul>
</section>

<!--news and update -->
<section class="pt-8 px-4 md:pt-12 md:p-12 grid gap-8 md:grid-cols-[2fr_3fr] max-w-7xl mx-auto">
	<div class="text-left w-full">
		<div class="clients-text-wrapper">
			<h2 class="text-2xl font-bold my-2">NEWS and UPDATES</h2>
			<p class="text-base mt-2 font-medium">
				4 of the 5 largest companies in the world trust ICBL for outsourced sales and marketing
				solutions.
			</p>
			<button>Send us a message</button>
		</div>
	</div>

	<ul class="grid md:grid-cols-2 gap-4">
		{#each news as n}
			<li class="bg-white p-4 rounded-2xl shadow-xl/20">
				<div>
					<img
						class="block w-full object-cover w-full h-[350px] rounded-xl"
						src={n.src}
						alt={n.title}
						width="350"
						height="350"
					/>
				</div>
				<h3 class="text-xl mt-4">{n.title}</h3>
				<p class="text-base mt-1">{n.excerpt}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.bg-gradient {
		bottom: 0;
		position: absolute;
		height: 30%;
		width: 100%;
		pointer-events: none;
		z-index: 99;
		background: linear-gradient(
			180deg,
			rgba(255, 254, 254, 0) 0%,
			rgb(10, 14, 48) 80%,
			rgb(10, 14, 48) 100%
		);
	}

	.wrapper {
		display: grid;
		place-content: center;
		height: 100%;
	}

	.marquee {
		overflow: hidden;
		position: relative;
		mask-image: linear-gradient(
			var(--mask-direction, to right),
			hsl(0 0% 0% / 0),
			hsl(0 0% 0% / 1) 10%,
			hsl(0 0% 0% / 1) 90%,
			hsl(0 0% 0% / 0)
		);
	}

	.marquee-container {
		display: flex;
		width: 100%;
	}

	.marquee-track {
		display: flex;
	}

	@supports (-webkit-touch-callout: none) {
		.marquee-container {
			transform: translate3d(0, 0, 0) scale(1);
			perspective: 1px;
		}
	}

	.marquee-item {
		display: flex;
		align-items: center;
		justify-content: center;

		flex-shrink: 0;

		width: 160px;
		margin-inline-end: 3rem;
	}
</style>
