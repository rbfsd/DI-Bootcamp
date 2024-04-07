# Exercice 1

my_fav_numbers = {1,26,52,404}

my_fav_numbers.add(23)
my_fav_numbers.add(2)

my_fav_numbers.remove(2)
print(my_fav_numbers)

friend_fav_numbers = {1,3,4}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

# exercice 2
# Tuples are immutable lists, which means items can’t be changed.
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# Remove “Banana” from the list.
basket.remove("Banana")

# Remove “Blueberries” from the list.
basket.remove("Blueberries")

# Add “Kiwi” to the end of the list.
basket.append("Kiwi")

# Add “Apples” to the beginning of the list.
basket.insert(0, "Apples")

# Count how many apples are in the basket.
apple_count = basket.count("Apples")

# Empty the basket.
basket.clear()

print(basket)
print("Number of apples in the basket:", apple_count)


# Exercice 4
# is a number, positive or negative, containing one or more decimals.
sequence = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
float_seq = [float(i) for i in range(0, 10)]
print(float_seq)

# Exercice 5

numbers = range(0, 21)
for number in numbers:
    if number % 2 == 0 :
        print (number)


# Exercice 6

my_name = "Raphael"
user_input = ""
while  user_input != my_name:
    user_input = input ("Please enter your name: ")


# Exercice 7
fav_fruit = input("What are your favorite fruit:  ")
list_fruits = fav_fruit.split()
fruit = input("Enter another fruit:  ")
if fruit in list_fruits:
    print("you choose on of your fav fruit")
else:
    print('you choose a new fruit')


# Exercice 8

toppings = []
while True:
    topping = input("enter your pizza toppings or 'quit' to stop !:  ")
    if topping == 'quit':
        break

    toppings.append(topping)
    print(f'you will add {topping} to your pizza ')


total_price = 10 + 2.5 * len(toppings)
print("pizza toppings: ")
for topping in toppings:
    print("-", topping)
print (f'total price is: {total_price}$')


# Exercice 9

ages = []

while True :
    familly_member =  input("put the name and age for each familly member: ")
    if familly_member ==  'quit':
        break

    familly_member = familly_member.split(',')
    ages.append((familly_member[0], int(familly_member[1])))

total_cost = 0

for name, age in ages :
    if age < 3 :
        cost = 0
    elif 3 <= age < 12:
        cost = 10
    else :
        cost = 15

    total_cost += cost

print (f"the cost total for all the familly is {total_cost}$")

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.


names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']
allowed_names = []

for name in names:
    age = int(input(f"Enter {name}'s age: "))
    if 16 <= age <= 21:
        allowed_names.append(name)

print('final list of people allowed to see the movie : ')
print(allowed_names)


# Exercice 10
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
print(sandwich_orders)

finished_sandwiches = []

while sandwich_orders:
    sandwich = sandwich_orders.pop()
    finished_sandwiches.append(sandwich)

for sandwich in finished_sandwiches:
    print(f'I made you a {sandwich}')  