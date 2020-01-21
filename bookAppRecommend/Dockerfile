FROM java:8-jre
WORKDIR /usr/src

COPY ./target/bookAppRecommend-0.0.1-SNAPSHOT.jar bookAppRecommend-0.0.1-SNAPSHOT.jar
#EXPOSE 8001
ENTRYPOINT ["java","-jar","/usr/src/bookAppRecommend-0.0.1-SNAPSHOT.jar"]