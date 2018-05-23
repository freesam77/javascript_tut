# "import os" digunakan untuk mengimport function2 python yang berhubungan dengan Operating System
import os

# pass in directorymu
os.chdir("/Users/samuelrazali/Desktop/CoderAcademy/Works/Term 2/javascript/test")

# disini, aku udah tempatin "test.txt" dalam directory yang sama
f = open("test.txt","r")
string = f.read()
print string

# .lower() buat convert smuanya jadi lowercase
string.lower()

# tinggal di test-run deh .count() nya...
print string.count('t')
print string.count('o')