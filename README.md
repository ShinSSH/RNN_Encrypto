======================== < describe > ========================  

가상화폐 API를 이용한 시계열데이터 회귀분석예측     
지속적인 모델 업그레이드를 위해 저장된 모델을 이용해 추가 훈련가능       
시간이 지날 수록 성능이 좋아 질 수 있음

==========================================================  

1.API활용 가상화폐 데이터 수집

anal_data/getInitName :: 가상화폐 이름 수집     
anal_data/getCandleData :: 가상화폐 캔들데이터 수집

2.훈련 데이터 생성 및 데이터 일치성 확인 및 분류

anal_data/generateData :: 캔들 데이터로 훈련 데이터 생성     
anal_data/Confirm_Data :: 문제 데이터와 정답 데이터 일치성 확인     
anal_data/scatterAnal :: 산점도 그래프로 관련성 확인           

** 5번 인덱스(quantity)는 관련성 부족으로 데이터에서 제외시킴

3.데이터 전처리 및 훈련 실행 및 평가  
Trainning/train_fit :: main run 
Trainning/construct_Model :: import     
** 평가 훈련 실행 시 최적값으로 조기종료 콜백 적용  

::: 실습환경 :::    
Sequential,Input,Dense,Conv2D,Dropout,MaxPool2D,    
Flatten, confusion_matrix,classification_report,heatmap  

4.모델 실제 이미지 처리 및 샘플 확인      
SampleData_Predict/test_class :: main run   
샘플 이미지 파일을 생성한 모델로 측정   
::: 준비물 :::     
샘플용 단일 이미지  

※ 순서대로 실행 시 생성되는 파일 리스트     
Training/classification_image.keras (생성된 모델)    
classification_image.history (훈련결과 손실수치)    
config (영문 라벨 리스트)  

※ 원본이미지 약 50x10 개, 증강이미지 약 50x5x10 개    

※ error 처리는 수행하지 않음     