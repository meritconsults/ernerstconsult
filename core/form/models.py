from django.db import models

# Create your models here.
class Form(models.Model):
    GENDER_CHOICES = [
         ('male', 'Male'),
          ('female', 'Female'),
           ('other', 'Other'),
    ]

    MARITAL_STATUS = [
        ("single", "Single"),
        ("married", "Married"),
        ("divorced", "Divorced"),
    ]
    EDUCATION_STATUS = [
        ("high school", "High School"),
        ("college", "College"),
        ("university", "University"),
    ]
    MULTIPLE_CHOICE = [
        ("yes", "Yes"),
        ("no", "No"),
    ]
    WORK_POSITIONS = [
        ("factory worker","FACTORY WORKER"),
("farm worker","FARM WORKER"),
("cleaner","CLEANER"),
("caretaker","CARETAKER"),
("chef","CHEF"),
("waiter","WAITER"),
("electrician","ELECTRICIAN"),
("plumber","PLUMBER") ,
("security","SECURITY"),
("painter","PAINTER"),
("driver","DRIVER"),
("computer operator","COMPUTER OPERATOR"),
("laundry","LAUNDRY"),
("teacher","TEACHER"),
("nurse","NURSE"),
("forklift","FORKLIFT"),
("civil engineer","CIVIL ENGINEER"),
("mechanic","MECHANIC"),

    ]

    first_name = models.CharField(max_length=100, null=False, blank=False)
    last_name = models.CharField(max_length=100, null=False, blank=False)
    email = models.EmailField(max_length=100)
    age = models.CharField(max_length=10)
    date_of_birth = models.DateTimeField(auto_now_add=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, default="male")
    telephone = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    marital_status = models.CharField(max_length=100, choices=MARITAL_STATUS, default="single")
    education = models.CharField(max_length=50, choices=EDUCATION_STATUS, default="high school")
    preferred_work = models.CharField(max_length=100, choices=WORK_POSITIONS, default="cleaner")
    work_experience = models.CharField(max_length=10)
    elegibility = models.CharField(max_length=10, choices=MULTIPLE_CHOICE, default='no')
    traveling_experience = models.CharField(max_length=10, choices=MULTIPLE_CHOICE, default='no')



