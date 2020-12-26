import requests
from bs4 import BeautifulSoup

# Find the best books from nytimes and return as a dictionary.
def scrape_books():
    try:
        URL = 'https://www.nytimes.com/books/best-sellers/'
        page = requests.get(URL)

        soup = BeautifulSoup(page.content, 'html.parser')

        results = soup.find(itemtype="http://schema.org/ItemList")

        elems = results.find_all('li', class_='css-1mr03gh')
        books = []
        for i, elem in enumerate(elems):
            header = elem.find('h3')
            name = header.text
            book_retailer = elem.find('ul').find('a')
            url = book_retailer['href']
            img_url = elem.find('div', class_='css-9fprjv').find('img')['src']
            books.append({"name": name, "type": "Books", "url": url, "img_url": img_url})

        return books
        
    except:
        print("Error loading books.")
        return []