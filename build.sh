#!/usr/bin/env bash
# exit on error
set -o errexit

# poetry install

pip install -r requirements.txt

npm i
npm run build
python3 manage.py collectstatic --no-input
python3 manage.py migrate

