document
  .getElementById("whatsapp-share")
  .addEventListener("click", function () {
    const namaTamu = document.getElementById("namaTamu").value;
    const pendamping = document.getElementById("Pendamping").value;

    if (namaTamu === "") {
      alert("Harap isi nama tamu!");
      return;
    }

    let dampingan = "";
    if (pendamping === "Partner") {
      dampingan = " & Partner";
    } else if (pendamping === "Keluarga") {
      dampingan = " & Keluarga";
    } else {
      dampingan = "";
    }

    const namaUndang = namaTamu + dampingan;
    const linkUndangan = `https://weddingandomela.ct.ws/?to=${encodeURIComponent(
      namaUndang
    )}`;
    const pesan = `Kepada Yth.
Bapak/Ibu/Saudara/i
*${namaUndang}*

Assalamu’alaikum Warahmatullah Wabarakatuh

Bismillahirahmanirrahim. Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, untuk menghadiri acara pernikahan kami. Berikut link untuk info lengkap dari acara kami:

${linkUndangan}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i, berkenan untuk hadir dan memberikan doa restu.

Wassalamu’alaikum Warahmatullah Wabarakatuh
`;

    document.getElementById("invitation-form").reset();

    // Cari elemen dengan id 'bagikanContainer'
    const bagikanContainer = document.getElementById("bagikanContainer");

    // Buat elemen div baru
    const newElement = document.createElement("div");
    newElement.className =
      "mt-6 p-4 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg w-full";
    newElement.innerHTML = `<h3 class="text-xl font-medium">Bagikan</h3>
      <hr class="border-0 h-0.5 mt-1 bg-gray-400 dark:bg-gray-600" />

      <div class="w-full mt-4">
        <div class="relative">
          <label for="npm-install-copy-text" class="sr-only"
            >Label</label
          >
          <input
            id="npm-install-copy-text"
            type="text"
            class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value="${linkUndangan}"
            disabled
            readonly
          />
          <button
            data-copy-to-clipboard-target="npm-install-copy-text"
            class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border"
          >
            <span id="default-message" class="inline-flex items-center">
              <svg
                class="w-3 h-3 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path
                  d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
                />
              </svg>
              <span class="text-xs font-semibold">Copy</span>
            </span>
            <span
              id="success-message"
              class="hidden inline-flex items-center"
            >
              <svg
                class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span
                class="text-xs font-semibold text-blue-700 dark:text-blue-500"
                >Copied</span
              >
            </span>
          </button>
        </div>
      </div>

      <div class="sharing-buttons flex flex-wrap mt-4">
        <a
          class="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition py-3 px-5 rounded-lg text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700"
          target="_blank"
          rel="noopener"
          href="https://wa.me/?text=${encodeURIComponent(pesan)}"
          aria-label="Share on Whatsapp"
          draggable="false"
        >
          <svg
            aria-hidden="true"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-6 h-6"
          >
            <title>Whatsapp</title>
            <path
              d="M413 97A222 222 0 0 0 64 365L31 480l118-31a224 224 0 0 0 330-195c0-59-25-115-67-157zM256 439c-33 0-66-9-94-26l-7-4-70 18 19-68-4-7a185 185 0 0 1 287-229c34 36 56 82 55 131 1 102-84 185-186 185zm101-138c-5-3-33-17-38-18-5-2-9-3-12 2l-18 22c-3 4-6 4-12 2-32-17-54-30-75-66-6-10 5-10 16-31 2-4 1-7-1-10l-17-41c-4-10-9-9-12-9h-11c-4 0-9 1-15 7-5 5-19 19-19 46s20 54 23 57c2 4 39 60 94 84 36 15 49 17 67 14 11-2 33-14 37-27s5-24 4-26c-2-2-5-4-11-6z"
            ></path>
          </svg>
          <span class="ml-2">Whatsapp</span>
        </a>
        <a
          class="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition py-3 px-5 rounded-lg text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700"
          target="_blank"
          rel="noopener"
          href="https://telegram.me/share/url?text=${encodeURIComponent(
            pesan
          )}&url=%20"
          aria-label="Share on Telegram"
          draggable="false"
        >
          <svg
            aria-hidden="true"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-6 h-6"
          >
            <title>Telegram</title>
            <path
              d="M256 8a248 248 0 1 0 0 496 248 248 0 0 0 0-496zm115 169c-4 39-20 134-28 178-4 19-10 25-17 25-14 2-25-9-39-18l-56-37c-24-17-8-25 6-40 3-4 67-61 68-67l-1-4-5-1q-4 1-105 70-15 10-27 9c-9 0-26-5-38-9-16-5-28-7-27-16q1-7 18-14l145-62c69-29 83-34 92-34 2 0 7 1 10 3l4 7a43 43 0 0 1 0 10z"
            ></path>
          </svg>
          <span class="ml-2">Telegram</span>
        </a>
        <a
          class="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition py-3 px-5 rounded-lg text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700"
          target="_blank"
          rel="noopener"
          href="https://twitter.com/intent/tweet?url=text=${encodeURIComponent(
            pesan
          )}"
          aria-label="Share on Twitter"
        >
          <svg
            aria-hidden="true"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-6 h-6"
          >
            <title>Twitter</title>
            <path
              d="m459 152 1 13c0 139-106 299-299 299-59 0-115-17-161-47a217 217 0 0 0 156-44c-47-1-85-31-98-72l19 1c10 0 19-1 28-3-48-10-84-52-84-103v-2c14 8 30 13 47 14A105 105 0 0 1 36 67c51 64 129 106 216 110-2-8-2-16-2-24a105 105 0 0 1 181-72c24-4 47-13 67-25-8 24-25 45-46 58 21-3 41-8 60-17-14 21-32 40-53 55z"
            ></path>
          </svg>
          <span class="ml-2">Twitter</span>
        </a>
        <a
          class="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition py-3 px-5 rounded-lg text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700"
          target="_blank"
          rel="noopener"
          href="https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            linkUndangan
          )}"
          aria-label="Share on Facebook"
        >
          <svg
            aria-hidden="true"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-6 h-6"
          >
            <title>Facebook</title>
            <path
              d="M379 22v75h-44c-36 0-42 17-42 41v54h84l-12 85h-72v217h-88V277h-72v-85h72v-62c0-72 45-112 109-112 31 0 58 3 65 4z"
            ></path>
          </svg>
          <span class="ml-2">Facebook</span>
        </a>
      </div>
  `;
    bagikanContainer.appendChild(newElement);
  });


