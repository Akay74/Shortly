<template>
  <div>
    <!--Navbar section-->
    <nav class="bg-white">
      <div class="max-w-6xl mx-auto px-4 py-8">
        <div class="flex w-full justify-between relative">
          <div class="flex space-x-7 w-full justify-between">
            <!-- Website Logo -->
            <div>
              <a href="#" class="flex items-center py-4 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="121" height="33"><path fill="#34313D" d="M16.715 7.932c-.068-.09-.306-.26-.714-.51s-.918-.51-1.53-.782-1.281-.51-2.006-.714a8.005 8.005 0 00-2.176-.306c-1.995 0-2.992.669-2.992 2.006 0 .408.107.748.323 1.02.215.272.532.516.952.731.419.215.946.414 1.58.595l1.406.393.805.219c1.156.317 2.198.663 3.128 1.037.929.374 1.717.839 2.363 1.394a5.647 5.647 0 011.496 2.023c.35.793.527 1.745.527 2.856 0 1.36-.255 2.51-.765 3.451-.51.94-1.185 1.7-2.023 2.278-.84.578-1.802.997-2.89 1.258-1.088.26-2.21.391-3.366.391a19.68 19.68 0 01-5.44-.799c-.884-.26-1.74-.572-2.567-.935A14.358 14.358 0 01.53 22.28l2.448-4.862c.09.113.385.329.884.646.498.317 1.116.635 1.853.952.736.317 1.558.6 2.465.85.906.25 1.824.374 2.754.374 1.972 0 2.958-.6 2.958-1.802 0-.453-.148-.827-.442-1.122-.295-.295-.703-.561-1.224-.799a12.455 12.455 0 00-1.504-.56l-1.702-.495-.976-.288c-1.111-.34-2.074-.708-2.89-1.105-.816-.397-1.49-.856-2.023-1.377a5.003 5.003 0 01-1.19-1.802c-.261-.68-.391-1.473-.391-2.38 0-1.27.238-2.391.714-3.366a7.266 7.266 0 011.938-2.465 8.435 8.435 0 012.839-1.513c1.076-.34 2.215-.51 3.417-.51.838 0 1.666.08 2.482.238.816.159 1.598.363 2.346.612.748.25 1.445.533 2.09.85.647.317 1.242.635 1.786.952l-2.448 4.624zM40.139 25h-5.44V14.97c0-1.156-.227-2.006-.68-2.55-.454-.544-1.077-.816-1.87-.816-.318 0-.663.074-1.037.221a4.173 4.173 0 00-1.088.646 5.827 5.827 0 00-.97 1.003 4.4 4.4 0 00-.68 1.292V25h-5.44V.18h5.44v9.962a6.786 6.786 0 012.602-2.465c1.076-.578 2.26-.867 3.553-.867 1.201 0 2.17.21 2.907.629.736.42 1.303.952 1.7 1.598.396.646.663 1.371.799 2.176.136.805.204 1.592.204 2.363V25zm12.34.34c-1.519 0-2.873-.25-4.063-.748-1.19-.499-2.193-1.173-3.01-2.023a8.54 8.54 0 01-1.852-2.958 9.97 9.97 0 01-.63-3.519c0-1.224.21-2.397.63-3.519a8.54 8.54 0 011.853-2.958c.816-.85 1.819-1.53 3.009-2.04s2.544-.765 4.063-.765c1.519 0 2.867.255 4.046.765 1.179.51 2.176 1.19 2.992 2.04a8.754 8.754 0 011.87 2.958 9.736 9.736 0 01.646 3.519 9.97 9.97 0 01-.63 3.519 8.54 8.54 0 01-1.852 2.958c-.816.85-1.82 1.524-3.01 2.023-1.19.499-2.543.748-4.062.748zM48.5 16.092c0 1.405.374 2.533 1.122 3.383.748.85 1.7 1.275 2.856 1.275a3.59 3.59 0 001.564-.34c.476-.227.89-.544 1.24-.952a4.57 4.57 0 00.834-1.479 5.632 5.632 0 00.306-1.887c0-1.405-.374-2.533-1.122-3.383-.748-.85-1.689-1.275-2.822-1.275a3.702 3.702 0 00-2.84 1.292 4.57 4.57 0 00-.832 1.479 5.632 5.632 0 00-.306 1.887zm27.776-4.284c-1.315.023-2.505.238-3.57.646-1.065.408-1.836 1.02-2.312 1.836V25h-5.44V7.15h4.998v3.604c.612-1.201 1.4-2.142 2.363-2.822.963-.68 1.989-1.031 3.077-1.054h.544c.113 0 .227.011.34.034v4.896zm14.074 12.24a21.71 21.71 0 01-2.567.884c-.963.272-1.932.408-2.907.408-.68 0-1.32-.085-1.92-.255a4.286 4.286 0 01-1.582-.816c-.453-.374-.81-.867-1.07-1.479-.262-.612-.392-1.349-.392-2.21v-9.316h-2.278V7.15h2.278V1.472h5.44V7.15h3.638v4.114h-3.638v7.446c0 .59.147 1.014.442 1.275.295.26.669.391 1.122.391.408 0 .827-.068 1.258-.204.43-.136.805-.283 1.122-.442l1.054 4.318zM92.627.18h5.44v18.462c0 1.36.578 2.04 1.734 2.04.272 0 .572-.04.901-.119.329-.08.63-.198.901-.357l.714 4.08c-.68.317-1.462.567-2.346.748-.884.181-1.711.272-2.482.272-1.564 0-2.765-.408-3.604-1.224-.839-.816-1.258-1.995-1.258-3.536V.18zm11.456 27.506c.454.159.879.272 1.275.34a6.4 6.4 0 001.071.102c.658 0 1.168-.227 1.53-.68.363-.453.692-1.27.986-2.448l-6.8-17.85h5.61l4.148 13.192 3.57-13.192h5.1l-6.8 20.74a7.106 7.106 0 01-2.55 3.587c-1.224.918-2.674 1.377-4.352 1.377a8.17 8.17 0 01-1.377-.119 7.516 7.516 0 01-1.41-.391v-4.658z"/></svg>
                <!--<img src="/src/assets/logo.svg" alt="Logo" class="h-8 w-8 mr-2" />-->
              </a>
            </div>
            <!-- Primary Navbar items -->
            <div v-show="!mobile" class="hidden md:flex w-full md:justify-between items-center">
              <div class="space-x-1">
                <a href="" class="py-4 px-2 text-cyan font-semibold hover:text-blue-900 transition duration-300">
                  Features
                </a>
                <a href="" class="py-4 px-2 text-cyan font-semibold hover:text-blue-900 transition duration-300">
                  Pricing
                </a>
                <a href="" class="py-4 px-2 text-cyan font-semibold hover:text-blue-900 transition duration-300">
                  Resources
                </a>
              </div>
              <!--Secondary navbar menu-->
              <div class="space-x-1">
                <a href="" class="py-4 px-2 text-cyan font-semibold hover:text-blue-900 transition duration-300">
                  Login
                </a>
                <button class="bg-cyan rounded-full px-6 py-2 text-white font-bold hover:bg-grey">Sign Up</button>
              </div>
            </div>
            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center">
              <button class="outline-none mobile-menu-button" @click="toggleMobileNav" v-show="mobile">
                <svg
                  class="w-9 h-9 text-gray-500"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            <!-- mobile menu -->
            <div v-show="mobileNav" class="mobile-menu absolute top-16 bg-violet-800 rounded-lg w-11/12 p-8 flex justify-center">
              <ul class="w-full">
                <li><a href="index.html" class="block px-2 py-4 text-white font-bold text-lg">Features</a></li>
                <li><a href="#" class="block text-white px-2 py-4 font-bold text-lg hover:text-green-500 transition duration-300">Pricing</a></li>
                <li class="mb-3 border-b"><a href="#" class="block text-white px-2 pt-4 pb-8 font-bold text-lg hover:text-green-500 transition duration-300">Resources</a></li>
                <li><a href="" class="block py-4 px-2 text-white font-bold text-lg hover:text-green-500 transition duration-300">Login</a></li>
                <button class=" block bg-cyan rounded-full mt-4 px-6 py-2 text-white font-bold text-lg text-center w-full">Sign Up</button>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!--Hero Section-->
    <div class="flex flex-col-reverse pb-32 lg:flex-row lg:px-20 lg:justify-between">
      <div class="mx-10 my-8 lg:text-left">
        <div class="text-4xl lg:text-6xl font-extrabold mb-3">More than just shorter links</div>
        <div class="text-gray-400 lg:text-lg">
          Build your brand’s recognition and get detailed insights 
          on how your links are performing.
        </div>
        <button class="rounded-full bg-gray-400 text-white font-bold px-10 py-3 cursor-pointer mt-6 lg:mt-8 hover:bg-grey">Get Started</button>
      </div>
      <div class="ml-6 w-full h-120"><img src="../assets/illustration-working.svg" alt="" class="h-full"></div>
    </div>

    <!--Third Section-->
    <div class="bg-gray-200 pt-40 pb-12 relative">
      <!--Shorten link section-->
      <div class="flex justify-center">
        <form class="h-auto w-5/6 rounded-md flex flex-col p-6 bg-blue-900 absolute -top-16 lg:flex-row lg:justify-between lg:items-center lg:p-8">
          <input type="text" placeholder="Shorten a link here..." class="w-full p-3 rounded mb-4 lg:w-4/6 lg:mb-0">
          <button class="w-full bg-cyan text-white font-bold rounded p-3 lg:w-1/6 hover:bg-grey">Shorten It!</button>
        </form>
      </div>

      <div>
        <div v-for="post in posts" v-bind:key="post.id">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </div>
      </div>
      
      <div class="lg:flex lg:justify-center">
        <div class="px-6 leading-10 lg:w-1/2 lg:text-center">
          <div class="text-2xl font-extrabold mb-4 lg:text-4xl">Advanced Statistics</div>
          <div class="text-gray-400 text-sm lg:text-xl">
            Track how your links are performing across the web with our 
            advanced statistics dashboard.
          </div>
        </div>
      </div>

      <!--Card section-->
      <div class="lg:flex lg:justify-between lg:px-16">
        <div class="bg-white w-5/6 rounded m-auto pt-16 pb-8 px-6 mt-20 relative lg:w-1/4 lg:text-left">
          <div class="flex justify-center">
            <div class="m-auto w-24 bg-violet-800 rounded-full h-24 absolute -top-12 flex justify-center"><img class="self-center" src="../assets/icon-brand-recognition.svg" alt=""></div>
          </div>
          <h3 class="text-xl font-extrabold mb-4">Brand Recognition</h3>
          <p class="text-gray-400 text-sm leading-6">
            Boost your brand recognition with each click. Generic links don’t 
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div class="bg-white w-5/6 rounded m-auto pt-16 pb-8 px-6 mt-20 relative lg:w-1/4 lg:text-left">
          <div class="flex justify-center">
            <div class="m-auto w-24 bg-violet-800 rounded-full h-24 absolute -top-12 flex justify-center"><img class="m-auto" src="../assets/icon-detailed-records.svg" alt=""></div>
          </div>
          <h3 class="text-xl font-extrabold mb-4">Detailed Records</h3>
          <p class="text-gray-400 text-sm leading-6">
            Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions.
          </p>
        </div>

        <div class="bg-white w-5/6 rounded m-auto pt-16 pb-8 px-6 mt-20 relative lg:w-1/4 lg:text-left">
          <div class="flex justify-center">
            <div class="m-auto w-24 bg-violet-800 rounded-full h-24 absolute -top-12"><img class="m-6" src="../assets/icon-fully-customizable.svg" alt=""></div>
          </div>
          
          <h3 class="text-xl font-extrabold mb-4">Fully Customizable</h3>
          <p class="text-gray-400 text-sm leading-6">
            Improve brand awareness and content discoverability through customizable 
            links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>

    <!--Fourth Section-->
    <div class="px-6 py-20 bg-violet-800 lg:bg-boostdesktop">
      <div class="text-white font-bold text-2xl lg:text-4xl mb-4">Boost your links today</div>

      <button class="rounded-full bg-gray-400 text-white font-bold px-7 py-3 cursor-pointer lg:px-12 lg:py-4 lg:text-lg hover:bg-grey">Get Started</button>
    </div>
    
    <!--footer-->
    <div class="bg-violet-900 px-8 lg:px-28 py-10 lg:flex lg:justify-between lg:items-start lg:pt-16">
      <div class="flex justify-center lg:block lg:w-1/5">
        <div class="mb-7"><img src="../assets/logo-white.svg" alt="Shortly logo"></div>
      </div>
      <div class="mx-auto lg:flex lg:justify-between w-3/5 lg:mx-0 lg:text-left lg:pl-16">
        <div class="mb-7 lg:w-1/3">
          <p class="text-white font-bold mb-4">Features</p>
          <p class="text-cyan mb-2">Link Shortening</p>
          <p class="text-cyan mb-2">Branded Links</p>
          <p class="text-cyan mb-2">Analytics</p>
        </div>
        <div class="mb-7 lg:w-1/3">
          <p class="text-white font-bold mb-4">Resources</p>
          <p class="text-cyan mb-2">Blog</p>
          <p class="text-cyan mb-2">Developers</p>
          <p class="text-cyan mb-2">Support</p>
        </div>
        <div class="mb-7 lg:w-1/3">
          <p class="text-white font-bold mb-4">Company</p>
          <p class="text-cyan mb-2">About</p>
          <p class="text-cyan mb-2">Our Team</p>
          <p class="text-cyan mb-2">Careers</p>
          <p class="text-cyan mb-2">Contact</p>
        </div>
      </div>

      <div class="flex w-3/5 items-center justify-between m-auto lg:m-0 lg:w-1/6">
        <div><img src="../assets/icon-facebook.svg" alt=""></div>
        <div><img src="../assets/icon-twitter.svg" alt=""></div>
        <div><img src="../assets/icon-pinterest.svg" alt=""></div>
        <div><img src="../assets/icon-instagram.svg" alt=""></div>
      </div>
    </div>

    <!--attribution section-->
    <div class="bg-violet-900 text-white pb-6">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/Akay74" target="_blank">Akay</a>.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Burger',
  data: function() {
    return {
      mobile: true,
      mobileNav: null,
      windowWidth: null,
      posts: [],
    }
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
    this.getData();
  },
  setup() {
    
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 750){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    async getData() {
      try {
        const response = await this.$http.get(
          "https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html"
        );
        // JSON responses are automatically parsed.
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>

<style scoped>

</style>
