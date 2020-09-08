curl "https://tic-tac-toe-api-production.herokuapp.com/sign-in" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    game: {
      cell: {
        index: "'"${dataCell}"'",
        value: "'"${currentPlayer}"'"
      },
      over: "'"${gameOver}"'"
    }
  }
}'
