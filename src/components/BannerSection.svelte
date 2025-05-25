<script>
  import TitleSection from "./TitleSection.svelte";

  import { projects } from "../data/projectData.js";
  import { socialLinks } from "../data/socialData.js";

  import { onMount } from "svelte";
  import gsap from "gsap";
  import NavSection from "./NavSection.svelte";
  import ContentSection from "./ContentSection.svelte";
  import ImageSection from "./ImageSection.svelte";

  onMount(() => {
    gsap.from(".profile-image img", {
      scale: 1.5,
      duration: 1.5,
      ease: "power2.out",
    });
    gsap.from(".left-content", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.1,
    });
  });
</script>

<div
  class="min-h-screen w-full bg-orange-200 flex flex-col items-center justify-center pl-10 pr-10"
>
  <div
    class="w-full max-w-8xl flex flex-col justify-center lg:pb-5 md:pb-10 sm:pb-10 pb-10"
  >
    <!-- Title Section -->
    <TitleSection />

    <!-- Email and Projects Section -->
    <NavSection {socialLinks} />

    <!-- Main Content Section -->
    <div
      class="w-full flex sm:flex-col-reverse flex-col-reverse lg:flex-row justify-between items-center gap-10 mt-5"
    >
      <!-- Left Column: Text Content -->
      <div class="lg:w-9/12 w-full left-content">
        <ContentSection {projects} />
      </div>

      <!-- Right Column: Profile Image -->
      <div class="lg:w-3/12 w-full flex justify-center profile-image">
        <ImageSection />
      </div>
    </div>
  </div>
</div>
