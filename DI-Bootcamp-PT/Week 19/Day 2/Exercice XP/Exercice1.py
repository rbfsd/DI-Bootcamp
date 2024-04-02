# exercice 1
print("Hello world\n" * 4, end="")


# exercice 2
result = (99**3)*8
print(result)

# exercice 3
# False 
# True 
# False
# error 
# True

# exercice 4
computer_brand = "Apple"
print(f"I have a {computer_brand} computer.")

# exercice 5
name = 'Raphael'
age = '24'
shoe_size = '44'
info = f"my name is {name} and I am {age}. I love Jordan shoes but my  favorite size is {shoe_size}"
print(info)

# exercice 6
a = 10
b = 2
if a > b :
    print('Hello World')

# exercice 7
user_input = int(input('Please enter a number: '))

if user_input % 2 == 0:
    print(user_input, 'is even.')
else:
    print(user_input, 'is odd.')

# exercice 8
my_name = ["Raphael"]
user_name = input("What is your name: ")

if user_name in my_name:
    print("This is amazing! We have the same name. Nice to meet you.")
else:
    print("Oh, we are not bro.")

print('Finished')

# exercice 9
user_info = input("put your height in cm: ")
if user_info > 145 :
    print("You are tall enough to ride")
else:
    print("Sorry, you need to be taller to ride this roller coaster.")

