from time import time

def timer(func):

    def wrapper(*args, **kwargs):
        start = time()
        func(*args, **kwargs)
        end = time()
        print(f"Time <{func.__name__}>: {end-start}")

    return wrapper

@timer
def function_to_measure(arg1, arg2):

    pass

