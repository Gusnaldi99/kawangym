// const productData = {
//   STRENGTH: [
//     {
//       image: "./assets/images/product/strength/hurricane/HURRICANE-HS01-SEATED-CHEST-PRESS.svg",
//       image: "./assets/images/product/strength/hurricane/HURRICANE-HS01-SEATED-CHEST-PRESS.svg",
//       name: "HURRICANE HS01 SEATED CHEST PRESS",
//       berat: "Berat : 68kg / 149lb",
//       dimensi: "Dimensi: 1360(L)*1260(W)*1650mm(H)",
//       brand: "HURRICANE"
//     },
//     {
//       image: "./assets/images/product/strength/hurricane/HURRICANE-HS02-SEATED-ROW.svg",
//       name: "HURRICANE HS02 SEATED ROW",
//       berat: "Berat : 86kg / 189lb",
//       dimensi: "Dimensi: 1450(L)*1010(W)*1650mm(H)",
//       brand: "HURRICANE"
//     },
//     {
//       image: "./assets/images/product/strength/hurricane/HURRICANE-HS03-SHOULDER-PRESS.svg", 
//       name: "HURRICANE HS03 SHOULDER PRESS",
//       berat: "Berat : 86kg / 189lb",
//       dimensi: "Dimensi: 1600(L)*1430(W)*1650mm(H)",
//       brand: "DHZ" 
//     },
//     {
//       image: "./assets/images/product/strength/hurricane/HURRICANE-HS06-SEATED-LEG-CURL.svg", 
//       name: "HURRICANE HS06 SEATED LEG CURL",
//       berat: "Berat : 104kg / 228lb",
//       dimensi: "Dimensi: 1315(L)*970(W)*1650mm(H)",
//       brand: "TRUE" 
//     }
//   ],
//   CARDIO: [
//     {
//       image: "./assets/images/product/cardio/hurricane/HURRICANEF6CLIMBINGELLIPTICALMACHINE_910(L)1320(W)1800(H)_108KG.svg",
//       name: "HURRICANE F6 CLIMBING ELLIPTICAL MACHINE",
//       berat: "Berat : 108kg / 238lb",
//       dimensi: "Dimensi: 910(L)*1320(W)*1800(H)",
//       brand: "HURRICANE"
//     },
//     {
//       image: "./assets/images/product/cardio/hurricane/HURRICANEF6ELLIPTICAL_2200(L)750(W1800(H_200KG.svg",
//       name: "HURRICANE F6 ELLIPTICAL",
//       berat: "Berat : 200kg / 440lb",
//       dimensi: "Dimensi: 2200(L)*750(W)*1800(H)",
//       brand: "HURRICANE"
//     },
//     {
//       image: "./assets/images/product/cardio/hurricane/HURRICANEF6RECUMBENTBIKE_1770(L)750(W1450(H)_72KG.svg",
//       name: "HURRICANE F6 RECUMBENT BIKE",
//       berat: "Berat : 72kg / 158lb",
//       dimensi: "Dimensi: 1770(L)*750(W)*1450(H)",
//       brand: "HURRICANE"
//     },
//     {
//       image: "./assets/images/product/cardio/hurricane/HURRICANEF6TREADMILL_220(L)850(W)1510(H)_170KG.svg",
//       name: "HURRICANE F6 TREADMILL",
//       berat: "Berat : 170kg / 374lb",
//       dimensi: "Dimensi: 220(L)*850(W)*1510(H)",
//       brand: "HURRICANE"
//     },
//     {
//       image: "./assets/images/product/cardio/hurricane/HURRICANEF6UPRIGHTBIKE_1200mm(L)580mm(W)1550mm(H)_72KG.svg.svg",
//       name: "HURRICANE F6 UPRIGHT BIKE",
//       berat: "Berat : 72kg / 158lb",
//       dimensi: "Dimensi: 1200mm(L)*580mm(W)*1550mm(H)",
//       brand: "HURRICANE"
//     },
//   ],
//   PACKAGES: [ 
//     {
//       image: "./assets/images/product/packages/example_package.svg", 
//       name: "PACKAGE DEAL ALPHA",
//       berat: "Berat : N/A",
//       dimensi: "Dimensi: N/A",
//       brand: "DHZ"
//     }
//   ],
//   "FREE WEIGHT": [ 
//     {
//       image: "./assets/images/product/freeweight/example_dumbbell.svg", 
//       name: "DUMBBELL SET PRO",
//       berat: "Berat : Various",
//       dimensi: "Dimensi: Various",
//       brand: "TRUE"
//     }
//   ],
//   "FLOORING & STORAGE": [ 
//     {
//       image: "./assets/images/product/flooring/example_mat.svg", 
//       name: "GYM FLOORING TILES",
//       berat: "Berat : N/A",
//       dimensi: "Dimensi: Per tile",
//       brand: "HURRICANE"
//     }
//   ],
// };

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const btnLeft = document.querySelector('.slider-btn-left');
  const btnRight = document.querySelector('.slider-btn-right');
  let currentSlide = 0;
  const slideCount = document.querySelectorAll('.slide').length;

  // Function to show specific slide
  function showSlide(slideIndex) {
    currentSlide = slideIndex;
    
    // Reset the animation
    slider.style.animation = 'none';
    
    // Apply transform directly
    slider.style.transform = `translateX(-${currentSlide * 50}%)`;
    
    // Restart animation after moving to manual position
    setTimeout(() => {
      slider.style.animation = '';
      // Set the animation to start from the current position
      if (currentSlide === 0) {
        slider.style.animationName = 'slide';
      } else {
        // Create a custom animation that starts from the second slide
        document.styleSheets[0].insertRule(
          `@keyframes slideFrom1 {
            0%, 45% {
              transform: translateX(-50%);
            }
            50%, 95% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }`,
          document.styleSheets[0].cssRules.length
        );
        slider.style.animationName = 'slideFrom1';
      }
    }, 50);
  }

  // Navigate to previous slide
  btnLeft.addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    showSlide(currentSlide);
  });

  // Navigate to next slide
  btnRight.addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % slideCount;
    showSlide(currentSlide);
  });
});


