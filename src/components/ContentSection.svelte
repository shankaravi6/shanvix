<script>
  const { projects } = $props();
</script>

<div class="w-full flex flex-col gap-5 pt-5">
  <h2
    class="text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase text-neutral-900 flex flex-col md:flex-row items-center gap-5"
  >
    <p
      class="flex flex-col lg:flex-row md:flex-col xs:flex-col sm:flex-col items-center gap-5 text-[clamp(1.5rem,5vw,3rem)] text-neutral-700 tracking-[.5rem]"
    >
      <!-- <span class="title-font">MERN</span> -->
      <span class="w-full text-center">MERN Stack Developer</span>
    </p>
    <span
      class="iconify text-[3rem] md:text-[5rem] text-neutral-700"
      data-icon="ic:baseline-data-object"
    ></span>
  </h2>
  <p
    class="text-neutral-600 text-justify uppercase text-sm tracking-[0.35rem] md:text-base"
  >
    I am a software engineer specializing in React.js, Node.js, MongoDB, and
    AWS. My expertise lies in building scalable, high-performance web
    applications, optimizing API efficiency, and deploying cloud-based
    solutions.
  </p>

  <!-- Social Links -->
  <div class="pt-3 flex flex-wrap gap-5">
    {#each projects && projects as link}
      <p
        class="tracking-[0.1rem] text-neutral-500 hover:text-neutral-800 text-sm md:text-base"
      >
        <a href={link.url} target="_blank">{link.name}</a>
      </p>
    {/each}
  </div>

  <!-- Resume Button -->
  <div
    class="pt-5 tracking-[.15rem] flex gap-2 text-neutral-800 items-center hover:text-amber-900 transition-colors cursor-pointer"
  >
    <a href="/resume.pdf" target="_blank" class="text-lg underline uppercase"
      >View Resume</a
    >
    <span class="iconify text-2xl" data-icon="ic:outline-arrow-outward"></span>
  </div>
</div>
