from .views import ImageViewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ImageViewset, basename='images')
urlpatterns = router.urls