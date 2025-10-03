#!/bin/bash

echo "Killing all Next.js dev servers..."
killall -9 node 2>/dev/null
sleep 2

echo "Clearing ports..."
lsof -ti:3000,3001,3002,3003,3004,3005 2>/dev/null | xargs kill -9 2>/dev/null
sleep 2

echo "Starting clean dev server..."
cd /Users/officemac/Projects/Superior_Furniture_Mattress/superior-furniture-website
npm run dev
