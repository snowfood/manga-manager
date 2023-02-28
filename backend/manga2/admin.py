from django.contrib import admin
from .models import Genre, Rating, Manga, Metric


class MangaAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'author','total_chapters','newest_chapter','completed', 'currently_reading')

class GenreAdmin(admin.ModelAdmin):
    list_display = ('id','name','count')

class RatingAdmin(admin.ModelAdmin):
    list_display = ('id','name')

# Register your models here.

admin.site.register(Manga, MangaAdmin)
admin.site.register(Genre, GenreAdmin)
admin.site.register(Rating, RatingAdmin)
admin.site.register(Metric)