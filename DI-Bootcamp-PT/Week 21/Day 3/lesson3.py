# exception

def age():
    user_age = input('How old are you\n>>>')
    #######
    try:
        user_age = int(user_age)
        print("I 'am after USER_AGE")
    except:
        print("Your age is not a real age")
        user_age = 0
    #######
    print("Next year, you will be {} years old".format(user_age+1))

age()

valid_flag = False
while not valid_flag:
    userage = input("How old are you?")
    try:
        userage = int(userage)
        valid_flag = True
    except:
        print("Please enter a real age")

print("Next year, your age will be",userage+1)

valid_flag = False
while not valid_flag:
    userage = input("How old are you?")
    try:
        userage    = int(userage)
        valid_flag = True
    except:
        pass

print("Next year, your age will be",userage+1)