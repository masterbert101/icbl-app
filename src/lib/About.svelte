<script>
	let missions = [
		`IC Bestlink functions to provide the ICT market the Bestlink towards innovative and state of the art Enterprise
Communications Design, Consultancy and Solutions Deployment.`,
		`IC Bestlink functions to provide the ICT market in the Bestlink towards Customer-Oriented enterprise
Communications Professional and Manage Services`,
		`IC Bestlink functions to provide the ICT market Bestlink towards an economical and flexible commercial
arrangement catered to the demanding and price sensitive Philippine ICT market.`,
		`IC Bestlink functions to provide our staff and manpower the Bestlink towards a clear and achievable career
advancement and fulfillment in the practice of Information and Communications Technology.`,
		`IC Bestlink functions to provide the ICT industry including ourselves the fulfillment in the realization and
deployment of Real-time communications today and beyond.`
	];

	let awards = [
		{ src: '/award1.webp', title: 'Award 1' },
		{ src: '/award2.webp', title: 'Award 2' },
		{ src: '/award3.webp', title: 'Award 3' },
		{ src: '/award4.webp', title: 'Award 4' }
	];
</script>

<section class="p-4 md:pt-12 md:p-12">
	<div class="flex md:grid grid-cols-2 lg:py-20">
		<div>
			<h2 class="text-3xl font-bold mb-4">Who We Are?</h2>
			<p class="text-lg text-gray-700">
				IC Bestlink Telecom Corporation is a Filipino owned corporation providing state of the art
				and innovative Information & Communication Technology (ICT) Solutions and services for the
				enterprise market. IC Bestlink was established February 3, 2003. Powered by a workforce of
				22 years’ experience in deploying different kinds of Communications Solutions for various
				local and international partners, IC Bestlink is dedicated and is focused in delivering ICT
				designs, consultancy, commissioning, and managed services in the line of Legacy’s PBX’s, IP
				Converged Platforms, Voice over IP, Messaging, e-CRM applications, Computers and Data/Voice
				networking in the utmost customer-oriented methodologies.
			</p>
			<button>Know More</button>
		</div>
		<img src="" alt="" />
	</div>

	<div class="flex md:grid grid-cols-2 lg:py-20">
		<img src="" alt="" />
		<div>
			<h2 class="text-3xl font-bold mb-4">Who We Are?</h2>
			<p class="text-lg text-gray-700">
				Our Vision is to be the leader in the Information & Communication, Technology Solutions
				deployment using different kinds of platforms Solutions and Professional Services covering
				Inside and Outside Metro Manila Enterprise Customers/Partners. We envision our solutions,
				services and process to be the leader in Customer advocacy and customer-oriented
				methodologies both in the commercial and technical aspects.
			</p>
			<button>Know More</button>
		</div>
	</div>

	<div class="lg:my-20 bg-sky-800 py-10 px-16 rounded-3xl">
		<h2 class="text-3xl font-bold mb-4">Our Mission</h2>
		<ul>
			{#each missions as mission}
				<li>{mission}</li>
			{/each}
		</ul>
		<button>Know More</button>
	</div>

	<div class="lg:py-20">
		<h2 class="text-3xl font-bold mb-4 text-center">Awards and Recognition</h2>
		<ul>
			{#each missions as mission}
				<li>
					<div>
						<img src="" alt="" />
						<span>
							{mission}
						</span>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
