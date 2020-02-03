from rest_framework.generics import ListAPIView

from .serializers import NoteSerializer
from .models import Note


class NoteApi(ListAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
