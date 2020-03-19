from django.contrib import admin
from site_app_eng.models import *

# Register your models here.

# def make_published(modeladmin, request, queryset):
#     print(queryset)
#     queryset.update(status=True)
# def make_unpublished(modeladmin, request, queryset):
#     print(queryset)
#     queryset.update(status=False)
# make_unpublished.short_description = "Saytda gorunmesin"
# make_published.short_description = "Saytda gorunsun"

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    # actions = [make_published, make_unpublished]
    list_display = ['fullname', 'position', 'order', 'status']
    search_fields = ['fullname', 'position', 'status']
    list_filter = ['fullname', 'position', 'status']

@admin.register(Footer)
class FooterAdmin(admin.ModelAdmin):
    list_display = ['facebook', 'linkedin', 'youtube', 'email_visual', 
                    'telephone_visual', 'address_visual']

@admin.register(Description)
class DescriptionAdmin(admin.ModelAdmin):
    list_display = ['title']

@admin.register(ProjectGeneral)
class ProjectGeneralAdmin(admin.ModelAdmin):
    list_display = ['title', 'description']

@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = ["name", "url", "order", "status"]
    search_fields = ["name", "status"]
    list_filter = ["status"]

@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ["title", "description"]

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ["url"]

@admin.register(Projects)
class ProjectsAdmin(admin.ModelAdmin):
    list_display = ["project_name", "status"]
    search_fields = ["project_name", "status"]
    list_filter = ["status"]
