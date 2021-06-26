<template>
  <header
    class="
      bg-gray-50
      dark:bg-gray-900
      bg-opacity-50
      dark:bg-opacity-50
      sticky
      top-0
      backdrop-filter backdrop-blur
      z-50
    "
  >
    <nav class="container mx-auto flex items-center justify-between p-4">
      <div class="flex items-center">
        <nuxt-link to="/">
          <BaseLogo class="h-8 w-8 mr-10" />
        </nuxt-link>
        <div class="hidden lg:flex items-center justify-between space-x-8">
          <nuxt-link
            v-for="(menu, l) in menuLinks"
            :key="l"
            :to="menu.link"
            class="navbar-link"
            >{{ menu.label }}</nuxt-link
          >
        </div>
      </div>
      <div class="hidden lg:flex items-center space-x-8">
        <button class="btn-primary btn-focus">Submit Project</button>
        <BaseDarkModeToggle />
      </div>
      <button
        @click="mobileMenu = !mobileMenu"
        class="
          inline-block
          lg:hidden
          rounded-md
          p-1
          focus:outline-none
          focus:bg-gray-100
          dark:focus:bg-gray-800
        "
      >
        <IconsMenu class="h-6 w-6" />
      </button>
    </nav>
    <!-- Mobile Navigation Drawer Start-->
    <div>
      <transition
        enter-active-class="transition-all duration-500 ease-in-out"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="mobileMenu"
          @click="mobileMenu = false"
          class="
            absolute
            top-0
            left-0
            h-screen
            w-full
            dark:bg-gray-900
            bg-gray-50 bg-opacity-50
            dark:bg-opacity-50
            backdrop-filter backdrop-blur
            z-40
          "
        ></div>
      </transition>
      <transition
        enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
        enter-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
        leave-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <aside
          v-if="mobileMenu"
          class="
            z-50
            min-h-screen
            w-64
            absolute
            top-0
            left-0
            bg-gray-100
            dark:bg-gray-800
          "
        >
          <ul
            class="
              divide-y divide-gray-200
              dark:divide-gray-700
              h-screen
              overflow-y-scroll
              text-sm
            "
          >
            <li>
              <nuxt-link
                to="/"
                @click.native="mobileMenu = false"
                class="p-4 flex items-center space-x-2"
              >
                <BaseLogo class="h-8 w-8" />
              </nuxt-link>
            </li>
            <li v-for="(menu, l) in menuLinks" :key="l">
              <nuxt-link
                :to="menu.link"
                @click.native="mobileMenu = false"
                class="p-4 flex items-center space-x-2"
              >
                {{ menu.label }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/submit"
                @click.native="mobileMenu = false"
                class="p-4 flex items-center space-x-2"
              >
                Submit Project
              </nuxt-link>
            </li>
            <li>
              <div class="p-4 flex items-center justify-between">
                <p>Dark Mode</p>
                <BaseDarkModeToggle />
              </div>
            </li>
          </ul>
        </aside>
      </transition>
    </div>
    <!-- Mobile Navigation Drawer End-->
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenu: false,
      menuLinks: [
        {
          link: "/about",
          label: "About",
        },
        {
          link: "/#projects",
          label: "Projects",
        },
        {
          link: "/articles",
          label: "Articles",
        },
        {
          link: "/community",
          label: "Community",
        },
      ],
    };
  },
  watch: {
    mobileMenu: {
      immediate: true,
      handler(mobileMenu) {
        if (process.client) {
          if (mobileMenu) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
};
</script>

<style>
.navbar-link {
  @apply focus:outline-none focus:text-gray-500 hover:text-gray-500 focus:underline;
}
</style>