# Generated by Django 3.2.9 on 2021-12-26 12:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='bio',
            field=models.TextField(blank=True),
        ),
    ]
