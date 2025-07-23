<script>
  let productCategories = [
    {
      label: "Battery",
      products: [
        { src: "Maxell.png", alt: "Maxell" },
        { src: "Yuasa.png", alt: "Yuasa" },
      ],
    },
    {
      label: "Cabling",
      products: [
        { src: "Belden.png", alt: "Belden" },
        { src: "Commscope.png", alt: "Commscope" },
        { src: "Fiber Rex.png", alt: "Fiber Rex" },
        { src: "Link Basic.png", alt: "Link Basic" },
        { src: "LS Cable.png", alt: "LS Cable" },
        { src: "Panduit.png", alt: "Panduit" },
      ],
    },
    {
      label: "CCTV",
      products: [
        { src: "Avigilon.png", alt: "Avigilon" },
        { src: "Axis Communication.png", alt: "Axis Communication" },
        { src: "Dahua.png", alt: "Dahua" },
        { src: "Hanhwa Vision.png", alt: "Hanhwa Vision" },
        { src: "Hikvision.png", alt: "Hikvision" },
        { src: "LevelOne.png", alt: "LevelOne" },
        { src: "Lilin.png", alt: "Lilin" },
      ],
    },
    {
      label: "Door Security",
      products: [
        { src: "Bosch.png", alt: "Bosch" },
        { src: "Dahua.png", alt: "Dahua" },
        { src: "Hikvision.png", alt: "Hikvision" },
        { src: "Zkteco.png", alt: "Zkteco" },
      ],
    },
    {
      label: "Emergency Hotline",
      products: [{ src: "911.png", alt: "911" }],
    },
    {
      label: "Fire Alarm and Detection System",
      products: [
        { src: "Bosch.png", alt: "Bosch" },
        { src: "Dahua.png", alt: "Dahua" },
        { src: "Global Fire.png", alt: "Global Fire" },
        { src: "Hochiki.png", alt: "Hochiki" },
        { src: "Honeywell.png", alt: "Honeywell" },
        { src: "Kiddie.png", alt: "Kiddie" },
      ],
    },
    {
      label: "Network Components",
      products: [
        { src: "/Aruba.png", alt: "Aruba" },
        { src: "/Cambium Networks.png", alt: "Cambium Networks" },
        { src: "/Cisco.png", alt: "Cisco" },
        { src: "/D Link.png", alt: "D Link" },
        { src: "/Engenius.png", alt: "Engenius" },
        { src: "/Fortinet.png", alt: "Fortinet" },
        { src: "/Fujitsu.png", alt: "Fujitsu" },
        { src: "/Level One.png", alt: "Level One" },
        { src: "/Sangfor.png", alt: "Sangfor" },
        { src: "/Sendquick.png", alt: "Sendquick" },
        { src: "/Sonic Wall.png", alt: "Sonic Wall" },
        { src: "/Teltonika.png", alt: "Teltonika" },
        { src: "/TP Link.png", alt: "TP Link" },
        { src: "/Ubiquiti.png", alt: "Ubiquiti" },
      ],
    },
    {
      label: "PABX Components",
      products: [
        { src: "/Alcatel.png", alt: "Alcatel" },
        { src: "/Avaya.png", alt: "Avaya" },
        { src: "/Fanvil.png", alt: "Fanvil" },
        { src: "/Grandstream.png", alt: "Grandstream" },
        { src: "/Mitel.png", alt: "Mitel" },
        { src: "/Nec.png", alt: "Nec" },
        { src: "/Teltrac.png", alt: "Teltrac" },
        { src: "/Unify.png", alt: "Unify" },
      ],
    },
    {
      label: "Paging-Audio-Visual System",
      products: [
        { src: "/Bosch.png", alt: "Bosch" },
        { src: "/Hochiki.png", alt: "Hochiki" },
        { src: "/Honeywell.png", alt: "Honeywell" },
        { src: "/Jabra.png", alt: "Jabra" },
        { src: "/Kiddie.png", alt: "Kiddie" },
        { src: "/Saramonic.png", alt: "Saramonic" },
        { src: "/Televic.png", alt: "Televic" },
        { src: "/TOA.png", alt: "TOA" },
      ],
    },
    {
      label: "PC laptop and Server",
      products: [
        { src: "/Acer.png", alt: "Acer" },
        { src: "/Altos.png", alt: "Altos" },
        { src: "/Asus.png", alt: "Asus" },
        { src: "/Dell.png", alt: "Dell" },
        { src: "/HP.png", alt: "HP" },
        { src: "/Lenovo.png", alt: "Lenovo" },
        { src: "/Logitech.png", alt: "Logitech" },
        { src: "/Samsung.png", alt: "Samsung" },
      ],
    },
    {
      label: "Printer",
      products: [
        { src: "/Brother.png", alt: "Brother" },
        { src: "/Canon.png", alt: "Canon" },
        { src: "/Epson.png", alt: "Epson" },
        { src: "/Lexmark.png", alt: "Lexmark" },
        { src: "/Printronix.png", alt: "Printronix" },
      ],
    },
    {
      label: "Racks and Cabinets",
      products: [
        { src: "/Cable Tray.jpg", alt: "Cable Tray" },
        { src: "/Data Cabinet Wall Mount.png", alt: "Data Cabinet Wall Mount" },
        { src: "/Data Cabinet.jpg", alt: "Data Cabinet" },
        {
          src: "/Data Rack Open Type Wall Mount.jpg",
          alt: "Data Rack Open Type Wall Mount",
        },
        { src: "/Open Bay Rack.jpg", alt: "Open Bay Rack" },
        { src: "/Pull Box.jpg", alt: "Pull Box" },
        {
          src: "/Rack Mounting Components.jpg",
          alt: "Rack Mounting Components",
        },
        { src: "/Telephone Cabinet.jpg", alt: "Telephone Cabinet" },
      ],
    },
    {
      label: "Softwares",
      products: [
        { src: "/Acserve.png", alt: "Acserve" },
        { src: "/Citrix.png", alt: "Citrix" },
        { src: "/Darktrace.png", alt: "Darktrace" },
        { src: "/Escan.png", alt: "Escan" },
        { src: "/Fortinet.png", alt: "Fortinet" },
        { src: "/IPGuard.png", alt: "IPGuard" },
        { src: "/Microsoft.png", alt: "Microsoft" },
        { src: "/NComputing.png", alt: "NComputing" },
        { src: "/Sophos.png", alt: "Sophos" },
        { src: "/Veeam.png", alt: "Veeam" },
        { src: "/Veritas.png", alt: "Veritas" },
      ],
    },
    {
      label: "Storage",
      products: [
        { src: "/Buffalo.png", alt: "Buffalo" },
        { src: "/Infortrend.png", alt: "Infortrend" },
        { src: "/Iomega.png", alt: "Iomega" },
        { src: "/Kingston.png", alt: "Kingston" },
        { src: "/Sandisk.png", alt: "Sandisk" },
        { src: "/Seagate.png", alt: "Seagate" },
        { src: "/Supermicro.png", alt: "Supermicro" },
        { src: "/Western Digital.png", alt: "Western Digital" },
      ],
    },
    {
      label: "UPS",
      products: [
        { src: "/Accupower.png", alt: "Accupower" },
        { src: "/APC.png", alt: "APC" },
        {
          src: "/Business Partner Enterprise.png",
          alt: "Business Partner Enterprise",
        },
        { src: "/Delta.png", alt: "Delta" },
        { src: "/Eaton.png", alt: "Eaton" },
        { src: "/Socomec.png", alt: "Socomec" },
        { src: "/Vertiv.png", alt: "Vertiv" },
      ],
    },
  ];
</script>

<section class="mx-auto lg:max-w-screen-2xl pb-10 md:pb-20">
  <div class="text-center mb-12">
    <h2 class="text-4xl font-bold text-gray-900 mb-4">
      Our Product Categories
    </h2>
    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
      Discover the best tech products from top brands across different
      categories
    </p>
  </div>

  <div class="grid gap-8 md:gap-12">
    {#each productCategories as category}
      <div
        class="shadow-[0px_3px_17px_-2px_rgba(0,_0,_0,_0.5)] rounded-2xl p-8 transition-shadow duration-300"
      >
        <div class="flex items-center mb-6">
          <div
            class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4"
          >
            <svg
              class="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-gray-900">{category.label}</h3>
            <p class="text-gray-600">Lorem Ipsum excerpt</p>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {#each category.products as product}
            <div
              class="flex items-center justify-center brand-card bg-gray-50 hover:shadow-[0px_3px_17px_-2px_rgba(0,_0,_0,_0.25)] rounded-lg p-4 transition-all duration-200 group"
            >
              <img
                class="w-[125px] h-auto"
                src={product.src}
                alt={product.alt}
                width="300"
                height="300"
              />
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
