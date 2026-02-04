import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Todo } from '../App';

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <TouchableOpacity
      style={[styles.container, todo.completed && styles.completedContainer]}
      onPress={onToggle}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.todoText,
          todo.completed && styles.completedText,
        ]}
      >
        {todo.text}
      </Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={onDelete}
        activeOpacity={0.6}
      >
        <Text style={styles.deleteText}>×</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: '#fff',
  },
  completedContainer: {
    backgroundColor: '#f9f9f9',
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  completedText: {
    color: '#999',
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  deleteText: {
    fontSize: 28,
    color: '#999',
    fontWeight: '300',
  },
});
