""" Balanced Checker """

def is_balanced_with_quotes(expr:str) -> bool:

    matching_parantheses  = {
        ')':'(',
        '}':'{',
        ']':'['
    }

    stack = [] 

    for char in expr:
        if char in matching_parantheses.values():
            stack.append(char)
        elif char in matching_parantheses.keys():
            if stack == [] or stack.pop() != matching_parantheses[char]:
                return False
            
    return stack == []

# Exemple d'utilisation
print(is_balanced_with_quotes('(1 + 2) * {"[(3 / 4) - 5]"}')) 
print(is_balanced_with_quotes('[1 + 2) * (3 - 4)]'))         
print(is_balanced_with_quotes('((1 + 2)'))                   
print(is_balanced_with_quotes('("1 + 2")'))                 
print(is_balanced_with_quotes('("1 + 2)'))                   

