from django.contrib import admin
from .models import Entry
# Register your models here.


class EntryAdmin(admin.ModelAdmin):

    list_display = ['date', 'time', 'description']
    list_display_link = ['date']
    list_filter = ['date',
                   'time', ]

    search_fields = ['date',
                     'time',
                     'description']


admin.site.register(Entry, EntryAdmin)
