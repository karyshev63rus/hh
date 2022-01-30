from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer 
from .models import CustomUser


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(CustomTokenObtainPairSerializer, cls).get_token(user)
        token['id'] = user.id
        token['email'] = user.email
        token['email_is_verified'] = user.email_is_verified
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['location'] = user.location
        token['birth_date'] = user.birth_date
        token['bio'] = user.bio
        return token


class CustomUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True
    )
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = CustomUser
        fields = (
                    'id',
                    'email',
                    'password',
                    'email_is_verified',
                    'first_name',
                    'last_name',
                    'location',
                    'birth_date',
                    'bio',
        )
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class UpdateCustomUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)

    class Meta:
        model = CustomUser
        fields = (
                    'first_name', 
                    'last_name',
                    'email',
                    'email_is_verified',
                    'birth_date',
                    'location',
                    'bio'            
        )

    def update(self, instance, validated_data):
        instance.first_name = validated_data['first_name']
        instance.last_name = validated_data['last_name']
        instance.email_is_verified = validated_data['email_is_verified']
        instance.birth_date = validated_data['birth_date']
        instance.location = validated_data['location']
        instance.bio = validated_data['bio']

        instance.save()

        return instance
