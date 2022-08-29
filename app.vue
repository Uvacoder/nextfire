<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} | NextFire` : "NextFire",
  link: [{ rel: "icon", href: "/img/mashiro.jpg" }],
  meta: [
    { name: "theme-color", content: "#84cc16" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "NextFire/NextFire" },
    { property: "og:image", content: "https://yuru.moe/img/mashiro.jpg" },
  ],
});
</script>

<template>
  <div class="drawer drawer-mobile">
    <input id="app-drawer" type="checkbox" class="drawer-toggle" />

    <!-- Page content here -->
    <div class="drawer-content">
      <div class="navbar bg-base-100 shadow sticky top-0 lg:hidden">
        <div class="flex-none">
          <label for="app-drawer" class="btn btn-ghost drawer-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </label>
        </div>

        <div class="flex-1">
          <NuxtLink href="/" class="btn btn-link normal-case text-xl gap-x-4">
            <div class="avatar">
              <div class="w-10 rounded-full">
                <img src="/img/mashiro.jpg" />
              </div>
            </div>
            <div>NextFire</div>
          </NuxtLink>
        </div>
      </div>

      <NuxtPage />
    </div>

    <div class="drawer-side border-r">
      <label for="app-drawer" class="drawer-overlay" />

      <!-- Sidebar content here -->
      <nav
        class="p-4 overflow-y-auto w-80 bg-base-100 text-base-content flex flex-col gap-y-8"
      >
        <NuxtLink
          href="/"
          class="btn btn-link normal-case text-xl hidden lg:inline-flex justify-start gap-x-4"
        >
          <div class="avatar">
            <div class="w-10 rounded-full">
              <img src="/img/mashiro.jpg" />
            </div>
          </div>
          <div>NextFire</div>
        </NuxtLink>

        <ul class="flex-1 menu p-0">
          <ContentNavigation v-slot="{ navigation }">
            <li v-for="link of navigation" :key="link._path">
              <NuxtLink
                :to="link._path"
                :class="{ active: $route.path === link._path }"
              >
                {{ link.navTitle || link.title }}
              </NuxtLink>
            </li>
          </ContentNavigation>
        </ul>

        <footer>
          <hr />
          <p class="mt-2">© NextFire — 2021-2022</p>
        </footer>
      </nav>
    </div>
  </div>
</template>
