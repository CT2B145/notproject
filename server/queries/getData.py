import sqlite3
import numpy

connection = sqlite3.connect('../data/shows.db')
cursor = connection.cursor()
cursor.execute('''SELECT * from doctor_a''')
rows: numpy.ndarray = cursor.fetchall()

print(rows)
connection.commit()
connection.close()