curl "https://tic-tac-toe-api-production.herokuapp.com/change-password" \
  --include \
  --request POST \
  --header 'Authorization: Bearer' + ${TOKEN} \
  --header "Content-Type: application/json" \

echo
