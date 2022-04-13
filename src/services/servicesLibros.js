import { API, graphqlOperation } from "aws-amplify";
import { createTodo, updateTodo, deleteTodo } from "../graphql/mutations";
import { getTodo, listTodos } from "../graphql/queries";
import {
  onCreateTodo,
  onDeleteTodo,
  onUpdateTodo,
} from "../graphql/subscriptions";

const list = async () => {
  try {
    const Todo = await API.graphql(graphqlOperation(listTodos));
    return Todo.data.listTodos.items;
  } catch (error) {

  }
};

const onCrear = async (subscriptionFunction) => {
  const subscription = API.graphql(graphqlOperation(onCreateTodo)).subscribe({
    next: (todoData) => {
      subscriptionFunction();
    },
  });
  return subscription;
};

const onEliminar = async (subscriptionFunction) => {
  const subscription = API.graphql(graphqlOperation(onDeleteTodo)).subscribe({
    next: (bookData) => {
      subscriptionFunction();
    },
  });
  return subscription;
};

const onActualizar = async (subscriptionFunction) => {
  const subscription = API.graphql(graphqlOperation(onUpdateTodo)).subscribe({
    next: (todoData) => {
      subscriptionFunction();
    },
  });
  return subscription;
};

const crear = async (libro) => {
  try {
    const newTodo = await API.graphql(
      graphqlOperation(createTodo, { input: libro })
    );
  } catch (error) {

  }
};

const eliminar = async (id) => {
  try {
    const todoDeleted = await API.graphql(
      graphqlOperation(deleteTodo, { input: { id: id } })
    );
  } catch (error) {

  }
};

const actualizar = async (todo) => {
  try {
    const TodoUpdated = await API.graphql(
      graphqlOperation(updateTodo, { input: todo })
    );
  } catch (error) {

  }
};

export { list, crear, onCrear, eliminar, onEliminar, actualizar, onActualizar };
