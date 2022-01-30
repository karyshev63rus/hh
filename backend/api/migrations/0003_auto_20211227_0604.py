# Generated by Django 3.2.9 on 2021-12-27 06:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_note_author'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(db_index=True, max_length=64)),
                ('slug', models.SlugField(max_length=240, null=True, unique=True)),
            ],
        ),
        migrations.AddField(
            model_name='note',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='category', to='api.category'),
        ),
    ]
