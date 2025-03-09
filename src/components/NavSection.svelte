<script>
  const { socialLinks } = $props();
  const email = $state("shankaravi6.india@gmail.com");
</script>

<div
  class="flex flex-col lg:flex-row justify-between items-center gap-5 py-5 lg:py-2 md:py-2 sm:py-2 relative email-text"
>
  <div>
    <a
      href={`mailto:${email}`}
      class="text-neutral-600 tracking-[.15rem] text-lg hover:text-amber-900"
    >
      {email}
    </a>
  </div>
  <div class="flex flex-wrap justify-center gap-5">
    {#each socialLinks && socialLinks as project}
      <p
        class="tracking-[0.1rem] text-neutral-600 hover:text-amber-900 text-sm md:text-base"
      >
        <a href={project.url} target="_blank">{project.name}</a>
      </p>
    {/each}
  </div>
</div>
