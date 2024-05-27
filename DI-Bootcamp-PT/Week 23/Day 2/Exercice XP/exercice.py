# exercice 1: Complexite temporelle

for i in range(10):
    print(i)

""" 
the 'for' loop runs 10 times, regardless the size of the input.
each iteration performs a constant-time operation print(i).
O(1) cause the number of iteration is fixed and does not depend on the input size.
"""

for i in range(n):
    for j in range(n):
        print(i, j)

"""
the  outer loop runs 'n' times.
for each iteration of the outer loop, the inner 'for' run
'n' times.
therefore, the body of the inner loop(print(i,j)) run n*n
O(2)
"""

i = 1
while i < n:
    i *= 2
    print(i)

# O(log n)


# exercice 2

numbers = [5, 2, 9, 1, 5, 6]

def insertion_sort(numbers: list) -> None:
    for i in range(1, len(numbers)):
        key = numbers[i]
        j = i - 1
        while j >= 0 and key < numbers[j]:
            numbers[j + 1] = numbers[j]
            j -= 1
        numbers[j + 1] = key
           

insertion_sort(numbers) # sorts the numbers list
print(numbers) # check that the sorting is successfull

# exercice 3

numbers = [1, 3, 5, 7, 9, 11]

def binary_search(numbers: list, value: int) -> int:
   low = 0
   high = len(numbers) - 1

   while low <= high:
       mid = (low + high) // 2
       if numbers[mid] == value:
           return mid
       elif numbers[mid] < value:
           low = mid + 1
       else:
           high = mid -1
    
   return -1 


binary_search(numbers, 7) # returns 3