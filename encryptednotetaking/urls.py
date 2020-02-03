from django.conf.urls import url
from django.views.generic import TemplateView

from .api import NoteApi

urlpatterns = [
    url(r'^notes$', NoteApi.as_view()),
    url(r'^home', TemplateView.as_view(template_name="encryptednotetaking/home.html"))
]
