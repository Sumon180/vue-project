<script setup lang="ts">
import { ref } from 'vue'

interface Todo {
  id: number
  text: string
  completed: boolean
}

const todos = ref<Todo[]>([])
const newTodo = ref('')
const props = defineProps<{
  title: string
}>()

const addTodo = () => {
  if (newTodo.value.trim() === '') return
  todos.value.push({
    id: Date.now(),
    text: newTodo.value,
    completed: false
  })
  newTodo.value = ''
}

const toggleTodo = (id: number) => {
  const todo = todos.value.find(t => t.id === id)
  if (todo) todo.completed = !todo.completed
}

const deleteTodo = (id: number) => {
  todos.value = todos.value.filter(t => t.id !== id)
}
</script>

<template>
  <main class="max-w-md mx-auto mt-12 text-center font-sans bg-white text-black p-10 shadow-lg rounded-lg">
    <h1 class="text-2xl font-bold mb-4">{{ props.title }}</h1>

    <form @submit.prevent="addTodo" class="flex gap-2 justify-center mb-4">
      <input
        v-model="newTodo"
        type="text"
        placeholder="Enter a new todo"
        class="px-3 py-2 flex-1 text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
      />
      <button
        type="submit"
        class="px-4 py-2 font-bold bg-emerald-500 text-white rounded hover:bg-emerald-600"
      >
        Add
      </button>
    </form>

    <ul class="list-none p-0">
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="['bg-gray-100 px-4 py-3 mb-2 flex justify-between items-center rounded cursor-pointer', todo.completed ? 'line-through text-gray-500' : '']"
      >
        <span @click="toggleTodo(todo.id)">
          {{ todo.text }}
        </span>
        <button
          @click="deleteTodo(todo.id)"
          class="text-red-500 hover:text-red-700 text-xl"
        >
          🗑️
        </button>
      </li>
    </ul>
  </main>
</template>
