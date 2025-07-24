// stores/todoStore.ts
import { reactive } from "vue";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const todoStore = reactive({
  todos: [] as Todo[],
  newTodo: "",
  editingId: null as number | null,
  editedText: "",

  addTodo() {
    if (this.newTodo.trim() === "") return;
    this.todos.push({
      id: Date.now(),
      text: this.newTodo,
      completed: false,
    });
    this.newTodo = "";
  },

  deleteTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
  },

  isCompleteTodo(id: number) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) todo.completed = !todo.completed;
  },

  startEdit(todo: Todo) {
    this.editingId = todo.id;
    this.editedText = todo.text;
  },

  updateTodo() {
    if (this.editingId === null) return;
    const todo = this.todos.find((t) => t.id === this.editingId);
    if (todo && this.editedText.trim() !== "") {
      todo.text = this.editedText;
    }
    this.editingId = null;
    this.editedText = "";
  },
});
