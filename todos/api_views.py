from .models import Entry
from rest_framework import viewsets
from .serializers import EntrySerializer
# Create your api viewsets here.


class EntryViewSet(viewsets.ModelViewSet):

    queryset = Entry.objects.all()
    serializer_class = EntrySerializer
