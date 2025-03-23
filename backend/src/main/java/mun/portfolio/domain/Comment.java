package mun.portfolio.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity // JPA에서 정의된 필드들을 바탕으로 데이터베이스에 테이블을 만들어줌
@Getter // 필드값을 조회할 수 있는 getter를 자동 생성
@Setter
@NoArgsConstructor // 파라미터가 없는 기본 생성자를 자동으로 만들어줌
@AllArgsConstructor // 선언된 모든 필드를 파라미터로 갖는 생성자를 자동으로 만들어줌
@Builder // 해당 클래스에 해당하는 엔티티 객체 만들 때 빌더 패턴을 이용해서 만들 수 있도록 지정
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String writer;
    private String content;
}
