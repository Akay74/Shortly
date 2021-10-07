<template>
  <div>
    <div class="flex items-center justify-between mx-6 m-10 text-gray-600">
      <div><img src="../assets/logo.svg" alt="Shortly logo"></div>

      <div>
        Features
        Pricing
        Resources
      </div>

      <div>
        Login
        Sign Up
      </div>

    </div>
    <div class="flex flex-col-reverse pb-24">
      <div class="mx-10 my-8">
        <div class="text-4xl font-extrabold mb-3">More than just shorter links</div>
        <div class="text-gray-400 mb-4">
          Build your brand’s recognition and get detailed insights 
          on how your links are performing.
        </div>
        <button class="rounded-full bg-gray-400 text-white font-bold px-7 py-3 cursor-pointer">Get Started</button>
      </div>
      <div class="ml-6 w-full h-120"><img src="../assets/illustration-working.svg" alt="" class="h-full"></div>
    </div>

    <form class="mx-6 w-5/6 rounded-md flex flex-col p-6 bg-blue-900 absolute -bottom-48">
      <input type="text" placeholder="Shorten a link here..." class="w-full p-3 rounded mb-4">
      <button class="w-full bg-gray-400 text-white font-bold rounded p-3">Shorten It!</button>
    </form>

    <div class="bg-gray-200 pt-40 pb-12">
      <div class="px-6 leading-10">
        <div class="text-2xl font-extrabold mb-4">Advanced Statistics</div>
        <div class="text-gray-400 text-sm">
          Track how your links are performing across the web with our 
          advanced statistics dashboard.
        </div>
      </div>
      <div>
        <div class="bg-white w-5/6 rounded m-auto pt-16 pb-8 px-6 mt-20">
          <div><img src="" alt=""></div>
          <h3 class="text-xl font-extrabold mb-4">Brand Recognition</h3>
          <p class="text-gray-400 text-sm">
            Boost your brand recognition with each click. Generic links don’t 
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div class="bg-white w-5/6 rounded m-auto pt-16 pb-8 px-6 mt-20">
          <div><img src="" alt=""></div>
          <h3 class="text-xl font-extrabold mb-4">Detailed Records</h3>
          <p class="text-gray-400 text-sm">
            Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions.
          </p>
        </div>

        <div class="bg-white w-5/6 rounded m-auto pt-16 pb-8 px-6 mt-20">
          <div><img src="" alt=""></div>
          <h3 class="text-xl font-extrabold mb-4">Fully Customizable</h3>
          <p class="text-gray-400 text-sm">
            Improve brand awareness and content discoverability through customizable 
            links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>

    <div class="px-6 py-20 bg-boostmobile">
      <div class="text-white font-bold text-2xl mb-3">Boost your links today</div>

      <button class="rounded-full bg-gray-400 text-white font-bold px-7 py-3 cursor-pointer">Get Started</button>
    </div>

    <div class="bg-violet-900 px-8 py-10">
      <div class="mb-7 text-center"><img src="../assets/logo-white.svg" alt="Shortly logo"></div>
      <div class="mb-7">
        <p class="text-white font-bold mb-4">Features</p>
        <p class="text-cyan mb-2">Link Shortening</p>
        <p class="text-cyan mb-2">Branded Links</p>
        <p class="text-cyan mb-2">Analytics</p>
      </div>
      <div class="mb-7">
        <p class="text-white font-bold mb-4">Resources</p>
        <p class="text-cyan mb-2">Blog</p>
        <p class="text-cyan mb-2">Developers</p>
        <p class="text-cyan mb-2">Support</p>
      </div>
      <div class="mb-7">
        <p class="text-white font-bold mb-4">Company</p>
        <p class="text-cyan mb-2">About</p>
        <p class="text-cyan mb-2">Our Team</p>
        <p class="text-cyan mb-2">Careers</p>
        <p class="text-cyan mb-2">Contact</p>
      </div>

      <div class="flex w-3/5 items-center justify-between m-auto">
        <div><img src="../assets/icon-facebook.svg" alt=""></div>
        <div><img src="../assets/icon-twitter.svg" alt=""></div>
        <div><img src="../assets/icon-pinterest.svg" alt=""></div>
        <div><img src="../assets/icon-instagram.svg" alt=""></div>
      </div>
    </div>
  
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/Akay74" target="_blank">Akay</a>.
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style scoped>

</style>
