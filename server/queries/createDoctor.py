# app.py

import sqlite3

# Appointments should have a unique ID,
# patient first name, patient last name, date & time, and kind (New Patient or Follow-up).

connection = sqlite3.connect('../data/doctor_a.db')
cursor = connection.cursor()
cursor.execute('''CREATE TABLE IF NOT EXISTS Doctor_A
              (First_Name TEXT, Last_Name TEXT, DATE datetime, Patient_Type TEXT)''')

connection.commit()
connection.close()