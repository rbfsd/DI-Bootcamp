# rock-paper-scissors.py

from game import Game

def get_user_menu_choice():
    while True:
        print("\nMenu:")
        print("1. Play a new game")
        print("2. Show scores")
        print("3. Quit")
        choice = input("Enter your choice: ")
        if choice in ['1', '2', '3']:
            return choice
        else:
            print("Invalid choice. Please enter 1, 2, or 3.")

def print_results(results):
    print("\nGame Summary:")
    print(f"Wins: {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws: {results['draw']}")
    print("Thank you for playing!")

def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}
    while True:
        choice = get_user_menu_choice()
        if choice == '1':
            game = Game()
            result = game.play()
            results[result] += 1
        elif choice == '2':
            print_results(results)
        elif choice == '3':
            print_results(results)
            break

if __name__ == "__main__":
    main()
