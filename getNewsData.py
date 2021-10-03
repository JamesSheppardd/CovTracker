import requests
import json
import config

language = "en"
query = "covid"
startDate = "2021-10-01"
sortBy = "relevancy" # can be: popularity, publishedAt, relevancy
searchUrl = f"https://newsapi.org/v2/everything?q={query}&from={startDate}&sortBy={sortBy}&apiKey={config.newsKey}&language={language}"

country = "gb"
#searchUrl = f"https://newsapi.org/v2/top-headlines?country={country}&q={query}&apiKey={key}"

response = requests.get(searchUrl)
data = json.dumps(response.json())
jsonFile = "./assets/data/worldNews.json"
with open(jsonFile, "w") as r:
    r.write(data)

d = json.loads(data)
print(f"Data written to file: {jsonFile} with {(len(d['articles']))} articles.")