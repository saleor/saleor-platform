FROM ghcr.io/saleor/saleor:3.11.12

RUN apt-get -y update \
  && apt-get install -y redir \
  # Cleanup apt cache
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]