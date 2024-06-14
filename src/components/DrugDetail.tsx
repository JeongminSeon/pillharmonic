import React from "react";
import styled from "@emotion/styled";
import drug from "../assets/drug.png";
import saveIcon from "../assets/saveIcon.png";
import shareIcon from "../assets/shareIcon.png";
import heartIcon from "../assets/heartIcon.png";

const DetailContainer = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 200px auto;
  background-color: #f3f7ff;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  color: #666;
`;

const DrugImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  margin-right: 20px;
`;

const DrugInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const DrugInfo = styled.div`
  flex-grow: 1;
`;

const DrugText = styled.p`
  line-height: 1.6;
  color: #333;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ActionIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export default function DrugDetail() {
  return (
    <DetailContainer>
      <Header>
        <div>
          <Title>리보트릴정(클로나제팜)</Title>
          <Subtitle>항전간제</Subtitle>
        </div>
        <Actions>
          <ActionIcon src={heartIcon} alt='Like' />
          109
          <ActionIcon src={saveIcon} alt='Bookmark' />
          <ActionIcon src={shareIcon} alt='Share' />
        </Actions>
      </Header>
      <DrugInfoContainer>
        <DrugImage src={drug} alt='Drug' />
        <DrugInfo>
          <DrugText>1정(150mg)중 클로나제팜 0.5mg</DrugText>
          <DrugText>
            간질 및 부분발작(초점발작), 원발성 및 2차적으로 전신화된
            강직간대발작(대발작), 유·소아 간질(특히 정형성 및 비정형성 결신발작)
          </DrugText>
          <DrugText>
            초회를 - 투여 초기의 부작용 발생을 방지하기 위하여 환자의 최적
            용량이 결정될 때까지 전체적 용량을 증가시켜서 2~4주 이내에
            유지용량에 도달하게 한다.
          </DrugText>
          <DrugText>
            유지용량 - 환자의 연령 및 증상발작의 지속시간, 횟수, 정도, 다른
            간질약의 병용 여부 등에 따라 적절히 조절되어야 하므로 이 약의 내약성
            및 임상반응을 고려하여 최적 용량을 결정한다.
          </DrugText>
        </DrugInfo>
      </DrugInfoContainer>
    </DetailContainer>
  );
}
