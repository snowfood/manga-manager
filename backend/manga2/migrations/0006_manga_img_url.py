# Generated by Django 4.1.5 on 2023-03-01 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manga2', '0005_rename_total_chapters_manga_last_read_chapter_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='manga',
            name='img_url',
            field=models.CharField(default=0, max_length=120),
            preserve_default=False,
        ),
    ]
