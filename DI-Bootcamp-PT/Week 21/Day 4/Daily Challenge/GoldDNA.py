import random

class Gene():
    def __init__(self, value):
        self.value = value

    def mutate(self):
        self.value = 1 - self.value

    def __str__(self):
        return str(self.value)
    
class Chromosome():
    def __init__(self, genes=None):
        if genes:
            self.genes = genes
        else:
            self.genes = [Gene(random.choice([0, 1])) for _ in range(10)]

    def mutate(self):
        num_genes_to_mutate = random.randint(0, 10)
        for _ in range(num_genes_to_mutate):
            index = random.randint(0, 9)
            self.genes[index].mutate()

    def __str__(self):
        return ''.join(str(gene) for gene in self.genes)
    
class DNA:
    def __init__(self, chromosomes=None):
        if chromosomes:
            self.chromosomes = chromosomes
        else:
            self.chromosomes = [Chromosome() for _ in range(10)]

    def mutate(self):
        num_chromosomes_to_mutate = random.randint(0, 10)
        for _ in range(num_chromosomes_to_mutate):
            index = random.randint(0, 9)
            self.chromosomes[index].mutate()

    def __str__(self):
        return ' '.join(str(chromosome) for chromosome in self.chromosomes)

class Organism:
    def __init__(self, dna, environment):
        self.dna = dna
        self.environment = environment

    def mutate(self):
        if random.random() < self.environment:
            self.dna.mutate()

    def has_only_ones(self):
        return all(gene.value == 1 for chromosome in self.dna.chromosomes for gene in chromosome.genes)


# Testing the classes
dna = DNA()
organism = Organism(dna, 0.1)  # Assuming a low mutation probability for testing
generations = 0

while not organism.has_only_ones():
    organism.mutate()
    generations += 1

print(f"Generations needed to reach all 1s DNA: {generations}")
