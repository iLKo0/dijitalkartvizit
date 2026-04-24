# Digital Business Card Project / Dijital Kartvizit Projesi

[English](#english) | [Türkçe](#türkçe)

---

<a name="english"></a>
## English

This project contains static digital business card pages and a management panel to generate these pages. It is designed to be a lightweight, high-performance solution for professional networking.

### Core Files

- `index.html`: Main navigation page to access generated business cards.
- `dijital-kartvizit-paneli.html`: Management panel to generate new business cards, VCF, and QR files.
- `profile.html`: Generic template for business cards.
- `css/style_v5.css`: Styles for the business card pages.
- `js/script.js`: Logic for language switching, QR code toggling, and text copying.
- `img/`: Directory for logos, profile pictures, and QR codes.
- `vcf/`: Directory for generated VCF files (virtual contact cards).

### Management Panel Features

Using `dijital-kartvizit-paneli.html`, you can:
- Enter personal information (multilingual title support).
- Upload and crop profile pictures.
- View a live preview of the card.
- Generate and save HTML, VCF, and QR files directly to the project folder.
- Automatically update `index.html` with the new profile link.

### Technical Notes

- The project uses a static architecture with no build step.
- Automatic file saving depends on the browser's `showDirectoryPicker` API (supported in modern Chrome/Edge).
- Fallback download options are provided if the API is not supported.

---

<a name="türkçe"></a>
## Türkçe

Bu proje, statik dijital kartvizit sayfalarını ve bu sayfaları üreten yönetim panelini içerir. Profesyonel ağ kurma için hafif ve yüksek performanslı bir çözüm olarak tasarlanmıştır.

### Temel Dosyalar

- `index.html`: Oluşturulmuş kartvizitlere ulaşmak için ana navigasyon sayfası.
- `dijital-kartvizit-paneli.html`: Yeni kartvizit, VCF ve QR dosyası üreten yönetim paneli.
- `profile.html`: Kartvizitler için genel şablon.
- `css/style_v5.css`: Kartvizit sayfalarının stilleri.
- `js/script.js`: Dil değişimi, QR açma ve kopyalama davranışları.
- `img/`: Logo, profil görselleri ve QR görselleri.
- `vcf/`: Rehbere kaydetmek için üretilen VCF dosyaları.

### Panel Ne Yapar?

`dijital-kartvizit-paneli.html` üzerinden:
- Kişi bilgileri girilir (çok dilli unvan desteği).
- Profil resmi seçilir.
- Canlı önizleme izlenir.
- HTML, VCF ve QR dosyaları üretilir.
- Kayıt sırasında `index.html` otomatik güncellenir.

### Teknik Notlar

- Proje, build adımı olmayan statik bir yapıdadır.
- Otomatik klasöre kayıt, tarayıcının `showDirectoryPicker` desteğine bağlıdır (modern Chrome/Edge).
- Destek yoksa panel indirme seçenekleriyle çalışır.
