from django.shortcuts import render
from django.urls import reverse_lazy
from django.http import HttpResponseRedirect
from .models import Entry
from .forms import EntryForm

# Create your views here.


def index(request):
    entries = Entry.objects.all()
    form = EntryForm(request.POST or None)

    if form.is_valid():

        instance = form.save(commit=False)
        instance.save()
        return HttpResponseRedirect(reverse_lazy('todos'))

    context = {
        'data': entries,
        'title': 'Appointments',
        'form': form,
    }
    return render(request, 'todos/index.html', context)
