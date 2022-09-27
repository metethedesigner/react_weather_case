# REACT HAVA DURUMU TEST CASE UYGULAMASI

live demo: https://voluble-gumdrop-1fcf86.netlify.app
Giriş yapmak için gerekli API Key: 3152f625cab5bdde3332cb6dbec81c46

Bu uygulamada React, Redux, sessionStorage kullandım ve API tarafında OpenWeather sitesinden yararlandım.

## Docker olarak projeyi başlatmak için terminal penceresine;

### Uygulama gereksinimleri ve gerekli dosyaları yüklemek için aşağıdaki komut yazıldıktan sonra image dosyası oluşturulacaktır;
docker build -t reactdockerapp .

### Sonrasında aşağıdaki komut ile proje localhost:3000 adresinde ayağa kaldırılabilir
docker run -dp 3000:3000 reactdockerapp
