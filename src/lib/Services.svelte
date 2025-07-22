<script>
	let professionalServices = [
		'In-house Voice or Data Wiring',
		'Structured Cabling',
		'System Installation and Commissioning',
		'CCTV Installations',
		'System Relocations',
		'Repair and Maintenance for Voice and Data',
		'Data Center Solutions',
		'Software Upgrades and Licensing Solutions',
		'Consultancy',
		'Solution Integration',
		'Application Programming',
		'System Traffic Evaluation & Recommendation',
		'Training Programs',
		'Free Estimate/Project Survey'
	];

	let managedServices = [
		'On Call Services',
		'Call Billing Report',
		'PABX Leasing and Rental Agreement',
		'Basic Maintenance Agreement',
		'Quarterly Maintenance Agreement',
		'Semi-Annual Maintenance Agreement',
		'Annual Maintenance Agreement',
		'On-Call Services/24 Hour Support'
	];
</script>

<section class="md:py-40 py-20 grid gap-15" id="upgrade">
	<div
		class="container mx-auto lg:max-w-screen-xl px-4 shadow-[0px_-1px_17px_-2px_rgba(0,_0,_0,_0.45)]
 py-16 px-16 rounded-[2rem]"
	>
		<div class="grid lg:grid-cols-2 sm:gap-4 gap-10 items-center">
			<div>
				<p class="text-[#110467] sm:text-sm uppercase font-bold text-18 mb-3">Services</p>
				<h2 class="text-primary sm:text-2xl text-30 font-semibold mb-8">PROFESSIONAL SERVICES</h2>
				<div class="grid sm:grid-cols-2 lg:w-70% text-nowrap sm:gap-8 gap-5">
					{#each professionalServices as service, index}
						<div key={index} class="flex gap-5">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									class="iconify iconify--la text-white group-hover:text-primary"
									width="24"
									height="24"
									viewBox="0 0 32 32"
									><path
										fill="#110467"
										d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5c0 6.102-4.898 11-11 11S5 22.102 5 16S9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3m11.281 4.281L16 18.563l-4.281-4.282l-1.438 1.438l5 5l.719.687l.719-.687l12-12z"
									></path></svg
								>
							</div>
							<div>
								<h4 class="text-base text-muted text-opacity-70 text-wrap">
									{service}
								</h4>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<div>
				<div>
					<img class="-mr-5" width="625" height="580" src="/services1.webp" alt="service page" />
				</div>
			</div>
		</div>
	</div>

	<div
		class="container mx-auto lg:max-w-screen-xl px-4 shadow-[0px_-1px_17px_-2px_rgba(0,_0,_0,_0.45)]
 py-16 px-16 rounded-[2rem]"
	>
		<div class="grid lg:grid-cols-2 sm:gap-4 gap-10 items-center">
			<div>
				<div>
					<img class="-mr-5" width="625" height="580" src="/services2.webp" alt="service page" />
				</div>
			</div>
			<div>
				<p class="text-[#110467] sm:text-sm uppercase font-bold text-18 mb-3">Services</p>
				<h2 class="text-primary sm:text-2xl text-30 font-semibold mb-8">MANAGED SERVICES</h2>
				<div class="grid sm:grid-cols-2 lg:w-70% text-nowrap sm:gap-10 gap-5">
					{#each managedServices as service, index}
						<div key={index} class="flex gap-5">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									class="iconify iconify--la text-white group-hover:text-primary"
									width="24"
									height="24"
									viewBox="0 0 32 32"
									><path
										fill="#110467"
										d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5c0 6.102-4.898 11-11 11S5 22.102 5 16S9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3m11.281 4.281L16 18.563l-4.281-4.282l-1.438 1.438l5 5l.719.687l.719-.687l12-12z"
									></path></svg
								>
							</div>
							<div>
								<h4 class="text-base text-muted text-opacity-60 text-wrap">
									{service}
								</h4>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
