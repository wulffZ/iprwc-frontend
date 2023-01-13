#!/bin/bash
echo "Changing node version with NVM..."
. ~/.nvm/nvm.sh;
nvm use
echo "Starting front-end..."
npm run serve-prod