const availableBrands = ["ALL", "DHZ", "HURRICANE", "TRUE"]; 

document.addEventListener("DOMContentLoaded", function () {
  
  const toggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  
  function loadProducts(category, brand = "ALL") {
    const productGrid = document.querySelector(".product-grid");
    if (!productGrid) {
      console.error("Elemen .product-grid tidak ditemukan.");
      return;
    }

    productGrid.innerHTML = ""; 

    
    const productsInCategory = (typeof category === 'string' && productData[category.toUpperCase()]) ? productData[category.toUpperCase()] : [];
    let productsToDisplay = productsInCategory;

    if (brand !== "ALL") {
      productsToDisplay = productsInCategory.filter(product => product.brand && product.brand.toUpperCase() === brand.toUpperCase());
    }

    if (productsToDisplay.length === 0) {
      const categoryNameDisplay = (typeof category === 'string') ? category.toUpperCase() : 'yang dipilih';
      productGrid.innerHTML = `<p>Tidak ada produk untuk kategori '${categoryNameDisplay}'${brand !== "ALL" ? ` dan merek '${brand}'` : ''}.</p>`;
      return;
    }

    productsToDisplay.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <img src="${product.image || './assets/images/placeholder.png'}" alt="${product.name || 'Nama Produk'}" onerror="this.onerror=null;this.src='./assets/images/placeholder.png';">
        <div class="product-info">
          <h3>${product.name || 'Nama Produk'}</h3>
        </div>
      `;
      productCard.addEventListener("click", () => showModal(product));
      productGrid.appendChild(productCard);
    });
  }

  
  function showModal(product) {
    const modal = document.getElementById("modalOverlay");
    const modalImage = document.getElementById("modalImage");
    const modalName = document.getElementById("modalName");
    const modalDimensi = document.getElementById("modalDimensi");
    const modalBerat = document.getElementById("modalBerat");

    if (!modal || !modalImage || !modalName || !modalDimensi || !modalBerat) {
        console.error("Satu atau lebih elemen modal tidak ditemukan.");
        return;
    }

    modalImage.src = product.image || "./assets/images/placeholder.png";
    modalImage.alt = product.name || 'Gambar Produk';
    modalName.textContent = product.name || 'Nama Produk';
    modalDimensi.textContent = product.dimensi || "Dimensi tidak tersedia";
    modalBerat.textContent = product.berat || "Berat tidak tersedia";

    modal.style.display = "flex";
    requestAnimationFrame(() => {
      modal.classList.add("show");
    });
  }

  
  function hideModal() {
    const modal = document.getElementById("modalOverlay");
    if (modal) {
        modal.classList.remove("show");
        setTimeout(() => {
          modal.style.display = "none";
        }, 300); 
    }
  }

  
  const modalCloseButton = document.getElementById("modalClose");
  const modalOverlay = document.getElementById("modalOverlay");
  if (modalCloseButton) modalCloseButton.addEventListener("click", hideModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target.id === "modalOverlay") {
        hideModal();
      }
    });
  }

  
  if (window.location.pathname.includes("specific-category.html")) {
    const pageMainTitle = document.getElementById("page-main-title");
    const categoryFiltersContainer = document.querySelector(".category-filters"); 
    const brandFilterContainer = document.querySelector(".brand-filter-container");
    const brandDropdown = document.getElementById("brand-dropdown");

    if (!pageMainTitle || !categoryFiltersContainer || !brandDropdown || !brandFilterContainer) {
        console.error("Satu atau lebih elemen UI untuk halaman kategori spesifik tidak ditemukan.");
    } else {
        let currentSelectedCategory = localStorage.getItem("selectedCategory")?.toUpperCase() || Object.keys(productData)[0]?.toUpperCase() || "STRENGTH";

        function initializeSpecificCategoryPage() {
          
          categoryFiltersContainer.innerHTML = ''; 
          const categorySelect = document.createElement("select");
          categorySelect.id = "category-dropdown"; 

          
          const categoryLabel = document.createElement("label");
          categoryLabel.htmlFor = "category-dropdown";
          categoryLabel.textContent = "Pilih Kategori:";
          categoryFiltersContainer.appendChild(categoryLabel); 

          Object.keys(productData).forEach(catName => {
            
            if (productData[catName] && productData[catName].length > 0) {
                const option = document.createElement("option");
                option.value = catName.toUpperCase();
                option.textContent = catName; 
                if (catName.toUpperCase() === currentSelectedCategory) {
                  option.selected = true;
                }
                categorySelect.appendChild(option);
            }
          });
          categoryFiltersContainer.appendChild(categorySelect); 

          categorySelect.addEventListener("change", function() {
            currentSelectedCategory = this.value;
            localStorage.setItem("selectedCategory", currentSelectedCategory);
            updatePageForCategory(currentSelectedCategory);
          });

          
          brandDropdown.innerHTML = ''; 
          availableBrands.forEach(brandName => {
            const option = document.createElement("option");
            option.value = brandName.toUpperCase();
            option.textContent = brandName === "ALL" ? "Semua Merek" : brandName;
            brandDropdown.appendChild(option);
          });

          brandDropdown.addEventListener("change", function() {
            loadProducts(currentSelectedCategory, this.value);
          });

          
          updatePageForCategory(currentSelectedCategory);
        }

        function updatePageForCategory(categoryName) {
          const displayCategoryName = categoryName || "Semua"; 
          pageMainTitle.textContent = `${displayCategoryName.toUpperCase()} EQUIPMENT`;
          brandFilterContainer.style.display = "flex"; 
          brandDropdown.value = "ALL"; 
          loadProducts(categoryName, "ALL"); 
        }

        initializeSpecificCategoryPage();
    }
  }

  
  const categoryItems = document.querySelectorAll(".category-item");
  categoryItems.forEach((item) => {
    item.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      if (category) {
        localStorage.setItem("selectedCategory", category.toUpperCase());
        window.location.href = "specific-category.html";
      } else {
        console.warn("Category item tidak memiliki atribut data-category:", item);
      }
    });
  });

  
  
  const downloadButton = document.querySelector('.download-button');
  if (downloadButton) {
    const imgToBlur = document.querySelector('.img-blur');
    if (imgToBlur) {
        imgToBlur.style.transition = 'filter 0.3s ease';
        downloadButton.addEventListener('mouseenter', () => { imgToBlur.style.filter = 'blur(5px)'; });
        downloadButton.addEventListener('mouseleave', () => { imgToBlur.style.filter = 'blur(0)'; });
    }
  }
});