# BUILDER #

# pull official base image
FROM python:3.9.5-slim as builder

# set working directory
WORKDIR /home/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# initial system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends gcc

# install python dependencies
COPY requirements.txt .
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /usr/src/app/wheels -r requirements.txt

# FINAL #

# pull official base image
FROM python:3.9.5-slim

# create directory for the app user
RUN mkdir -p /home/app

# create the app user
RUN addgroup --system app && adduser --system --group app

# set working directory
WORKDIR /home/app/backend

# install dependencies
COPY --from=builder /usr/src/app/wheels /wheels
RUN pip install --upgrade pip
RUN pip install --no-cache /wheels/*

# copy project
COPY . /home/app/backend/
