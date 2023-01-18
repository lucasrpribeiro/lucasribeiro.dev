<script setup>
const projects = [
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    description: '',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More projects...
]
</script>

<template>
  <div id="portifolio" class="container mx-auto py-12 px-4 text-center sm:px-6">
    <div class="mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-3xl font-bold font-orbitron text-transparent bg-clip-text bg-cyan-500 tracking-tight sm:text-4xl">Meu Portifolio</h2>
          <p class="text-xl">Aqui você encontrará alguns dos sites que desenvolvi durante minha carreira.</p>
        </div>
        <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          <li v-for="project in projects" :key="project.name">
            <div class="space-y-4 bg-zinc-800 p-2 rounded-xl hover:shadow-xl lg:hover:scale-110 hover:duration-300 cursor-pointer">
              <div class="aspect-w-3 aspect-h-2">
                <img class="rounded-lg object-cover shadow-lg" :src="project.imageUrl" alt="" />
              </div>

              <div class="space-y-2">
                <div class="space-y-1 text-lg font-medium leading-6">
                  <h3>{{ project.name }}</h3>
                  <p>{{ project.role }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

