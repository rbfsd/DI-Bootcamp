from collections import deque

queue = deque(['apples', 'oranges', 'pears'])

queue.appendleft('peahes')

item = queue.pop()

print(queue)

""" How to Implement a Linked List in Python """

class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next

class LinkedList:
    def __init__(self, node=Node):
        self.head = node

n1 = Node("Mon")
n2 = Node("Tue")
n1.next = n2
n2.next = Node("Wed")

node = n1
while node:
    print(node.data)  # 'Mon', 'Tue', 'Wed'
    node = node.next


""" doubly linked list """

class Node:
    def __init__(self, data=None, next=None, prev=None):
        self.data = data
        self.next = next
        self.prev = prev

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

node1 = Node("A")
node2 = Node("B")
node1.next = node2
node2.prev = node1