from django.db import models

# Create your models here.


class Entry(models.Model):

    date = models.DateField(auto_now=False)
    time = models.TimeField(auto_now=False)
    description = models.CharField(max_length=100)
