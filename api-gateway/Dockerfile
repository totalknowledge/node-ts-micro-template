FROM debian:bookworm-slim

EXPOSE 9901
EXPOSE 10000

CMD ["envoy", "-c", "/etc/envoy.yaml"]

RUN apt update
RUN apt install debian-keyring debian-archive-keyring apt-transport-https curl lsb-release -y
RUN curl -sL 'https://deb.dl.getenvoy.io/public/gpg.8115BA8E629CC074.key' | gpg --dearmor -o /usr/share/keyrings/getenvoy-keyring.gpg
# Verify the keyring - this should yield "OK"
RUN echo a077cb587a1b622e03aa4bf2f3689de14658a9497a9af2c427bba5f4cc3c4723 /usr/share/keyrings/getenvoy-keyring.gpg | sha256sum --check
RUN echo "deb [arch=amd64 signed-by=/usr/share/keyrings/getenvoy-keyring.gpg] https://deb.dl.getenvoy.io/public/deb/debian $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/getenvoy.list
RUN apt update
RUN apt install getenvoy-envoy -y
RUN apt purge apt-transport-https curl lsb-release -y

COPY envoy.yaml /etc/envoy.yaml
