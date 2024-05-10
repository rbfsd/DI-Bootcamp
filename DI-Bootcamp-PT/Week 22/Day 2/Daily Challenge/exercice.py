# circle
import math
import turtle 

class Circle():
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2

    def get_radius(self):
        return self.radius
    
    def get_diameter(self):
        return 2 * self.radius
    
    def compute_area(self):
        return math.pi * self.radius**2

    def __str__(self):
        return f"circle with radius : {self.radius}"
    
    def __add__(self,other):
        return Circle(radius = self.radius + other.radius)
    
    def __eq__(self, other):
        return self.radius == other.radius
    
    def __lt__(self, other):
        return self.radius < other.radius
    
circle1 = Circle(radius=50)
circle2 = Circle(diameter=10)   

print(circle1.get_radius())  # Output: 5
print(circle2.get_diameter())  # Output: 10
print(circle1.compute_area())  # Output: 78.53981633974483
print(circle2.compute_area())  # Output: 78.53981633974483
print(circle1 + circle2)  # Output: Circle with radius: 10.0
print(circle1 == circle2)  # Output: True
print(circle1 < circle2)   # Output: False

t = turtle.Turtle()
t.circle(circle1.get_radius())
t.circle(circle2.get_radius())
turtle.done()