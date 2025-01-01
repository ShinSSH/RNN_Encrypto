======================== < describe > ========================  

가상화폐 API를 이용한 시계열데이터 회귀분석예측     
지속적인 모델 업그레이드를 위해 저장된 모델을 이용해 추가 훈련가능       
시간이 지날 수록 성능이 좋아 질 수 있음

==========================================================  

1.API활용 가상화폐 데이터 수집

anal_data/getInitName() :: 가상화폐 이름 수집     
anal_data/getCandleData() :: 가상화폐 캔들데이터 수집

2.훈련 데이터 생성 및 데이터 일치성 확인 및 분류

anal_data/generateData() :: 캔들 데이터로 훈련 데이터 생성     
anal_data/Confirm_Data() :: 문제 데이터와 정답 데이터 일치성 확인     
anal_data/scatterAnal() :: 산점도 그래프로 관련성 확인           

** 5번 인덱스(quantity)는 관련성 부족으로 데이터에서 제외시킴

3.모델 생성 및 구성

RNN_constructure/constructureModel() :: 모델 구성  

** LSTM 사용

::: 실습환경 :::    
Sequential,Input,Dense,LSTM

4.모델 트레이닝 및 예측값 확인과 평가 및 시각화   

main_running/train_running :: 최종데이터 생성 및 트레이닝      
rnn_evaluation/rnn_graph ::  matplotlib - loss 시각화
rnn_evaluation/today_predict :: 예측값 확인
rnn_evaluation/evaluationModel :: 모델 평가
RNN_Encrypto/main_running :: main run