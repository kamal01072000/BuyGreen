from django.urls import path,include
from. import views

urlpatterns = [
    path('login', views.login ,name ="login"),
    path('loginotp', views.loginotp ,name ="loginotp"),   
    path('contactus', views.contactus ,name ="contactus"),    
    path('farmproduct', views.farmproduct ,name ="farmproduct"),    
]
