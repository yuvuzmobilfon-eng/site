# EAO International Trade - Website Setup Guide

## 📦 Dosyalar

✅ **index.html** - Ana HTML dosyası (EmailJS SDK dahil)
✅ **styles.css** - Premium CSS tasarım
✅ **script.js** - EmailJS entegrasyonlu JavaScript
🖼️ **eao_logo_yeni.jpg** - Logo dosyanı ekle

---

## 🔧 EmailJS Yapılandırması

### Mevcut Ayarlar:
```javascript
Service ID:  service_42x412j
Template ID: template_8do4xuc
Public Key:  ne9rT0ejhMmnkPT63
```

Bu bilgiler zaten `script.js` dosyasına eklenmiş durumda!

---

## 📧 EmailJS Template Ayarları

EmailJS dashboard'unda template'ini düzenlerken:

### Template Settings:
- **Template Name:** `EAO Contact Form`
- **Subject:** `🚀 New Contact - {{company}} ({{name}})`
- **To Email:** `senin@emailin.com` ← **BURAYA SENİN EMAİLİNİ YAZ**
- **From Name:** `{{name}}`
- **From Email:** `noreply@emailjs.com` (varsayılan)
- **Reply To:** `{{email}}`

### Content (HTML Email Template):

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc; border-radius: 10px;">
    
    <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
    </div>
    
    <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        
        <div style="margin-bottom: 20px; padding: 15px; background: #dbeafe; border-left: 4px solid #3b82f6; border-radius: 5px;">
            <strong style="color: #1e3a8a; font-size: 16px;">Contact Information</strong>
        </div>
        
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; width: 140px;"><strong style="color: #475569;">Name:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">{{name}}</td>
            </tr>
            <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">Email:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">{{email}}</td>
            </tr>
            <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">Company:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">{{company}}</td>
            </tr>
            <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">Phone:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">{{phone}}</td>
            </tr>
            <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">Interest:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">{{interest}}</td>
            </tr>
        </table>
        
        <div style="margin-top: 25px; padding: 15px; background: #f1f5f9; border-left: 4px solid #3b82f6; border-radius: 5px;">
            <strong style="color: #1e3a8a; font-size: 16px; display: block; margin-bottom: 10px;">Message:</strong>
            <p style="color: #334155; line-height: 1.6; margin: 0; white-space: pre-wrap;">{{message}}</p>
        </div>
        
        <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #1e3a8a; font-size: 14px;">
                📧 <strong>Sent from EAO International Trade Website</strong><br>
                <span style="font-size: 12px; color: #475569;">Please respond within 24 hours for best customer experience</span>
            </p>
        </div>
        
    </div>
    
</div>
```

---

## 📁 Kurulum Adımları

1. **Dosyaları İndir:**
   - index.html
   - styles.css
   - script.js
   - eao_logo_yeni.jpg (logo dosyanı ekle)

2. **Klasör Yapısı:**
   ```
   📁 website/
     ├── index.html
     ├── styles.css
     ├── script.js
     └── eao_logo_yeni.jpg
   ```

3. **EmailJS Template Ayarla:**
   - https://dashboard.emailjs.com/ giriş yap
   - Email Templates → template_8do4xuc → Edit
   - "To Email" kısmına senin email'ini yaz
   - Content kısmına yukarıdaki HTML'i yapıştır
   - Save Template

4. **Test Et:**
   - index.html'i tarayıcıda aç
   - Contact formunu doldur
   - "Send Message" butonuna bas
   - Email'ine gelen mesajı kontrol et!

---

## ✨ Form Alanları

Form'dan gönderilen veriler:

| Form Alanı | EmailJS Değişkeni | Örnek Değer |
|-----------|------------------|-------------|
| Name | `{{name}}` | John Smith |
| Email | `{{email}}` | john@example.com |
| Company | `{{company}}` | ABC Corporation |
| Phone | `{{phone}}` | +1 234 567 8900 |
| Interest | `{{interest}}` | 360° Amazon Consulting |
| Message | `{{message}}` | I want to grow my business |

---

## 🎯 İlgilenilen Hizmetler (Interest Options)

✅ Authorized Distribution
✅ 360° Amazon Consulting
✅ Cross-Border Fulfillment
✅ Multiple Services

---

## 🚀 Özellikler

- ✅ EmailJS entegrasyonu
- ✅ Form validasyonu
- ✅ Loading animasyonu
- ✅ Başarı/hata bildirimleri
- ✅ Otomatik form temizleme
- ✅ Responsive tasarım
- ✅ Professional UI/UX
- ✅ Email formatı kontrolü
- ✅ Çift gönderim önleme

---

## 📞 Destek

Herhangi bir sorun olursa:
1. Browser console'u kontrol et (F12)
2. EmailJS dashboard'unda "Logs" bölümünü incele
3. Template ayarlarını tekrar kontrol et

---

## 🔒 Güvenlik

- Public Key zaten script.js'de kodlanmış
- API anahtarları güvenli (client-side safe)
- CORS politikaları EmailJS tarafından yönetiliyor

---

**Son Güncelleme:** 2024
**EmailJS Konfigürasyonu:** Aktif ✅
