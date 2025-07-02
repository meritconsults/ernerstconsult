from django.db import models


class Payment(models.Model):
    email = models.CharField(max_length=100, null=False, blank=False)
    number = models.CharField(max_length=100, null=False, blank=False)
    full_name = models.CharField(max_length=100, null=False, blank=False)
    transaction_id = models.CharField(max_length=100, null=False, blank=False)