FROM java:8-jre
WORKDIR /usr/src

COPY ./target/bookAppComment-0.0.1-SNAPSHOT.jar bookAppComment-0.0.1-SNAPSHOT.jar
#EXPOSE 8001
ENTRYPOINT ["java","-jar","/usr/src/bookAppComment-0.0.1-SNAPSHOT.jar"]
