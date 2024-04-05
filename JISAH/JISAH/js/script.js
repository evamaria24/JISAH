var answers = [];

function nextQuestion(answer) {
    answers.push(answer); // Menyimpan jawaban

    // Pertanyaan selanjutnya
    if (answers.length === 1) {
        document.getElementById('question').innerHTML = "Pertanyaan 2: Bagaimana Anda menanggapi situasi yang menekan?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban3')">Panas Kepala</button>
            <button class="option" onclick="nextQuestion('jawaban4')">Tenang dan Berpikir Jernih</button>
        `;
    } else if (answers.length === 2) {
        document.getElementById('question').innerHTML = "Pertanyaan 3: Apakah Anda lebih suka bekerja di pagi hari atau malam hari?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban5')">Pagi Hari</button>
            <button class="option" onclick="nextQuestion('jawaban6')">Malam Hari</button>
        `;
    } else if (answers.length === 3) {
        document.getElementById('question').innerHTML = "Pertanyaan 4: Bagaimana Anda menyelesaikan konflik dengan rekan kerja?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban7')">Mencari Kompromi</button>
            <button class="option" onclick="nextQuestion('jawaban8')">Menghindari Konflik</button>
        `;
    } else if (answers.length === 4) {
        document.getElementById('question').innerHTML = "Pertanyaan 5: Bagaimana Anda mengelola stres?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban9')">Berolahraga</button>
            <button class="option" onclick="nextQuestion('jawaban10')">Bermeditasi</button>
        `;
    } else if (answers.length === 5) {
        document.getElementById('question').innerHTML = "Pertanyaan 6: Apakah Anda lebih suka berpikir logis atau kreatif?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban11')">Logis</button>
            <button class="option" onclick="nextQuestion('jawaban12')">Kreatif</button>
        `;
    } else if (answers.length === 6) {
        document.getElementById('question').innerHTML = "Pertanyaan 7: Bagaimana Anda menghadapi kegagalan?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban13')">Belajar dari Kesalahan</button>
            <button class="option" onclick="nextQuestion('jawaban14')">Merasa Putus Asa</button>
        `;
    } else if (answers.length === 7) {
        document.getElementById('question').innerHTML = "Pertanyaan 8: Apakah Anda cenderung menjadi pemimpin atau pengikut?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban15')">Pemimpin</button>
            <button class="option" onclick="nextQuestion('jawaban16')">Pengikut</button>
        `;
    } else if (answers.length === 8) {
        document.getElementById('question').innerHTML = "Pertanyaan 9: Bagaimana Anda menyelesaikan tugas yang diberikan?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban17')">Sistematik</button>
            <button class="option" onclick="nextQuestion('jawaban18')">Kreatif</button>
        `;
    } else if (answers.length === 9) {
        document.getElementById('question').innerHTML = "Pertanyaan 10: Apakah Anda merasa lebih nyaman dalam situasi yang terstruktur atau fleksibel?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban19')">Terstruktur</button>
            <button class="option" onclick="nextQuestion('jawaban20')">Fleksibel</button>
        `;
    }
    // Tambahkan logika untuk pertanyaan berikutnya di sini
    else if (answers.length === 10) {
        document.getElementById('question').innerHTML = "Pertanyaan 11: Bagaimana Anda menangani tekanan kerja?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban21')">Mengatur Waktu dengan Baik</button>
            <button class="option" onclick="nextQuestion('jawaban22')">Mencari Dukungan dari Rekan Kerja</button>
        `;
    } else if (answers.length === 11) {
        document.getElementById('question').innerHTML = "Pertanyaan 12: Apakah Anda cenderung untuk berpikir secara analitis atau intuitif?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban23')">Analitis</button>
            <button class="option" onclick="nextQuestion('jawaban24')">Intuitif</button>
        `;
    } else if (answers.length === 12) {
        document.getElementById('question').innerHTML = "Pertanyaan 13: Bagaimana Anda menangani kritik?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban25')">Menerima dengan Baik</button>
            <button class="option" onclick="nextQuestion('jawaban26')">Membela Diri</button>
        `;
    } else if (answers.length === 13) {
        document.getElementById('question').innerHTML = "Pertanyaan 14: Apakah Anda merasa lebih nyaman berbicara atau mendengarkan?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban27')">Bicara</button>
            <button class="option" onclick="nextQuestion('jawaban28')">Mendengarkan</button>
        `;
    } else if (answers.length === 14) {
        document.getElementById('question').innerHTML = "Pertanyaan 15: Bagaimana Anda menangani perubahan yang tidak terduga?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban29')">Beradaptasi dengan Cepat</button>
            <button class="option" onclick="nextQuestion('jawaban30')">Mencari Stabilitas</button>
        `;
    } else if (answers.length === 15) {
        document.getElementById('question').innerHTML = "Pertanyaan 16: Apakah Anda lebih suka bepergian atau tinggal di rumah?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban31')">Bepergian</button>
            <button class="option" onclick="nextQuestion('jawaban32')">Tinggal di Rumah</button>
        `;
    } else if (answers.length === 16) {
        document.getElementById('question').innerHTML = "Pertanyaan 17: Bagaimana Anda memanage waktu Anda sehari-hari?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban33')">Terkendali</button>
            <button class="option" onclick="nextQuestion('jawaban34')">Spontan</button>
        `;
    } else if (answers.length === 17) {
        document.getElementById('question').innerHTML = "Pertanyaan 18: Apakah Anda cenderung menjadi optimis atau pesimis?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban35')">Optimis</button>
            <button class="option" onclick="nextQuestion('jawaban36')">Pesimis</button>
        `;
    } else if (answers.length === 18) {
        document.getElementById('question').innerHTML = "Pertanyaan 19: Bagaimana Anda mengekspresikan emosi Anda?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban37')">Terbuka</button>
            <button class="option" onclick="nextQuestion('jawaban38')">Menahan Diri</button>
        `;
    } else if (answers.length === 19) {
        document.getElementById('question').innerHTML = "Pertanyaan 20: Apakah Anda lebih suka beradaptasi dengan lingkungan baru atau mempertahankan kebiasaan lama?";
        document.getElementById('options').innerHTML = `
            <button class="option" onclick="nextQuestion('jawaban39')">Beradaptasi dengan Lingkungan Baru</button>
            <button class="option" onclick="nextQuestion('jawaban40')">Mempertahankan Kebiasaan Lama</button>
        `;
    } else {
        // Hitung skor berdasarkan jawaban
        var score = calculateScore(answers);

        // Tampilkan hasil keadaan mental berdasarkan skor
        displayResult(score);
    }
}

