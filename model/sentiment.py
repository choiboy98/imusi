import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import pickle

nltk.download('vader_lexicon')

def calc_sentiment(sentence):
    sentiment_analyzer = SentimentIntensityAnalyzer()
    scores = sentiment_analyzer.polarity_scores(sentence)
    sentiment = scores['compound']
    return sentiment

def load_sentiment_model(file):
    model = {}
    with open(file, 'rb') as f:
        model = pickle.load(f)
    return model

def calc_image_sentiment(image_concepts):
    sentiments = []
    sentiment_model = load_sentiment_model('./model/sentiment_model.dat')
    for concept in image_concepts:
        word_sentiment = calc_sentiment(concept)
        sentence_sentiment = sentiment_model.get(concept, 0)
        if word_sentiment != 0:
            sentiments.append(word_sentiment)
        elif sentence_sentiment != 0:
            sentiments.append(sentence_sentiment)
    return sum(sentiments) / len(sentiments)

if __name__ == '__main__':
    sentiment = calc_sentiment('bird')
    print(sentiment)

    concepts = ['bird', 'sky', 'blue']
    print(calc_image_sentiment(concepts))

    concepts = ['train', 'railroad', 'transportation']
    print(calc_image_sentiment(concepts))
