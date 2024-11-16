<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4">
    <div class="max-w-2xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">
          About Todo List App
        </h1>
        <p class="text-gray-600">Your ultimate productivity companion</p>
      </div>

      <!-- Content -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden p-6">
        <!-- App Purpose -->
        <section class="mb-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-2">Purpose</h2>
          <p class="text-gray-600">
            The Todo List App helps you manage tasks efficiently by allowing you to create, organize, and track your todos. Whether you're planning your day, organizing a project, or setting reminders, this app keeps you on track.
          </p>
        </section>

        <!-- Features -->
        <section class="mb-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-2">Features</h2>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li>Create, update, and delete tasks easily.</li>
            <li>Filter tasks by status: All, Active, and Completed.</li>
            <li>Track your progress with task statistics.</li>
            <li>Responsive design for optimal usability on any device.</li>
          </ul>
        </section>

        <!-- Technologies Used -->
        <section class="mb-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-2">Technologies</h2>
          <p class="text-gray-600">
            This app is built using modern web development technologies:
          </p>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li>Vue 3 for building a reactive and efficient UI.</li>
            <li>Tailwind CSS for sleek and responsive design.</li>
            <li>Iconify for modern icons.</li>
            <li>UID library for unique identifiers.</li>
          </ul>
        </section>

        <!-- Icon -->
        <section class="flex justify-center mt-8">
          <Icon icon="mdi:check-circle-outline" class="w-24 h-24 text-green-500" />
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>
