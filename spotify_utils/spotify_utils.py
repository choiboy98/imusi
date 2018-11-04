import sys
import spotipy
import spotipy.util as util
from spotipy.oauth2 import SpotifyClientCredentials

client_credentials_manager = SpotifyClientCredentials(client_id=SPOTIPY_CLIENT_ID, client_secret=SPOTIPY_CLIENT_SECRET)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

def get_recommendations(seed_genres, target_acousticness, target_danceability, target_energy,
			target_speechiness, target_valence):
	
	results = sp.recommendations(seed_genres=seed_genres ,target_danceability=target_danceability, target_energy=target_energy,
		target_speechiness=target_speechiness, target_valence=target_valence, target_acousticness=target_acousticness)
	songs = []
	for tracks in results['tracks']:
		songs.append((tracks['artists'][0]['name'],tracks['name'],tracks['id']))
	return songs
