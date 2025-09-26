TebakNamaIndonesia - Firebase-enabled
====================================

File ini siap di-upload ke GitHub Pages atau Firebase Hosting.

Langkah cepat (termudah):
1. Buat project di Firebase Console.
2. Tambahkan Web App dan copy konfigurasi firebaseConfig.
3. Buka file `firebase-config.js` dan paste:
   e.g.
   const firebaseConfig = {
     apiKey: "...",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "...",
     messagingSenderId: "...",
     appId: "..."
   };
4. Di Firebase Console > Firestore Database: klik Create database, pilih 'Start in test mode'.
5. Upload semua file ke GitHub repository, aktifkan GitHub Pages (branch main, root).
   - Atau deploy ke Firebase Hosting dengan firebase-tools.
6. Buka URL GitHub Pages / Firebase Hosting dari HP, masukkan nama dan mainkan.

Catatan:
- Pastikan Firestore rules sementara diizinkan (test mode) saat pengujian.
- Jika leaderboard tidak muncul, cek console browser untuk pesan error (bisa terkait aturan index Firestore; jika diminta, buat composite index di Firebase Console sesuai permintaan).
