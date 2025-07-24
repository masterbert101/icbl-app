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
deployment of Real-time communications today and beyond.`,
  ];

  let awards = [
    { src: "/Avaya Black.png", alt: "Avaya Black" },
    { src: "/Avaya Clear.png", alt: "Avaya Clear" },
    { src: "/Avaya Red.png", alt: "Avaya Red" },
    { src: "/ICBL Decade.png", alt: "ICBL Decade" },
    { src: "/MEC Mitel.png", alt: "MEC Mitel" },
    { src: "/MEC Siemens 2.png", alt: "MEC Siemens 2" },
    { src: "/MEC Siemens PNG.png", alt: "MEC Siemens" },
    { src: "/NCEISC.png", alt: "NCEISC" },
    { src: "/Vstecs.png", alt: "Vstecs" },
  ];
</script>

<section class="px-4 pb-10 md:pb-20 mx-auto lg:max-w-screen-2xl">
  <div class="grid md:grid-cols-2 gap-4 md:gap-0 py-4 items-center">
    <div>
      <h2 class="text-2xl md:text-4xl font-bold mb-4">Who We Are?</h2>
      <p class="text-base md:text-xl text-gray-500 w-full lg:w-[675px]">
        IC Bestlink Telecom Corporation is a Filipino owned corporation
        providing state of the art and innovative Information & Communication
        Technology (ICT) Solutions and services for the enterprise market. IC
        Bestlink was established February 3, 2003. Powered by a workforce of 22
        years’ experience in deploying different kinds of Communications
        Solutions for various local and international partners, IC Bestlink is
        dedicated and is focused in delivering ICT designs, consultancy,
        commissioning, and managed services in the line of Legacy’s PBX’s, IP
        Converged Platforms, Voice over IP, Messaging, e-CRM applications,
        Computers and Data/Voice networking in the utmost customer-oriented
        methodologies.
      </p>
    </div>
    <img src="aboutus1.png" alt="Who we are" height="600" width="600" />
  </div>

  <div class="grid md:grid-cols-2 gap-4 md:gap-0 py-4 items-center">
    <img
      class="order-2 md:order-1"
      src="aboutus2.png"
      alt="vision"
      height="600"
      width="600"
    />
    <div class="order-1 md:order-2">
      <h2 class="text-2xl md:text-4xl font-bold mb-4">Our Vision</h2>
      <p class="text-base md:text-xl text-gray-500 w-full lg:w-[675px]">
        Our Vision is to be the leader in the Information & Communication,
        Technology Solutions deployment using different kinds of platforms
        Solutions and Professional Services covering Inside and Outside Metro
        Manila Enterprise Customers/Partners. We envision our solutions,
        services and process to be the leader in Customer advocacy and
        customer-oriented methodologies both in the commercial and technical
        aspects.
      </p>
    </div>
  </div>

  <div
    class="my-10 lg:my-20 shadow-[0px_-1px_17px_-2px_rgba(0,_0,_0,_0.45)] py-8 md:py-12 px-12 md:px-20 rounded-3xl mx-auto max-w-5xl"
  >
    <h2 class="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-[#0a0e30]">
      Our Mission
    </h2>
    <ul class="list-disc list-inside space-y-6 md:space-y-8">
      {#each missions as mission}
        <li class="text-[#0a0e30] text:lg md:text-xl">{mission}</li>
      {/each}
    </ul>
  </div>

  <div class="py-10 lg:py-20 bg-[#0a0e30] rounded-3xl">
    <h2 class="text-3xl md:text-5xl font-bold text-center text-white">
      Awards and Recognition
    </h2>
    <ul
      class="grid grid-cols-2 md:grid-cols-3 gap-y-10 justify-items-center items-center pt-10 lg:pt-20"
    >
      {#each awards as award}
        <li>
          <div
            class="w-[150px] h-[150px] lg:w-[400px] lg:h-[400px] bg-white rounded-full overflow-hidden shadow-lg flex justify-center items-center"
          >
            <img src={award.src} alt={award.alt} width="250" height="250" />
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>
