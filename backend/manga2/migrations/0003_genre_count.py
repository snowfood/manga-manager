# Generated by Django 4.1.5 on 2023-02-17 04:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manga2', '0002_rename_genres_genre_rename_metrics_metric_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='genre',
            name='count',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]