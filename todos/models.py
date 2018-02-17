from django.db import models

# Create your models here.


class Entry(models.Model):

    date = models.DateField(auto_now=False)
    time = models.TimeField('Time input in 24hr format, \
        e.g. 17:30 = 5:30 pm',
                            auto_now=False)
    description = models.CharField(max_length=100)
