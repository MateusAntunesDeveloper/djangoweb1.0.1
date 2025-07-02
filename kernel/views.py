from django.shortcuts import render
from django.http import HttpResponse
from . import urls

def tarefass(request):

    return HttpResponse("ola mundosssss")


def index(request):
    return render(request, "index.html")

def Create_account(request):
    return render(request,"Create_account.html")
