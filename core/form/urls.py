from django.urls import path
from .views import FormListCreateView, FormDetailView, SubmittedFormListView

urlpatterns = [
    path('forms/', FormListCreateView.as_view(), name='form-list-create'),
    path('forms/<int:pk>/', FormDetailView.as_view(), name='form-detail'),
    path('submitted-forms/', SubmittedFormListView.as_view(), name='submitted-form-list'),
]
