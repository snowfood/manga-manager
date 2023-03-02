from rest_framework import serializers
from .models import Manga, Genre, Rating

class MangaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manga
        fields = ('id', 'name', 'author','genre','last_read_chapter','newest_chapter','rating', 'completed', 'currently_reading', 'url', 'img_url','bookmarked')

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ('id', 'name','count')

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ('id', 'name', 'number')
    