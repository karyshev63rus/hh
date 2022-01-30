from django.conf import settings
from django.core.mail import EmailMessage


def email_message(target_email):
    subject = 'Подтверждение адреса эл. почты, указанного при регистрации'
    message = 'Адрес эл. почты нуждается в подтверждении.'
    email = EmailMessage(
        subject,
        message,
        settings.EMAIL_HOST_USER,
        [target_email]
    )
    email.send()
