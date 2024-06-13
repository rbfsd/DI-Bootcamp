def display_board(board):
    print("\n")
    print(f" {board[0]} | {board[1]} | {board[2]} ")
    print("---|---|---")
    print(f" {board[3]} | {board[4]} | {board[5]} ")
    print("---|---|---")
    print(f" {board[6]} | {board[7]} | {board[8]} ")
    print("\n")


def player_input(player, board):
    while True:
        try:
            position = int(input(f"Player {player}, enter your move (1-9): ")) - 1
            if position in range(9) and board[position] == ' ':
                return position
            else:
                print("Invalid move. Try again.")
        except ValueError:
            print("Invalid input. Please enter a number between 1 and 9.")


def check_win(board):
    win_conditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Columns
        [0, 4, 8], [2, 4, 6]              # Diagonals
    ]
    for condition in win_conditions:
        if board[condition[0]] == board[condition[1]] == board[condition[2]] and board[condition[0]] != ' ':
            return True
    return False


def play():
    board = [' '] * 9
    current_player = 'X'
    turns = 0
    
    while turns < 9:
        display_board(board)
        move = player_input(current_player, board)
        board[move] = current_player
        turns += 1
        
        if check_win(board):
            display_board(board)
            print(f"Player {current_player} wins!")
            return
        
        current_player = 'O' if current_player == 'X' else 'X'
    
    display_board(board)
    print("It's a tie!")


if __name__ == "__main__":
    play()
