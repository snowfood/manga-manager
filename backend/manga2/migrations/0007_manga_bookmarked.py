# Generated by Django 4.1.5 on 2023-03-01 19:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manga2', '0006_manga_img_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='manga',
            name='bookmarked',
            field=models.BooleanField(default=False),
        ),
    ]