from django import forms
from .models import Entry


class EntryForm(forms.ModelForm):
    date = forms.DateField(widget=forms.SelectDateWidget())

    class Meta:

        model = Entry

        fields = [
            'date',
            'time',
            'description'
        ]
