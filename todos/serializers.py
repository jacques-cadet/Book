from .models import Entry
from rest_framework import serializers

# create serializers to jsonify the models


class EntrySerializer(serializers.HyperlinkedModelSerializer):

    class Meta:

        model = Entry
        fields = ('id', 'date', 'time', 'description', )