function restartTest() {
    // Mengatur ulang pertanyaan dan jawaban
    answers = [];
    document.getElementById('question').innerHTML = "Pertanyaan 1: Apakah Anda merasa lebih suka bekerja sendiri atau dalam tim?";
    document.getElementById('options').innerHTML = `
        <button class="option" onclick="nextQuestion('jawaban1')">Bekerja Sendiri</button>
        <button class="option" onclick="nextQuestion('jawaban2')">Dalam Tim</button>
    `;

    // Menghapus hasil tes yang sebelumnya ditampilkan
    var resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = "";
}

function calculateScore(answers) {
    // Hitung skor dari jawaban yang diberikan
    // Misalnya, Anda bisa memberikan skor berbeda untuk setiap jawaban
    // dan kemudian menjumlahkannya untuk mendapatkan skor akhir

    // Contoh sederhana: jumlah semua jawaban yang dipilih
    var score = 0;
    for (var i = 0; i < answers.length; i++) {
        if (answers[i] === 'jawaban1' || answers[i] === 'jawaban5' || answers[i] === 'jawaban9' || answers[i] === 'jawaban13' || answers[i] === 'jawaban17' || answers[i] === 'jawaban21' || answers[i] === 'jawaban25' || answers[i] === 'jawaban29' || answers[i] === 'jawaban33' || answers[i] === 'jawaban37') {
            score += 1;
        } else if (answers[i] === 'jawaban2' || answers[i] === 'jawaban3' || answers[i] === 'jawaban6' || answers[i] === 'jawaban7' || answers[i] === 'jawaban11' || answers[i] === 'jawaban15' || answers[i] === 'jawaban22' || answers[i] === 'jawaban23' || answers[i] === 'jawaban26' || answers[i] === 'jawaban27' || answers[i] === 'jawaban30' || answers[i] === 'jawaban31' || answers[i] === 'jawaban34' || answers[i] === 'jawaban35' || answers[i] === 'jawaban38' || answers[i] === 'jawaban39') {
            score += 2;
        } else {
            score += 3;
        }
    }

    return score;
}

function displayResult(score) {
    // Tampilkan pesan berdasarkan skor
    var resultMessage = "";
    if (score < 20) {
        resultMessage = "Anda mungkin memiliki tingkat stres yang rendah.";
    } else if (score >= 20 && score < 35) {
        resultMessage = "Anda mungkin memiliki tingkat stres yang sedang.";
    } else {
        resultMessage = "Anda mungkin memiliki tingkat stres yang tinggi.";
    }

    // Tampilkan hasil pada elemen HTML
    var resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = "<h2>Hasil Tes:</h2><p>" + resultMessage + "</p>";

    // Tambahkan tombol kembali
    var restartButton = document.createElement('button');
    restartButton.textContent = "Ulangi Tes";
    restartButton.onclick = restartTest;
    resultContainer.appendChild(restartButton);
}
