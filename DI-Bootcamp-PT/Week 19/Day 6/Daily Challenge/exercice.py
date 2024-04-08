# challenge 1
word = input('Enter a word: ')
letter_index = {}

for index, letter in enumerate(word):
    if letter in letter_index:
        letter_index[letter].append(index)
    else:
        letter_index[letter] = [index]

print(letter_index)


# challenge 2
wallet_input = input('put the amount you have in your wallet: ')
wallet_amount = int(wallet_input.replace('$', '').replace(',', ''))

items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

affordable_items = []

for item, price in  items_purchase.items():
    price_number = int(price.replace('$', '').replace(',', ''))
    if price_number <= wallet_amount:
        affordable_items.append(item)

# sort()  sorts list in ascending order by default
affordable_items.sort()

if affordable_items:
    print(affordable_items)
else:
    print("Nothing")

