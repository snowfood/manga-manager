from django.db import models

# Create your models here.
class Genre(models.Model):
    name = models.CharField(max_length=120)
    count = models.IntegerField(default=0)

    def _str_(self):
        return self.title

class Rating(models.Model):
    name = models.CharField(max_length=120)
    number = models.IntegerField()

    def _str_(self):
        return self.title

class Manga(models.Model):
    name = models.CharField(max_length=120)
    author = models.CharField(max_length=120)
    genre = models.ManyToManyField(Genre)
    total_chapters = models.IntegerField()
    newest_chapter = models.IntegerField()
    rating = models.ManyToManyField(Rating)
    completed = models.BooleanField(default=False)
    currently_reading = models.BooleanField(default=False)

    def _str_(self):
        return self.title

class Metric(models.Model):
    total_mangas_read = models.IntegerField()
    weekly_chapter_avg = models.IntegerField()
    most_daily_chapters= models.IntegerField()
    top_5_mangas = models.ManyToManyField(Manga)

    def _str_(self):
        return self.title

