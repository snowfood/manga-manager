from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from manga2 import views

router = routers.DefaultRouter()
router.register(r'mangas', views.MangaView, 'manga')
router.register(r'genres', views.GenreView, 'genre')
router.register(r'ratings', views.RatingView, 'rating')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]