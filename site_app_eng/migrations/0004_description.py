# Generated by Django 2.1.7 on 2019-12-09 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('site_app_eng', '0003_remove_footer_email_functional'),
    ]

    operations = [
        migrations.CreateModel(
            name='Description',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Main section',
                'verbose_name_plural': 'Main section',
            },
        ),
    ]