window.addEventListener("load", function () {
  const clipboard = FlowbiteInstances.getInstance(
    "CopyClipboard",
    "npm-install-copy-text"
  );

  const $defaultMessage = document.getElementById("default-message");
  const $successMessage = document.getElementById("success-message");

  clipboard.updateOnCopyCallback((clipboard) => {
    showSuccess();

    // reset to default state
    setTimeout(() => {
      resetToDefault();
    }, 2000);
  });

  const showSuccess = () => {
    $defaultMessage.classList.add("hidden");
    $successMessage.classList.remove("hidden");
  };

  const resetToDefault = () => {
    $defaultMessage.classList.remove("hidden");
    $successMessage.classList.add("hidden");
  };
});

// Countdown
const targetDate = new Date("2025-02-25T08:00:00").getTime();

// Fungsi untuk memperbarui countdown setiap detik
function updateCountdown() {
  const now = new Date().getTime();
  const additionalHours = 7;
  const addedTime = now + additionalHours * 60 * 60 * 1000;
  const distance = targetDate - addedTime;

  // Hitung waktu yang tersisa
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Tampilkan hasil di elemen dengan ID masing-masing
  document.getElementById("hari").textContent = days;
  document.getElementById("jam").textContent = hours;
  document.getElementById("menit").textContent = minutes;
  document.getElementById("detik").textContent = seconds;

  // Jika countdown selesai
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".flex").innerHTML = "Acara telah dimulai";
  }
}

// Perbarui countdown setiap detik
const countdownInterval = setInterval(updateCountdown, 1000);

// Panggil fungsi pertama kali agar tidak ada delay
updateCountdown();
