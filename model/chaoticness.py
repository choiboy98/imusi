from model.word_relativity import calc_word_relativity
import numpy as np

NORM = 1

def calc_chaos(image_concepts):
    if len(image_concepts) < 2:
        return 0
    
    chaos_vector = []
    for i, concept1 in enumerate(image_concepts):
        relativity_vector = []
        for concept2 in image_concepts:
            if concept1 == concept2:
                continue
            relativity_vector.append(calc_word_relativity(concept1, concept2))

        relativity_vector = np.array(relativity_vector)
        chaos = 1 - np.average(relativity_vector)
        chaos_vector.append(chaos)

    chaos_vector = np.array(chaos_vector)
    return np.average(chaos_vector)

if __name__ == '__main__':
    print(calc_chaos(['grass', 'tree', 'green']))
    print(calc_chaos(['bird', 'train', 'technology']))