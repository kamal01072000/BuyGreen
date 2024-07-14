from django.shortcuts import render,redirect
from .sendsms import *
import os
import random
from twilio.rest import Client


# Create your views here.


def home(request):
    return render(request,"tapp/home.html")

def farmproduct(request):
    return render(request ,'tapp/farmproduct.html')


def login(request):
    if request.method == "POST":
        account_sid = "AC8f9a765ba27eb8d7d1b83889e3744686"
        auth_token = "5c9cb9eb12e5ebdb166c9c40d4338be6"
        verify_sid = "VA340c07f6e77bdf7a79ffc1c1d81f5474"
        verified_number = "+918124838318"
        client = Client(account_sid, auth_token)
        verification = client.verify.v2.services(verify_sid) .verifications .create(to=verified_number, channel="sms")
        print(verification.status)
        return redirect('loginotp')
    return render(request,"tapp/login.html")



def loginotp(request):
    if request.method =="POST":
        print('test1..........')
        account_sid = "AC8f9a765ba27eb8d7d1b83889e3744686"
        auth_token = "5c9cb9eb12e5ebdb166c9c40d4338be6"
        verify_sid = "VA340c07f6e77bdf7a79ffc1c1d81f5474"
        verified_number = "+918124838318"
        client = Client(account_sid, auth_token)
        otp = request.POST.get('otp_code')  
        print(otp)
        verification_check = client.verify.v2.services(verify_sid) .verification_checks.create(to=verified_number, code=otp)
        print(verification_check.status)
    return render(request,"tapp/loginotp.html")

def contactus(request):
    return render(request,"tapp/contactus.html")


def verlogin(request):
    pass