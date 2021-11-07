# app.py

import sqlite3

connection = sqlite3.connect('data/shows.db')
cursor = connection.cursor()
cursor.execute('''CREATE TABLE IF NOT EXISTS Shows
              (Title TEXT, Director TEXT, Year INT)''')

connection.commit()
connection.close()