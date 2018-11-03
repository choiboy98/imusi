import pickle
from word_relativity import calc_word_relativity
import numpy as np

NORM = np.inf

def load_lyric_model(filename):
    genres = {}
    with open(filename, 'rb') as f:
        genres = pickle.load(f)
    return genres

def calc_popularity(image_concepts):
    lyric_words = load_lyric_model('lyric_data.dat')

    score = []
    for lyric in lyric_words:
        relativity_vector = []
        for concept in image_concepts:
            relativity_vector.append(calc_word_relativity(lyric, concept))
        relativity_vector = np.array(relativity_vector)

        score.append(np.linalg.norm(relativity_vector, NORM))

    return np.linalg.norm(score, NORM)

if __name__ == '__main__':
    l = ['love', 'tonight', 'everything']
    pop = calc_popularity(l)
    print(l, pop)

    l = ['train', 'railroad', 'station']
    pop = calc_popularity(l)
    print(l, pop)

    l = ['business', 'technology', 'screen']
    pop = calc_popularity(l)
    print(l, pop)