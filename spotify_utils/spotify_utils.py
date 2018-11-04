import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import os

client_id = os.environ.get('SPOTIPY_CLIENT_ID')
client_secret = os.environ.get('SPOTIPY_CLIENT_SECRET')
client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

GENRES = ["acoustic",
    "classical",
    "hip-hop",
    "pop",
    "rock"]
MIN_IMG_SIZE = 500

def closer_to_size(a, b):
    return abs(MIN_IMG_SIZE - a) < abs(MIN_IMG_SIZE - b)

def get_best_image_line(track):
    best_size = 0
    best_link = None
    for image in track['album']['images']:
        height = image['height']
        link = image['url']
        if best_size == 0 or closer_to_size(height, best_size):
            best_size = height
            best_link = link
    return best_link

def get_recommendations(acousticness, danceability, energy, speechiness, valence):
    results = sp.recommendations(seed_genres=GENRES, target_danceability=danceability, target_energy=energy,
                                 target_speechiness=speechiness, target_valence=valence, target_acousticness=acousticness)
    songs = []
    for track in results['tracks']:
        songs.append({'artist': track['artists'][0]['name'],
                      'name': track['name'],
                      'id': track['id'],
                      'image_link': get_best_image_line(track)})
    return songs
