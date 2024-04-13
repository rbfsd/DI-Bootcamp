# exception handing

# an exception is an error that occurs while the program is execuring 
# when this error occur the program will stop and generate an exception

try :
    print(x) 
except :
    print('An error occured')

# comme x n'est pas defini qq part alors il 'y'aura une erreur

try :
    print (x)
except ValueError :
    print('non-numeric data')
except NameError:
    print ('variable x is not defined')
except : 
    print('Some error occured')

try:
  print ("Hello World")
except ValueError:
  print ("Non-numeric data found")
except NameError:
  print ("Variable x is not defined")
except:
  print ("Some error occured")
else:
  print ("Nothing went wrong")


try:
  print ("Hello World")
except ValueError:
  print ("Non-numeric data found")
except NameError:
  print ("Variable x is not defined")
except:
  print ("Some error occured")
finally:
  print ("--Finally--")

# args

def check_args(*args):
   print(f'These are the arguments {args} ')
check_args(1,2, 'hey')

def check_tuple(a,b):
    # Returns the sum of 'a' and 'b'
    return sum((a,b))

print(check_tuple(10,30))

# Multiple *args
def check_multiple_arguments(*args):
    return sum(args)

print(check_multiple_arguments(10,20,100,30))


# kwargs

def  check_keywordedarguments(**kwargs):
    print(kwargs)

check_keywordedarguments(name="Sarah", age=24)


def check_keywordarguments(**kwargs):
   for key, value in kwargs.items():
    print (f"{key}, ':', {value}")
check_keywordedarguments(name="Sarah", age=24)

#   *Args And **Kwargs Together

def check_arguments_keywordedarguments(required_arg, *args, **kwargs):
   print(required_arg)
   if args:
      print(args)
   if kwargs:
      print(kwargs)


check_arguments_keywordedarguments("required argument")
check_arguments_keywordedarguments("required argument", 1, 2, 'hey')
check_arguments_keywordedarguments("required argument", 1, 2, 'hey', name="Sarah", age=24)

# Passing *Args And **Kwargs As Arguments

def check(a,b,c):
   print(a,b,c)

a = [1,2,3]
check(*a)

# a = {'a':'Sarah', 'b': 24}
# check(**a)
# gettint an error cause c value is missing

a = {'a':'Sarah', 'b':24, 'c': 180}
check(**a)