FROM java:8-jre
WORKDIR /usr/src

COPY ./target/bookAppFavourite-0.0.1-SNAPSHOT.jar bookAppFavourite-0.0.1-SNAPSHOT.jar
#EXPOSE 8001
ENTRYPOINT ["java","-jar","/usr/src/bookAppFavourite-0.0.1-SNAPSHOT.jar"]