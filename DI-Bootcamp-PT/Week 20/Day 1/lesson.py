# function

def say_hello() :
    print("Hello World !")
say_hello()  # Call the function


def say_hello(username):
    print(f"Hello {username}")
say_hello('Gill')

def say_hello(username, language):
    if language == 'EN':
        print('Hello ' +username)
    elif language == 'FR':
        print('Bonjour ' +username)
    else:
        print('this language is not suported: ' +language)

say_hello('John','FR')

# local and global scope
def number_by_three(name, day):
    sentence = 'hello {}! Today is {}.'.format(name,day)
    print(sentence)
number_by_three('john', 'monday')


name = 'raphael'
def say_hi():
    print(name)
say_hi()

# returning a simple value
def get_formated_name(fname, lname):
    full_name = fname + ' ' + lname
    return full_name.title()
musician = get_formated_name('Raphael', 'Belhassen')
print(musician)

# Returning multiple values using tuple
my_tuple = ("jimi", "hendrix")
first_name, last_name = my_tuple
print("First name is: " + first_name)
print("Last name is: " + last_name)

def format_name(first_name, last_name):
    return (first_name.title(), last_name.title())

first, last = format_name("RICk", "mORTY")
print(first)
print(last)

# exercise
def calculation(a,b):
    add = a + b
    sub = a - b 
    return add, sub
result_add, result_sub = calculation(5,10)
print("Addition of the two numbers : ",result_add)
print("substraction of the two number : ", result_sub)

# passing list as function arguments

def greet_users(users):
    for user in users:
        print ('Hello ' + user.title() + " ! ")

usernames = ["steve", "john", "dany"]
greet_users(usernames)