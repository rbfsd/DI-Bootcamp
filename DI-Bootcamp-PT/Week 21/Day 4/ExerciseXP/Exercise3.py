from exercice import Dog

class PerDog(Dog):
    def __init__(self,name, age, weight,trained = False):
        super().__init__(name,age,weight)
        self.trained=trained

    def train(self):
        self.bark()
        self.trained = True

    def  play(self, *dog_names):
        print(f"{','.join(dog_names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained to do tricks yet")