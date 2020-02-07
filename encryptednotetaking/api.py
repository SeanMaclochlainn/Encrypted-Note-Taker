from rest_framework.viewsets import ModelViewSet

from .serializers import NoteSerializer
from .models import Note


class NoteViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
