<script setup lang="ts">
import { useToast } from "vue-toast-notification";
import { todoStore } from "../store/todoStore";

const toast = useToast();
const props = defineProps<{ title: string }>();

const handleAdd = () => {
  todoStore.addTodo();
  toast.success("Todo Created!", { position: "bottom-left" });
};

const handleDelete = (id: number) => {
  todoStore.deleteTodo(id);
  toast.info("Deleted todo!", { position: "bottom-left" });
};
</script>

<template>
  <main
    class="max-w-2xl mx-auto mt-12 text-center font-sans bg-white text-black p-10 shadow-lg rounded-lg"
  >
    <h1 class="text-2xl font-bold mb-10">{{ props.title }}</h1>

    <form @submit.prevent="handleAdd" class="flex gap-2 justify-center mb-4">
      <input
        v-model="todoStore.newTodo"
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
        v-for="todo in todoStore.todos"
        :key="todo.id"
        class="bg-gray-100 px-4 py-3 mb-2 flex justify-between items-center gap-2 rounded"
      >
        <div class="flex-1 text-left">
          <template v-if="todoStore.editingId === todo.id">
            <input
              v-model="todoStore.editedText"
              @keyup.enter="todoStore.updateTodo"
              class="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </template>
          <template v-else>
            <span
              @click="todoStore.isCompleteTodo(todo.id)"
              :class="[
                'cursor-pointer',
                todo.completed ? 'line-through text-gray-500' : '',
              ]"
            >
              {{ todo.text }}
            </span>
          </template>
        </div>
        <div class="flex gap-2">
          <template v-if="todoStore.editingId === todo.id">
            <button
              @click="todoStore.updateTodo"
              class="text-blue-600 cursor-pointer bg-blue-200 px-3 py-1.5 rounded-sm text-sm"
            >
              Save
            </button>
          </template>
          <template v-else>
            <button
              @click="todoStore.startEdit(todo)"
              class="text-blue-600 cursor-pointer bg-blue-200 px-3 py-1.5 rounded-sm text-sm"
            >
              Edit
            </button>
            <button
              @click="todoStore.isCompleteTodo(todo.id)"
              class="text-green-600 cursor-pointer bg-green-200 px-3 py-1.5 rounded-sm text-sm"
            >
              Complete
            </button>
          </template>
          <button
            @click="handleDelete(todo.id)"
            class="text-red-500 hover:text-red-700 text-xl cursor-pointer"
          >
            🗑️
          </button>
        </div>
      </li>
    </ul>
  </main>
</template>
