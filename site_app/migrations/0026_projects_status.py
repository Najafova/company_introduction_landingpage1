# Generated by Django 2.1.7 on 2019-04-18 10:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('site_app', '0025_projects'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='status',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]
