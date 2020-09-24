from rest_framework import viewsets
from .serializers import ImageSerializer
from .models import ImageModel
from django.http import HttpResponse
from django.views.generic import View
from django.conf import settings
import logging
import urllib.request
import os

class ImageViewset(viewsets.ModelViewSet):
    serializer_class = ImageSerializer
    queryset = ImageModel.objects.all()

    def post(self, request, *args, **kwargs):
        title = request.data['title']
        image = request.data['image']
        ImageModel.objects.create(title=title, image=image)
        return HttpResponse({'message': 'item created'}, status=200)

class FrontendAppView(View):

    def get(self, request):
            print (os.path.join(settings.BASE_DIR, 'build', 'index.html'))
            try:
                with open(os.path.join(settings.BASE_DIR, 'build', 'index.html')) as f:
                    return HttpResponse(f.read())
            except FileNotFoundError:
                logging.exception('Production build of app not found')
                return HttpResponse(
                    """
                    This URL is only used when you have built the production
                    version of the app. Visit http://localhost:3000/ instead, or
                    run `yarn run build` to test the production version.
                    """,
                    status=501,
                )
