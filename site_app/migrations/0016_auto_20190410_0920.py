# Generated by Django 2.1.7 on 2019-04-10 09:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('site_app', '0015_footer_copyright'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='email',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='team',
            name='facebook',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='team',
            name='linkedin',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='team',
            name='telegram',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='team',
            name='twitter',
            field=models.URLField(blank=True, null=True),
        ),
    ]
