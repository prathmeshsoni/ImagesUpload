from django.db import models


class Image(models.Model):
    file = models.FileField(upload_to='images/')

    def __str__(self):
        file_name = self.file.name.split('/')[-1]
        return file_name
    