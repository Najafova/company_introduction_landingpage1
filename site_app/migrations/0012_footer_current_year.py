# Generated by Django 2.1.7 on 2019-04-10 09:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('site_app', '0011_footer_footer_logo'),
    ]

    operations = [
        migrations.AddField(
            model_name='footer',
            name='current_year',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
