curl "https://tic-tac-toe-api-production.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${token}" \
  --data '{
    "game":{
    "cells":["","","","","","","","",""],
    "over":false
}'

echo
