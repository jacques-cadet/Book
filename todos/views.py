from django.shortcuts import render
from django.urls import reverse_lazy
from django.http import HttpResponseRedirect
from .forms import EntryForm

# Create your views here.


def index(request):

    form = EntryForm(request.POST or None)

    if form.is_valid():

        instance = form.save(commit=False)
        instance.save()
        return HttpResponseRedirect(reverse_lazy('index'))

    context = {
        'title': 'Appointments',
        'form': form,
    }
    return render(request, 'todos/index.html', context)
