# OpenJDK 21 사용
FROM openjdk:21-slim
WORKDIR /app

# build/libs 안의 JAR 복사 (Gradle 빌드 결과)
COPY build/libs/portfolio-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

# 실행
ENTRYPOINT ["java", "-jar", "app.jar"]