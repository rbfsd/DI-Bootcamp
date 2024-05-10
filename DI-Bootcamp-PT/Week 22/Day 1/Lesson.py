""" 
Counter is a built-in data structure which 
is used to count the occurrence of each value present 
in an array or list 
"""

from collections import Counter  
list = [1,2,3,4,1,2,6,7,3,8,1,2,2]  
answer=Counter()
answer = Counter(list)  
print(answer[2])  


""" 
Deque is an optimal version of list used for inserting and removing items. 
It can add/remove items from either start or the end of the list. 
"""

from collections import deque  
#initialization
list = ["a","b","c"]  
deq = deque(list)  
print(deq)  

#insertion
deq.append("z")  
deq.appendleft("g")  
print(deq)
#removal
deq.pop()  
deq.popleft()  
print(deq)

""" 
The Namedtuple() solves a very major problem 
in the field of computer science. 
Usual tuples need to remember the index of 
each field of a tuple object, however, 
namedtuple() solves this by simply returning 
with names for each position in the tuple.
"""

from collections import namedtuple
Student = namedtuple('Student', 'fname, lname, age')  
s1 = Student('Peter', 'James', '13')  
print(s1.fname) 

""" 
ChainMap combines a lot of dictionaries together 
and returns a list of dictionaries. ChainMaps basically
encapsulates a lot of dictionaries into one single unit
with no restriction on the number of dictionaries.
"""

import collections

dictionary1 = { 'a' : 1, 'b' : 2 }  
dictionary2 = { 'c' : 3, 'b' : 4 }  
chain_Map = collections.ChainMap(dictionary1, dictionary2)  
print(chain_Map.maps)  


from collections import OrderedDict  
order = OrderedDict()  
order['a'] = 1  
order['b'] = 2  
order['c'] = 3  
print(order)  

#unordered dictionary
unordered=dict()
unordered['a'] = 1  
unordered['b'] = 2  
unordered['c'] = 3 
print("Default dictionary", unordered)


# itertools

""" Count : Cette fonction prend deux arguments facultatifs et renvoie un itérateur.

Le premier argument détermine la valeur de départ.
Le deuxième argument dicte l'augmentation de la valeur à chaque étape.
Si les arguments ne sont pas fournis, alors (par défaut) startsera défini sur 0 et stepsera défini sur 1.
 """
#print the first four even numbers
import itertools

result = itertools.count(start = 0, step = 2)

for number in result:
# termination condition
    if number < 8:
        print (number)
    else:
        break

""" 
Cycle : Cette fonction prend un itérable et le parcourt indéfiniment.
"""
# print 2 three times
import itertools

result = itertools.cycle('12345')
counter = 0

for number in result:
# termination condition
    if counter < 10 :
        print (number)
        counter = counter + 1
    else:
        break


