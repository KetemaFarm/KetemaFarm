from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from .serializers import RegisterSerializer, LoginSerializer, LogoutSerializer , ProfileSerializer
from .models import User

class RegisterAPI(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered"}, status=201)
        return Response(serializer.errors, status=400)


class LoginAPI(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            refresh = RefreshToken.for_user(user)
            return Response({
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "role": user.role
            })
        return Response(serializer.errors, status=401)

        
class LogoutAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = LogoutSerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                return Response({"message": "Logout successful."}, status=status.HTTP_205_RESET_CONTENT)
            except Exception:
                return Response({"error": "Invalid token."}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfileAPI(APIView):
    permission_classes = [IsAuthenticated]  # Only authenticated users can access profiles

    def get(self, request, id=None):
        try:
            # If no ID provided, return current user's profile
            user_id = id if id else request.user.id
            user = User.objects.get(id=user_id)

            # Users can only view their own profile unless they're staff
            if not (request.user.is_staff or user.id == request.user.id):
                return Response(
                    {"error": "You can only view your own profile"},
                    status=status.HTTP_403_FORBIDDEN
                )

            serializer = ProfileSerializer(user)
            return Response(serializer.data)

        except User.DoesNotExist:
            return Response(
                {"error": "User not found"},
                status=status.HTTP_404_NOT_FOUND
            )