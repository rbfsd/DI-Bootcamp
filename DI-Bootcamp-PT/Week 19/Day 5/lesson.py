# list
my_list = ['Rick', 'Sanchez']
print("My last name is:", my_list[1])

# dictionary
rick_dict = {
    'first_name':'Rick',
    'last_name':'Sanchez'
}
my_dog = {
  'name': 'Rufus',
  'age': 4,
  'good_dog': True
}

# accessing data in dictionnary
print(my_dog['name'])


rick_dict = {
    'first_name':'Rick',
    'last_name':'Sanchez'
}
print("The last name of rick is:", rick_dict['last_name'])

# data type
my_dog = {
    'name' : 'rufus',
    'age': 4, 
    'best_friend' : {
        'name' : 'felix',
        'age' :'4,5'
    }, 
    'favorite_foods': ['steaks', 'sausages', 'shawarma']
}

# dictionary stored in a list
shirts = [
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'S',
    'price': 20
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'M',
    'price': 25
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'L',
    'price': 30
  },
]

for shirt in shirts:
    print(shirt['size'])

sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}
history_marks = sample_dict.get("class", {}).get("student", {}).get("marks", {}).get("history")

# modify an entry in dictionary
rick_dict['laast_name'] = 'SANCHEZ'

# adding an entry
rick_dict['hair_color'] = 'white'

# delete an entry
del  rick_dict['hair_color']

# key()
# values()
# items()


# Delete set of keys from Python Dictionary

sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
keys_to_remove = ["name", "salary"]

for key in keys_to_remove:
    sample_dict.pop(key, None)
print(sample_dict)


# for loops
my_books = {
    "title" : "Harry Potter",
    "author" : "J. K. Rowling",
}

for x,y in my_books.items():
    print ("the " + x + " is " + y)


# loops operator

# range(start, stop, step)
print(list(range(1,10,2)))
# >> [1,3,5,7,9]

for item in enumerate('abcd'):
    print(item)

for (index_count, letter) in enumerate('abcd'):
    print('at index {} the letter is {}' .format(index_count, letter))

# Zip(Iterable,..) : Concat [Iterables, …] In A Tuple.
list1 = [1,2,3,4]
list2 = ['a','b','c','d']
list3 = [1.1, 2.2, 3.3, 4.4, 5.5]

for item in zip(list1, list2, list3):
    print(item)

prices = [10, 20, 30]
quantities = [3, 5, 2]
total_cost = sum(price * quantity for price, quantity in zip(prices, quantities))
print(f'Total cost: ${total_cost}')

ids = [101, 102, 103]
emails = ['alice@example.com', 'bob@example.com', 'charlie@example.com']
user_data = dict(zip(ids, emails))
print(user_data)

names = ['Alice', 'Bob', 'Charlie']
ages = [25, 30, 35]
for name, age in zip(names, ages):
    print(f'{name} is {age} years old')


# for else
for i in range(1,3):
    print(i)
else:
    print('the for loop is over')

# while else
x = 0
while x<4:
    print(f'x is {x}')
    x += 1
else:
    print('x is bigger than 4')


# break, continue and pass
for letter in 'leonardo':
    if letter == 'a':
        break
    print(letter, end='') #end='' renders each letter next to the other

while True:
    s = input('Enter something: ')
    if s == 'quit':
        break
    print('Length of the string is', len(s))
print('Done')

for letter in "leonardo":
    if letter == 'o':
        continue
    print(letter, end='')

    s = input('Enter something : ')
    if s == 'quit':
        break
    if len(s) < 3:
        print('Too small')
        continue
    print('Input is of sufficient length')

# pass do nothing

for item in [1,2,3]:
    pass
print('finish the script')


# appen element into list

my_num = '1234'
my_list = []

for num in my_num:
    my_list.append(num)
print(my_list)

my_list = [x for x in range(1,10)]
print(my_list)

# >> [0,1,2,3,4,5,6,7,8,9]

my_list = [x for x in range(0,11) if x%2 == 0] # only even
print(my_list)

# >> [0, 2, 4, 6, 8, 10]

my_list = []

for i in [2, 3, 4]:
    for j in [100, 200, 300]:
        my_list.append(i*j)

print(my_list)

# >> [200, 400, 600, 300, 600, 900, 400, 800, 1200]

family_age = {'Lea': 12, 'Mark': 25, 'George': 50}

new_year = 1

new_family_age = {name: age+new_year for (name, age) in family_age.items()}

print(new_family_age)

# >> {'Lea': 13, 'Mark': 26, 'George': 51}