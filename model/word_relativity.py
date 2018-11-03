from nltk.corpus import wordnet as wn
from itertools import product

def valid_synset(synset, word):
    synset_word = synset.name()[:synset.name().find('.')]
    return word.startswith(synset_word)

def calc_word_relativity(word1, word2):
    sem1, sem2 = wn.synsets(word1), wn.synsets(word2)

    max_score = 0
    for i, j in list(product(sem1, sem2)):
        if valid_synset(i, word1) and valid_synset(j, word2):
            score = i.wup_similarity(j) # Wu-Palmer Similarity
            if score != None:
                max_score = max(max_score, score)

    return max_score

if __name__ == '__main__':
    print(calc_word_relativity('cat', 'dog'))
    print(calc_word_relativity('dog', 'cat'))
    print(calc_word_relativity('dog', 'dog'))