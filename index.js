/*

 This partially finished application is for a Tic-Tac-Toe
 game.

 The game uses a Ttt_Game_Board_class class that manages the board spots in an array property.
 - Uses a property to track if the game is active or has ended
 - Uses a property to keep up with the number of turns taken

 The game provides methods to Draw the board
 - Place an X or O in a specified space (0 - 8 in the board space array)
 - Checks if there has been a winner
 - Checks if their has been a tie (CAT)

 */
class Ttt_Game_Board_class
{
    constructor()
    {
        // The array to handle the game pieces (elements 0 - 8)
        this.game_places_p = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
        this.game_over_p = true;
        this.game_move_count = 0;
    }

    // This method can be used any time you want to redraw the current game board with X/Os
    draw_game_table()
    {
        console.clear(); // Clear the table

        // Let's use a template string to format a simple, multiline ttt table
        let game_table = `
        ${this.game_places_p[0]} | ${this.game_places_p[1]} | ${this.game_places_p[2]}
        --|---|--
        ${this.game_places_p[3]} | ${this.game_places_p[4]} | ${this.game_places_p[5]}
        --|---|--
        ${this.game_places_p[6]} | ${this.game_places_p[7]} | ${this.game_places_p[8]}
        `;

        console.log(game_table); // Log table in the console using the template string
    }

    // Use this method to start a new game
    // The method resets move count to zero,
    new_game()
    {
        this.game_places_p = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
        this.game_over_p = false;
        this.game_move_count = 0;
        this.draw_game_table();
    }

    // Use this method to place a marker on the game board at some location
    // The method takes the position (0 - 8) and will
    place_a_mark(board_position, current_player_letter)
    {
        // TODO: Student add extra data validation to make sure a valid board spot entered (0 - 8) and that the spot isn't already taken
        // Accept upper or lower case
        if (current_player_letter.toUpperCase() === 'X')
        {
            console.log(`X has been placed`);
            this.game_places_p[board_position] = 'X';
        }
        else if (current_player_letter.toUpperCase() === 'O')
        {
            console.log(`O has been placed`);
            this.game_places_p[board_position] = 'O';
            // Handle invalid input
        }
        else
        {
            alert('Please enter a valid current_player_letter! (X or O)');
        }
        // Update the table displayed and bump up the move count
        this.draw_game_table();
        this.game_move_count++;
        this.check_for_winner(current_player_letter);
        return true; // Marker successfully placed
    }

    // This method is used to check if there has been a winner OR a tie (CAT)
    // The current_player_letter is passed in (X or O)
    // TODO: Student must implement logic that will detect if there was a Winner or a CAT
    check_for_winner(current_player_letter)
    {
    }
}


/*
 Main Point of Entry for Execution of the Program
 */
function main()
{
    // Create a new tic-tact-toe table
    let ttt_game_instance = new Ttt_Game_Board_class();
    ttt_game_instance.new_game();

    // Start the game
    let player_move = ""; // Will track which game table cell player entered last
    // player_turn - Keeps track of which player's turn it is, when game starts, let players pick who will have first
    // turn
    let player_turn = prompt(`
    Enter which player goes first (X or O)
    `).toUpperCase();
    if (player_turn.toUpperCase() !== 'X' && player_turn.toUpperCase() !== 'O')
    {
        alert(`
        Please enter a valid letter! (X or O) Refresh to restart the game.
        `);
    }
    ttt_game_instance.new_game(); // use the instance method and start a new game

    // Setup a loop that will let the 2 players take turns until there is a winner or a tie(CAT)
    while (player_move !== 'q' && ttt_game_instance.game_over_p === false)
    {
        // Ask for which space on the grid where they want to place their marker (X/O)
        player_move = prompt(`
        PLAYER ${player_turn}: Enter the space to mark (0 - 8) or 'q' to Quit
        `);
        // Check first to see if they entered 'Q' to quit. If they did, don't place the marker.
        if (player_move.toUpperCase() !== 'Q')
        {
            // Use class method to place marker
            if (ttt_game_instance.place_a_mark(player_move, player_turn))
            {
                // Switch User if marker SUCCESSFULLY placed and game still going
                if (ttt_game_instance.game_over_p === false)
                {
                    player_turn = (player_turn === 'X') ? 'O' : 'X';
                }
            }
        }
    }

    // GAME OVER MAN!
    alert(`Thanks for playing!`)
}

// Go! Go! Go!
main();
