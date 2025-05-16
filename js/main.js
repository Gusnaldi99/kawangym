
const productData = {
  STRENGTH: [
    {
      image: "./assets/images/product/strength/hurricane/HURRICANE-HS01-SEATED-CHEST-PRESS.svg",
      name: "HURRICANE HS01 SEATED CHEST PRESS",
      berat: "Berat : 68kg / 149lb",
      dimensi: "Dimensi: 1360(L)*1260(W)*1650mm(H)",
      brand: "HURRICANE"
    },
    {
      image: "./assets/images/product/strength/hurricane/HURRICANE-HS02-SEATED-ROW.svg",
      name: "HURRICANE HS02 SEATED ROW",
      berat: "Berat : 86kg / 189lb",
      dimensi: "Dimensi: 1450(L)*1010(W)*1650mm(H)",
      brand: "HURRICANE"
    },
    {
      image: "./assets/images/product/strength/hurricane/HURRICANE-HS03-SHOULDER-PRESS.svg", 
      name: "HURRICANE HS03 SHOULDER PRESS",
      berat: "Berat : 86kg / 189lb",
      dimensi: "Dimensi: 1600(L)*1430(W)*1650mm(H)",
      brand: "DHZ" 
    },
    {
      image: "./assets/images/product/strength/hurricane/HURRICANE-HS06-SEATED-LEG-CURL.svg", 
      name: "HURRICANE HS06 SEATED LEG CURL",
      berat: "Berat : 104kg / 228lb",
      dimensi: "Dimensi: 1315(L)*970(W)*1650mm(H)",
      brand: "TRUE" 
    }
  ],
  CARDIO: [
    {
      image: "./assets/images/product/cardio/hurricane/HURRICANE-F6-ARTIS-RECUMBENT-BIKE.svg",
      name: "HURRICANE F6 ARTIS RECUMBENT BIKE",
      berat: "Berat : 72kg / 159lb",
      dimensi: "Dimensi: 1770(L)*750(W)*1450(H)",
      brand: "HURRICANE"
    },
    {
      image: "./assets/images/product/cardio/hurricane/HURRICANE-F6-ARTIS-SPIN-BIKE.svg",
      name: "HURRICANE F6 ARTIS SPIN BIKE",
      berat: "Berat : 68kg / 149lb",
      dimensi: "Dimensi: 1200(L)*580(W)*1550(H)",
      brand: "TRUE"
    },
    {
      image: "./assets/images/product/cardio/hurricane/HURRICANE-F6-ARTIS-STAIR-CLIMBER.svg",
      name: "HURRICANE F6 ARTIS STAIR CLIMBER",
      berat: "Berat : 108kg / 238lb",
      dimensi: "Dimensi: 910(L)*1320(W)*1800(H)",
      brand: "HURRICANE"
    },
    {
      image: "./assets/images/product/cardio/hurricane/HURRICANE-F6-ARTIS-TREADMILL.svg",
      name: "HURRICANE F6 ARTIS TREADMILL",
      berat: "Berat : 108kg / 238lb",
      dimensi: "Dimensi: 2200(L)*850(W)*1510(H)",
      brand: "HURRICANE"
    }
  ],
  PACKAGES: [ 
    {
      image: "./assets/images/product/packages/example_package.svg", 
      name: "PACKAGE DEAL ALPHA",
      berat: "Berat : N/A",
      dimensi: "Dimensi: N/A",
      brand: "DHZ"
    }
  ],
  "FREE WEIGHT": [ 
    {
      image: "./assets/images/product/freeweight/example_dumbbell.svg", 
      name: "DUMBBELL SET PRO",
      berat: "Berat : Various",
      dimensi: "Dimensi: Various",
      brand: "TRUE"
    }
  ],
  "FLOORING & STORAGE": [ 
    {
      image: "./assets/images/product/flooring/example_mat.svg", 
      name: "GYM FLOORING TILES",
      berat: "Berat : N/A",
      dimensi: "Dimensi: Per tile",
      brand: "HURRICANE"
    }
  ],
};


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
    const modalPrice = document.getElementById("modalPrice");
    const modalDimensi = document.getElementById("modalDimensi");
    const modalBerat = document.getElementById("modalBerat");

    if (!modal || !modalImage || !modalName || !modalPrice || !modalDimensi || !modalBerat) {
        console.error("Satu atau lebih elemen modal tidak ditemukan.");
        return;
    }

    modalImage.src = product.image || "./assets/images/placeholder.png";
    modalImage.alt = product.name || 'Gambar Produk';
    modalName.textContent = product.name || 'Nama Produk';
    modalPrice.textContent = product.price || "Harga tidak tersedia";
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