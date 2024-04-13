# Lambda, Map, Reduce & Filter Functions

# Map()
# The map function applies a given function to each item of an iterable (such as list) and returns the results in a new list. 

def upper_string(s):
    return  s.upper()


fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
map_object = map(upper_string, fruit)
print(list(map_object))

# filter()

def start_with_A(s):
    return s[0] ==  "A"

fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
filtered_object = filter(start_with_A, fruit)
print(list(filtered_object))

# reduce()

from functools import reduce

def sum_numbers(first, second):
    return first+second

my_list = [1, 3, 5, 7]
reduce_list = reduce(sum_numbers, my_list)
print(reduce_list)

# lambda function 

lambda s : s.supper()

def my_function(s):
    return s.upper()

fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
map_object = map(lambda s: s.upper(), fruit)
print(list(map_object))


# exercice
people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]
# À l'aide de la carte et du filtre, essayez de dire bonjour à tous ceux dont le nom est inférieur ou égal à 4 lettres.

def say_hello(s):
    return len(s) <= 4
hello = filter(say_hello, people)
print("Hello {}".format(", ".join(hello)))