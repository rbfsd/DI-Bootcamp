# Exercise 1: Identifying Time Complexity

# Snippet 1
def snippet_1():
    for i in range(10):
        print(i)

# Snippet 2
def snippet_2(n):
    for i in range(n):
        for j in range(n):
            print(i, j)

# Snippet 3
def snippet_3(n):
    i = 1
    while i < n:
        i *= 2
        print(i)


# Exercise 2: Understanding Insertion Sort

def insertion_sort(numbers: list) -> None:
    for i in range(1, len(numbers)):
        key = numbers[i]
        j = i - 1
        while j >= 0 and key < numbers[j]:
            numbers[j + 1] = numbers[j]
            j -= 1
        numbers[j + 1] = key

# Test the insertion sort implementation
numbers = [5, 2, 9, 1, 5, 6]
insertion_sort(numbers)
print("Sorted list using Insertion Sort:", numbers)  # Output should be [1, 2, 5, 5, 6, 9]


# Exercise 3: Understanding Binary Search

def binary_search(numbers: list, value: int) -> int:
    low, high = 0, len(numbers) - 1
    while low <= high:
        mid = (low + high) // 2
        if numbers[mid] == value:
            return mid
        elif numbers[mid] < value:
            low = mid + 1
        else:
            high = mid - 1
    return -1  # Value not found

# Test the binary search implementation
numbers = [1, 3, 5, 7, 9, 11]
index = binary_search(numbers, 7)
print("Index of 7 using Binary Search:", index)  # Output should be 3


# Optional: Running all snippets to show their outputs (uncomment to test)
# snippet_1()
# snippet_2(5)
# snippet_3(20)
