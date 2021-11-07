



# coding=utf-8

import sqlite3
import numpy

connection = sqlite3.connect('../data/doctor_a.db')
cursor = connection.cursor()
# cursor.execute('''SELECT * from SHOWS''')

cursor.executemany("insert into doctor_a (First_Name, Last_Name, DATE, Patient_Type) values (?, ?, ?, ?)",
                     [
                         ('Grant', 'Fu', '2021-11-04 10:00:00', 'Follow-Up'),
                         ('Dennis', 'Freedman', '2021-11-04 13:00:00', 'New Patient'),
                         ('James', 'May', '2021-11-04 15:00:00', 'Follow-Up'),
                         ('Richard', 'Ckar', '2021-11-04 1:00:00', 'New Patient'),
                         ('Richard', 'Metar', '2021-12-04 1:00:00', 'New Patient'),
                         ('Cards', 'Hammond', '2020-11-04 1:00:00', 'New Patient'),
                         ('Karz', 'Hans', '2021-1-04 1:00:00', 'New Patient'),
                         ('Charse', 'Best', '2021-5-04 1:00:00', 'New Patient')
                         
                     ]
                   )

rows = numpy.ndarray = cursor.fetchall()

print(rows)
connection.commit()
connection.close()