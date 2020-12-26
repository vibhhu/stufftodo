#!/usr/bin/env python3

import requests
from bs4 import BeautifulSoup

# Find the best games from the Steam store and return as a dictionary.
def scrape_games():
    try:
        URL = 'https://store.steampowered.com/search/?filter=topsellers'
        page = requests.get(URL)

        soup = BeautifulSoup(page.content, 'html.parser')

        results = soup.find(id='search_resultsRows')

        elems = results.find_all('a')
        games = []
        for i, elem in enumerate(elems):
            name = elem.find('span', class_='title').text
            url = elem['href']
            img_url = elem.find('img')['src']
            games.append({"name": name, "type": "Video Game", "url": url, "img_url": img_url})

        return games

    except:
        print("Error loading video games.")
        return []
