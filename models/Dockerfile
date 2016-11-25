FROM python:2.7

WORKDIR /6element

COPY ./requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY ./analysis analysis
COPY ./prediction prediction
COPY ./sensors sensors
COPY ./fetch.py fetch.py

VOLUME ["/6element/sensors"]

CMD ["python", "fetch.py"]
