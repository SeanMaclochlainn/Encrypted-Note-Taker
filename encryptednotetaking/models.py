from django.db import models


class Note(models.Model):
    title = models.CharField(max_length=300)
    encrypted_content = models.TextField()
    date_modified = models.DateTimeField(auto_now=True)