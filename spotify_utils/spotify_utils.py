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

def get_recommendations(acousticness, danceability, energy, speechiness, valence):
    results = sp.recommendations(seed_genres=GENRES, target_danceability=danceability, target_energy=energy,
                                 target_speechiness=speechiness, target_valence=valence, target_acousticness=acousticness)
    songs = []
    for track in results['tracks']:
        songs.append({'artists': track['artists'][0]['name'],
                      'name': track['name'],
                      'id': track['id']})
    return songs
