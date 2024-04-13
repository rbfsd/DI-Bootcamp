def divide_by_zero():
    try:
        result = 5 / 0  # Tentative de division par zéro
        print("Résultat:", result)  # Si la division réussit, imprimer le résultat
    except ZeroDivisionError:
        print("Erreur : Impossible de diviser par zéro !")  # Si une erreur de division par zéro est attrapée, imprimer un message d'erreur

divide_by_zero()  # Appel de la fonction pour voir le résultat