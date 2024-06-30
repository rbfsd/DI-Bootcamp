import requests
import time

def get_page_load_time(url):
    """
    This function returns the amount of time (in seconds) it takes to load a webpage.
    
    :param url: URL of the webpage to test
    :return: Load time in seconds
    """
    try:
        start_time = time.time()  # Record the start time
        response = requests.get(url)
        end_time = time.time()  # Record the end time
        
        # Ensure we got a valid response
        if response.status_code == 200:
            load_time = end_time - start_time
            return load_time
        else:
            print(f"Failed to retrieve {url}, status code: {response.status_code}")
            return None
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

# Testing the function with multiple sites
sites = ["https://www.google.com", "https://www.ynet.co.il", "https://www.imdb.com"]

for site in sites:
    load_time = get_page_load_time(site)
    if load_time is not None:
        print(f"The load time for {site} is {load_time:.4f} seconds")
    else:
        print(f"Could not measure load time for {site}")
