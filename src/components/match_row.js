import React from 'react';

// # Date and time played
// # Game mode (Ranked, Normal, etc.)
// # Champion played
// # Win/Loss outcome
// # Key stats: kills, deaths, assists, gold earned, vision score
// # Bonus points:
// # Sorting and filtering options: date, game mode, champion, win/loss
// # Pagination for managing long match histories
// # Optional: Hovering over a match shows detailed stats popup

const MatchRow = ({ info: { gameCreation, gameStatTime, gameDuration, gameMode, gameName, teams: { win }, participants } }) => {
    return (
        <div>
            {/* Your JSX code for the MatchRow component */}
        </div>
    );
};

export default MatchRow;
