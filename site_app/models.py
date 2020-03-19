from django.db import models
from django.utils.text import slugify
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField
from django.contrib.auth import get_user_model
from datetime import datetime   
# Create your models here.
from PIL import Image

User = get_user_model()

class Article(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    #description = RichTextField(blank=True, null=True)
    description = RichTextUploadingField(blank=True, null=True)
    body = models.TextField(blank=True, null=True)
    order = models.IntegerField(blank=True, null=True)
    author = models.ForeignKey(User,
                               null=True,
                               blank=True,
                               on_delete=models.DO_NOTHING)
    publish_date = models.DateTimeField(default=datetime.now, blank=True)
    status = models.BooleanField(null=True, blank=True)

    slug = models.SlugField(default='', blank=True)

    def save(self):
        self.slug = slugify(self.title)
        super(Article, self).save()

    def __str__(self):
        return "{}".format(self.title)
    
    class Meta:
        ordering = ('-publish_date',)
        verbose_name = "Article"
        verbose_name_plural = "Articles"


class Menu(models.Model):
    name = models.CharField(max_length=255)
    url = models.CharField(max_length=255)
    url_id = models.CharField(max_length=255, default='')
    order = models.IntegerField()
    status = models.BooleanField()

    def __str__(self):
        return "{}".format(self.name)

        class Meta:
            ordering = ['order',]



class Footer(models.Model):
    facebook = models.URLField(null=True, blank=True)
    linkedin = models.URLField(null=True, blank=True)
    youtube = models.URLField(null=True, blank=True)
    email_visual = models.CharField(max_length=255)
    telephone_visual = models.CharField(max_length=255)
    address_visual = models.CharField(max_length=255)
    email_functional = models.CharField(max_length=255, default="-")
    telephone_functional = models.CharField(max_length=255, default="-")
    copyright = models.CharField(max_length=255,null=True, blank=True)

    def __str__(self):
        return "{} {} {} {} {} {}".format(self.facebook, self.linkedin,
                                          self.youtube, self.email_visual, 
                                          self.telephone_visual, 
                                          self.address_visual)

    class Meta:
        verbose_name = "Footer"
        verbose_name_plural = "Footer"

class Team(models.Model):
    fullname = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    image = models.ImageField(upload_to='website/', 
                              null=True, blank=True)
    facebook = models.URLField(null=True, blank=True)
    linkedin = models.URLField(null=True, blank=True)
    status = models.BooleanField(null=True, blank=True)
    order = models.IntegerField(default=False)

    def __str__(self):
        return "{} {} {} {}".format(self.fullname, self.position, self.status, 
                                    self.order)
        
    class Meta:
        verbose_name = "Team"
        verbose_name_plural = "Team"
        ordering = ('order',)

class ProjectGeneral(models.Model):
    title = models.CharField(max_length=255) 
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return "{}".format(self.title)

    class Meta:
        verbose_name = "Project General"
        verbose_name_plural = "Project General"

class Description(models.Model):
    title = models.CharField(max_length=255) 
    description = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return "{}".format(self.title)

    class Meta:
        verbose_name = "Main section"
        verbose_name_plural = "Main section"
    


class About(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='website/', 
                              null=True, blank=True)

    def __str__(self):
        return "{}".format(self.title)

    class Meta:
        verbose_name = "About"
        verbose_name_plural = "About"


class Video(models.Model):
    url = models.CharField(max_length=255)

    def __str__(self):
        return "{}".format(self.url)

    class Meta:
        verbose_name = "Video"
        verbose_name_plural = "Video"

class Projects(models.Model):
    project_name = models.CharField(max_length=255)
    project_description = models.TextField(blank=True, null=True)
    project_image_1 = models.ImageField(upload_to='website/', 
                              null=True, blank=True)
    project_image_2 = models.ImageField(upload_to='website/', 
                              null=True, blank=True)
    project_image_3 = models.ImageField(upload_to='website/', 
                              null=True, blank=True)
    project_image_4 = models.ImageField(upload_to='website/', 
                              null=True, blank=True)
    status = models.BooleanField(null=True, blank=True)

    def __str__(self):
        return "{} {}".format(self.project_name, self.status)

    class Meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"

    # def save(self, *args, **kwargs):
    #     super().save(*args, **kwargs)
    #
    #     img = Image.open(self.project_image_1.path)
    #     # , self.project_image_2.path, self.project_image_3.path, self.project_image_4.path
    #     if img.height > 300 or img.width > 300:
    #         output_size = (300, 300)
    #         img.thumbnail(output_size)
