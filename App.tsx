import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useTodos } from './hooks/useTodos';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

export default function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <View style={styles.container}>
      <TodoInput onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
  },
});
