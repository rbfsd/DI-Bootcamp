# HTTP: Hyper text transfer protocol

# http method: GET & POST

""" 
there are two types of http message:
request and response """

# python API

""" 
API can be accessed using http protocol 
"""

# request libraries

# pip install requests
import requests

response = requests.get("http://api.open-notify.org/iss-now.json")
print(response.json())
print(response.header)

