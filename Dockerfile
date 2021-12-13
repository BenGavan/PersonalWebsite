# docker build -f Dockerfile -t personal-website .
# docker run -p 80:80 personal-website
FROM golang:1.13-alpine3.11 AS builder
RUN mkdir /build
ADD . /build/
WORKDIR /build
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -ldflags '-extldflags "-static"' -o main .

FROM scratch
COPY --from=builder /build/main .
COPY /src src
COPY /static static
WORKDIR .

EXPOSE 80

CMD ["./main"]

