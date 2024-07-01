# ex1

from collections import deque

class Task:
    def __init__(self, description, priority):
        self.description = description
        self.priority = priority

    def __repr__(self):
        return f'("{self.description}", {self.priority})'

class TaskScheduler:
    def __init__(self):
        self.queue = deque()

    def add_task(self, description, priority):
        task = Task(description, priority)
        self.queue.append(task)
        self.queue = deque(sorted(self.queue, key=lambda x: x.priority))

    def execute_next_task(self):
        if self.queue:
            task = self.queue.popleft()
            print(f'Executing task: {task.description}')
        else:
            print('No tasks to execute.')

    def show_task_queue(self):
        print('Task Queue:', list(self.queue))

# Example usage:
scheduler = TaskScheduler()
scheduler.add_task("Clean room", 2)
scheduler.add_task("Do homework", 1)
scheduler.execute_next_task()  # Output: Executing task: Do homework
scheduler.show_task_queue()    # Output: Task Queue: [("Clean room", 2)]


# ex2

from collections import deque

def check_palindrome(s):
    # Normalize the input
    s = ''.join(s.split()).lower()
    
    # Create a deque with the characters of the string
    char_deque = deque(s)
    
    # Check for palindrome
    while len(char_deque) > 1:
        if char_deque.popleft() != char_deque.pop():
            return False
    return True

# Example usage:
print(check_palindrome("Racecar"))  # Output: True
print(check_palindrome("hello"))    # Output: False


# ex3

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        new_node = Node(value)
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

    def __iter__(self):
        current = self.head
        while current:
            yield current.value
            current = current.next

    def __repr__(self):
        return ' -> '.join(str(value) for value in self)

def merge_sorted_linked_lists(list1, list2):
    dummy = Node(0)
    current = dummy

    p1, p2 = list1.head, list2.head

    while p1 and p2:
        if p1.value < p2.value:
            current.next = p1
            p1 = p1.next
        else:
            current.next = p2
            p2 = p2.next
        current = current.next

    if p1:
        current.next = p1
    if p2:
        current.next = p2

    return dummy.next

# Example usage:
list1 = LinkedList()
list1.append(1)
list1.append(3)
list1.append(5)

list2 = LinkedList()
list2.append(2)
list2.append(4)
list2.append(6)

merged_head = merge_sorted_linked_lists(list1, list2)
merged_list = LinkedList()
merged_list.head = merged_head

print(merged_list)  # Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6
