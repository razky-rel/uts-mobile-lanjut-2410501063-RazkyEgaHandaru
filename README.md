# 🍲 ResepKita App - UTS Pemrograman Mobile Lanjut


## 👤 Informasi Mahasiswa

- **Nama** : Razky Ega Handaru
- **NIM** : 2410501063
- **Kelas** : A
- **Tema** : Tema A - ResepKita (Katalog Resep Kuliner)

---

## 🛠️ Tech Stack
| Library/Framework | Versi         |
|-------------------|---------------|
| React Native      | 0.81.5        |
| Expo SDK          | 54.0.33       |
| React Navigation  | v6/v7         |
| Axios             | ^1.15.2       |
| Context API       | Native React  |

---

## 🚀 Cara Install dan Run

1. **Clone Repository**

   ```bash

   git clone https://github.com/razky-rel/uts-mobile-lanjut-2410501063-RazkyEgaHandaru.git 

   ```

2. **Masuk ke Direktori**

    ```bash
     
     cd uts-mobile-lanjut-2410501063-RazkyEgaHandaru

    ```

3. **Install Dependencies**

    ```bash 
    
    npm install
    
    ```

4. **Jalankan Aplikasi**

    ```bash 
    
    npx expo start
    
    ```

Scan QR Code menggunakan aplikasi Expo Go di Android/iOS.

---

## 📱 Screenshot Aplikasi

1. **Home Screen**

    <img src="assets/screenshots/homescreen.jpg" />

2. **Browse Screen**

    <img src="assets/screenshots/browsescreen.jpg" />

3. **Detail Screen**

    <img src="assets/screenshots/detailscreen.jpg" />

4. **Search Screen**

    <img src="assets/screenshots/searchscreen1.jpg" />

    <img src="assets/screenshots/searchscreen2.jpg" />

5. **Favorites Screen**

    <img src="assets/screenshots/favoritesscreen.jpg" />

6. **About Screen**

    <img src="assets/screenshots/aboutscreen.jpg" />

---

## 🎬 Video Demo

   **Youtube**
    
    https://youtu.be/3vRNwZwS2e4

   **Drive**

   https://drive.google.com/drive/folders/1TX67I_bGgXfOeC2VanAV4TbGMqPaLQgQ

---

## 🧠 Justifikasi State Management

Pada projek ini saya memilih menggunakan context API sebagai state management untuk mengelola fitur "Favorit"

Alasan saya menggunakannya karena dengan skala aplikasi ini, context API jauh lebih ringan dibanding redux toolkit karena tidak memerlukan library tambahan. selain itu, ini juga merupakan fitur bawaan dari react, jadi bisa meminimalisir ukuran aplikasi. 

---

## 📚 Daftar Referensi

1. React Navigation Documentation - https://reactnavigation.org/docs/getting-started

2. TheMealDB APi - https://www.themealdb.com/api.php

3. React Native Paper - https://callstack.github.io/react-native-paper/

4. Stack Overflow Handling Axios Error - https://stackoverflow.com

---

## 📝 Refleksi Pengerjaan

Selama mengerjakan project ini, saya sudah belajar banyak soal integrasi API eksternal dan manajemen navigasi di React Native. Salah satu kendala terbesar yang saya hadapi adalah ketika mengimplementasikan fitur favorit. dalam prosesnya, saya banyak menemui hambatan seperti data yang tidak masuk setelah tombol favorit diklik, lalu tombol favorit yang tidak bisa dibatalkan, dan juga masalah resep yang sempat tidak bisa diklik. Setelah dilakukan debugging, ternyata kebanyakan masalah tersebut disebabkan oleh perbedaan penamaan (case-sensitive) dan beberapa typo pada penulisan variabel.

selain itu, hal teknis yang juga berkesan adalah ketika saya mendapat masalah pada bagian git. secara tidak sengaja saya mengupload file yang salah. untungnya saya belajar cara menggunakan git commit --amend dan force push untuk memperbaiki masalah tersebut dengan membersihkan riwayat commit. Pengalaman ini memberikan pemahaman mendalam bahwa pengembangan aplikasi bukan hanya soal koding, tapi juga soal ketelitian dalam workflow dan penanganan error yang baik agar aplikasi tetap stabil dalam berbagai kondisi.









