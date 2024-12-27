======================== < describe > ========================  

가상화폐 API를 이용한 시계열데이터 회귀분석예측
지속적인 모델 업그레이드를 위해 저장된 모델을 이용해 추가 훈련가능
시간이 지날 수록 성능이 좋아 질 수 있음

==========================================================  

1.크롤링 작업   
Crawling/Craw_image_running :: main run  
Crawling/Google_Crawling_Image :: import    
Crawling/Naver_Crawling_Image :: import 
** 입력 : 이미지 저장경로, 검색어, 영문파일이름    

::: 실습환경 :::  
[ 크롬 드라이버 필요 ] (https://googlechromelabs.github.io/chrome-for-testing/)     
win64 v131.0.6788.108  
[ 크롬 웹브라우저 필요 ]  
131.0.6778.140(공식 빌드) 64bit

2.이미지 배경 제거 및 데이터 증강   
Preprocessing/Preprocessing_Running :: main run 
Preprocessing/Remove_Background :: import   
Preprocessing/utility :: import     
** 이미지 배경제거 후 회전,밝기조정 확대 기법으로 이미지 데이터 증강    

::: 실습 환경 :::   
tf.image.random_brightness  
tf.keras.layers.RandomRotation  
tf.keras.layers.RandomFlip  
tf.keras.layers.RandomZoom  
rembg.remove    

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