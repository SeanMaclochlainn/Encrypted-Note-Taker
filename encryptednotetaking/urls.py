from .api import NoteViewSet
from rest_framework.routers import DefaultRouter
import logging

router = DefaultRouter()
router.register(r'notes', NoteViewSet)

urlpatterns = router.urls
