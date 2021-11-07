import sqlite3
import numpy

connection = sqlite3.connect('../data/shows.db')
cursor = connection.cursor()
# cursor.execute('''SELECT * from SHOWS''')

cursor.executemany("insert into SHOWS (Title, Director, Year) values (?, ?, ?)",
                     [
                         ('One Hundred Years of Solitude', 'Gabriel García Márquez', 123123),
                         ('A Brief History of Time', 'Stephen Hawking', 123123)
                     ]
                   )


rows: numpy.ndarray = cursor.fetchall()

print(rows)
connection.commit()
connection.close()