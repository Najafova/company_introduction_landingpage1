# Generated by Django 2.1.7 on 2019-04-19 09:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('site_app', '0026_projects_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='menu',
            name='url_id',
            field=models.CharField(default='#', max_length=255),
        ),
    ]
