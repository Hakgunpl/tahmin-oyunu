const eklenecekSayi = sayiSec()

const ad = prompt("Adın nedir?")

alert("Oyun başlıyor 📣") 
alert("Aklından bir sayı tut")
alert("Sayıyı iki ile çarp")
alert(`Sonuca ${eklenecekSayi} ekle`)
alert("Çıkan sonucu 2'ye böl")
alert("Sonuçtan ilk başta tuttuğun sayıyı çıkar")
alert(`Cevap ${eklenecekSayi / 2}`)
alert(`Güle güle ${ad}`)

function sayiSec() { // fonksiyon 2, 4, 6, 8 sayılarından birisini üretir
     // 2, 4, 6, 8 sayılarının dizinini oluştur
  const numbers = [2, 4, 6, 8]

  // Rastgele bir sayı seç
  const randomIndex = Math.floor(Math.random() * numbers.length)

  // Seçilen sayıyı döndür
  return numbers[randomIndex]
}
