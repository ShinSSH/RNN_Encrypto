//데이터
data_sets=[]
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:"",asso_file:""}
data_sets.push({
  sub_title:"가상화폐 사이트 API 파악",
  sub_content:"API를 이용해 훈련데이터 자료 추출",
  sub_img:["159yBEARFoGx-u9USYsOPYPCZsLejcrhU",
           "1_7D74MLKJl5FTEvJ3Z1nAoFwicSkKVUO",
           "1I39KPje62cJQ2tMaDCq1r6XsVIjj_GOk",
           "1xTlq0ta0dVe2Vo8Ryj23KgRmRBfcrhzI"],
  user_fill:"Bithumb의 API를 사용해 훈련데이터에 사용할 자료를 추출함 ",
  asso_file:"관련파일 /anal_data/getInitName()/anal_data/getCandleData()"
})

data_sets.push({
  sub_title:"데이터 확인 분류 및 훈련 데이터 생성",
  sub_content:"훈련데이터와 정답데이터의 일치성을 확인 후 데이터 분류 후 최종 데이터 생성",
  sub_img:["1sjHY4duxXitav1eaGAsDZmeEocl9nfpf",
           "1SUfkIoGXfqL6F_k_MR6GWAGh3nJBFwcg"],
  user_fill:"불러 온 캔들데이터로 훈련데이터와 정답데이터를 생성, 산점도를 이용해 관련성체크 후 분류",
  asso_file:"관련파일 /anal_data/Confirm_Data()/anal_data/scatterAnal()"
})

data_sets.push({
  sub_title:"모델 생성",
  sub_content:"모델 생성 후 예측모델 평가모델 적용",
  sub_img:["1hB9J99jaKlbPdenlPXkglgEq0VhMWDGG",
           "1bxZ8rcQdU60HOu7YlofnGWT-smhvJE6P"],
  user_fill:"LSTM을 적용시킨 모델을 훈련",
  asso_file:"관련파일 /RNN_constructure/constructureModel()/userPredict/getX()/userPredict/predict_coinprice()"
})

data_sets.push({
  sub_title:"모델 트레이닝",
  sub_content:"main_running을 실행하여 저장된 모델 트레이닝",
  sub_img:["1Lt-J-AGnLXEi6e8UNl1pfmd3K8cLkZDH",
           "1Pqr59aLUimcCuL8NatCybI0_Ie2TLyn5",
           "1aVBf8j9Yq1AfaRV_IYSu9PhMWFGQk1Hl"],
  user_fill:"화폐명, 훈련횟수를 직접 선택하여 훈련",
  asso_file:"관련파일 "
})

data_sets.push({
  sub_title:"평가 및 예측값 확인",
  sub_content:"트레이닝 및 평가 예측을 동시 진행",
  sub_img:["1_VfQpUrd6vZUGy82dOYpFxkfoAy4GpcU",
           "1SS1ZMsRGOXDHqGZ61wq6vAUkkzsMCZJy",
           "1p04fHDPH-LToDD_EfMWiDpwub0xaDoQ-",
           "1t61gICTkLFZuKeGMurhmoAAIorsRePQd"],
  user_fill:"1회 훈련시마다 평가와 예측을 반복",
  asso_file:"관련파일 "
})

data_sets.push({
  sub_title:"모델 성능 시각화",
  sub_content:"훈련 된 모델의 loss값을 시각화 시킴",
  sub_img:["1Bt3LQHXWpm7g7xIXQusNVs3KFmqlFfIa",
           "1gaTNCAK-7YZZZr27D-xcmWRsn2ILipqC"],
  user_fill:"matplotlib을 이용해 loss값 시각화",
  asso_file:"관련파일 "
})