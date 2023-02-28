from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MangaSerializer, GenreSerializer, RatingSerializer
from .models import Manga, Genre, Rating

# Create your views here.

class MangaView(viewsets.ModelViewSet):
    serializer_class = MangaSerializer
    queryset = Manga.objects.all()

class GenreView(viewsets.ModelViewSet):
    serializer_class = GenreSerializer
    queryset = Genre.objects.all()

class RatingView(viewsets.ModelViewSet):
    serializer_class = RatingSerializer
    queryset = Rating.objects.all()