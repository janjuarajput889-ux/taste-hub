const ADMIN_PASSWORD = "1234";
const MENU_STORAGE_KEY = "tasteHubMenuData";
const MENU_CATALOG_VERSION = 3;
const MENU_IMAGE_PLACEHOLDER = "assets/images/menu-placeholder.svg";
const whatsappNumber = "923075159202";
const defaultCategories = [
    "Pizzas", "Burgers", "Fries & Sides", "Wings & Nuggets", "Drinks",
    "Sting", "Deals", "Family Deals", "Special Deals"
];
const legacyCategoryNames = {
    "Pizza": "Pizzas",
    "Fries": "Fries & Sides",
    "Chicken": "Wings & Nuggets",
    "Deals / Combos": "Family Deals",
    "Shawarma": "Special Deals",
    "Sandwiches": "Fries & Sides",
    "Pasta": "Special Deals",
    "BBQ": "Wings & Nuggets",
    "Chinese": "Special Deals",
    "Fresh Juices": "Drinks",
    "Shakes": "Drinks",
    "Desserts": "Special Deals"
};

const defaultItems = [
    { id: "special-pizza", name: "Special Pizza", price: 899, category: "Pizzas", description: "Loaded with cheese, fresh vegetables and delicious toppings.", image: "assets/images/menu/pizza/special-pizza.jpg", available: true },
    { id: "pepperoni-pizza", name: "Pepperoni Pizza", price: 1099, category: "Pizzas", description: "A golden crust topped with mozzarella and savory pepperoni.", image: "assets/images/menu/pizza/pepperoni-pizza.jpg", available: true },
    { id: "classic-burger", name: "Classic Burger", price: 499, category: "Burgers", description: "Juicy burger with fresh lettuce, cheese and special sauce.", image: "assets/images/menu/burgers/classic-burger.jpg", available: true },
    { id: "zinger-burger", name: "Zinger Burger", price: 549, category: "Burgers", description: "Crispy chicken fillet with fresh vegetables and creamy sauce.", image: "assets/images/menu/burgers/zinger-burger.jpg", available: true },
    { id: "chicken-shawarma", name: "Chicken Shawarma", price: 399, category: "Special Deals", description: "Tender spiced chicken, crunchy salad and garlic sauce in a warm wrap.", image: "assets/images/menu/shawarma/chicken-shawarma.jpg", available: true },
    { id: "loaded-fries", name: "Loaded Fries", price: 399, category: "Fries & Sides", description: "Crispy golden fries topped with cheese and special sauces.", image: "assets/images/menu/fries/loaded-fries.jpg", available: true },
    { id: "crispy-chicken", name: "Crispy Chicken", price: 699, category: "Wings & Nuggets", description: "Crunchy, seasoned chicken served hot and fresh.", image: "assets/images/menu/chicken/crispy-chicken.jpg", available: true },
    { id: "club-sandwich", name: "Club Sandwich", price: 449, category: "Fries & Sides", description: "Toasted layers with chicken, egg, crisp lettuce and house sauce.", image: "assets/images/menu/sandwiches/club-sandwich.jpg", available: true },
    { id: "alfredo-pasta", name: "Creamy Alfredo Pasta", price: 699, category: "Special Deals", description: "Comforting pasta tossed in a rich, creamy sauce.", image: "assets/images/menu/pasta/creamy-alfredo-pasta.jpg", available: true },
    { id: "bbq-platter", name: "BBQ Platter", price: 1299, category: "Wings & Nuggets", description: "Smoky grilled favorites served with fresh sides.", image: "assets/images/menu/bbq/bbq-platter.jpg", available: true },
    { id: "chicken-chow-mein", name: "Chicken Chow Mein", price: 649, category: "Special Deals", description: "Wok-tossed noodles with chicken and crisp vegetables.", image: "assets/images/menu/chinese/chicken-chow-mein.jpg", available: true },
    { id: "coca-cola", name: "Coca Cola", price: 100, category: "Drinks", description: "A chilled classic, served cold.", image: "assets/images/menu/drinks/coca-cola.jpg", available: true },
    { id: "pepsi", name: "Pepsi", price: 100, category: "Drinks", description: "Refreshingly cold and ready to enjoy.", image: "assets/images/menu/drinks/pepsi.jpg", available: true },
    { id: "7up", name: "7UP", price: 100, category: "Drinks", description: "A crisp, lemon-lime refreshment.", image: "assets/images/menu/drinks/7up.jpg", available: true },
    { id: "sprite", name: "Sprite", price: 100, category: "Drinks", description: "Bright lemon-lime refreshment, served chilled.", image: "assets/images/menu/drinks/sprite.jpg", available: true },
    { id: "marinda", name: "Marinda", price: 100, category: "Drinks", description: "A fruity, fizzy favorite served cold.", image: "assets/images/menu/drinks/marinda.jpg", available: true },
    { id: "mineral-water", name: "Mineral Water", price: 80, category: "Drinks", description: "Pure, refreshing mineral water.", image: "assets/images/menu/drinks/mineral-water.jpg", available: true },
    { id: "fresh-lime", name: "Fresh Lime", price: 160, category: "Drinks", description: "Fresh lime with a cool, tangy finish.", image: "assets/images/menu/drinks/fresh-lime.jpg", available: true },
    { id: "orange-juice", name: "Fresh Orange Juice", price: 250, category: "Drinks", description: "Bright, freshly squeezed orange juice.", image: "assets/images/menu/fresh-juices/fresh-orange-juice.jpg", available: true },
    { id: "chocolate-milkshake", name: "Chocolate Milkshake", price: 350, category: "Drinks", description: "A thick, creamy chocolate milkshake.", image: "assets/images/menu/shakes/chocolate-milkshake.jpg", available: true },
    { id: "chocolate-brownie", name: "Chocolate Brownie", price: 299, category: "Special Deals", description: "Rich chocolate brownie with a soft, fudgy center.", image: "assets/images/menu/desserts/chocolate-brownie.jpg", available: true },
    { id: "family-feast", name: "Family Feast", price: 1999, category: "Family Deals", description: "A crowd-pleasing mix of Taste Hub favorites.", image: "assets/images/menu/deals-combos/family-feast.jpg", available: true },
    { id: "sting-regular", name: "Sting Regular", price: 80, category: "Sting", description: "Chilled Sting energy drink.", image: "assets/images/sting-bottle.svg", available: true },
    { id: "sting-500ml", name: "Sting 500ml", price: 120, category: "Sting", description: "Chilled 500ml Sting energy drink.", image: "assets/images/sting-bottle.svg", available: true },
    { id: "sting-1-liter", name: "Sting 1 Liter", price: 180, category: "Sting", description: "Chilled 1 liter Sting energy drink.", image: "assets/images/sting-bottle.svg", available: true },
    { id: "sting-family-bottle", name: "Sting 1.5 Liter", price: 220, category: "Sting", description: "Chilled 1.5 liter Sting energy drink.", image: "assets/images/sting-bottle.svg", available: true },
    { id: "regular-drink", name: "Regular Drink", price: 100, category: "Drinks", description: "A chilled regular soft drink.", image: "assets/images/menu/drinks/coca-cola.jpg", available: true },
    { id: "drink-500ml", name: "500ml Bottle", price: 120, category: "Drinks", description: "A chilled 500ml soft drink.", image: "assets/images/menu/drinks/coca-cola.jpg", available: true },
    { id: "drink-1-liter", name: "1 Liter Bottle", price: 180, category: "Drinks", description: "A chilled 1 liter soft drink.", image: "assets/images/menu/drinks/coca-cola.jpg", available: true },
    { id: "drink-1-5-liter", name: "1.5 Liter Bottle", price: 220, category: "Drinks", description: "A chilled 1.5 liter soft drink.", image: "assets/images/menu/drinks/coca-cola.jpg", available: true },
    { id: "deal-1", name: "Deal 1", price: 999, category: "Deals", description: "Ask us about the items included in this deal.", image: "assets/images/menu-placeholder.svg", available: true },
    { id: "deal-2", name: "Deal 2", price: 1499, category: "Deals", description: "Ask us about the items included in this deal.", image: "assets/images/menu-placeholder.svg", available: true },
    { id: "deal-3", name: "Deal 3", price: 1999, category: "Deals", description: "Ask us about the items included in this deal.", image: "assets/images/menu-placeholder.svg", available: true },
    { id: "family-deal-1", name: "Family Deal 1", price: 2999, category: "Family Deals", description: "Ask us about the items included in this family deal.", image: "assets/images/menu/deals-combos/family-feast.jpg", available: true },
    { id: "family-deal-2", name: "Family Deal 2", price: 3999, category: "Family Deals", description: "Ask us about the items included in this family deal.", image: "assets/images/menu/deals-combos/family-feast.jpg", available: true },
    { id: "special-deal-1", name: "Special Deal 1", price: 1299, category: "Special Deals", description: "Ask us about the items included in this special deal.", image: "assets/images/menu-placeholder.svg", available: true },
    { id: "special-deal-2", name: "Special Deal 2", price: 1799, category: "Special Deals", description: "Ask us about the items included in this special deal.", image: "assets/images/menu-placeholder.svg", available: true }
];

const legacyPhotoIds = {
    "special-pizza": "photo-1565299624946-b28f40a0ae38",
    "pepperoni-pizza": "photo-1574071318508-1cdbab80d002",
    "classic-burger": "photo-1568901346375-23c9450c58cd",
    "zinger-burger": "photo-1606755962773-d324e0a13086",
    "chicken-shawarma": "photo-1626700051175-6818013e1d4f",
    "loaded-fries": "photo-1573080496219-bb080dd4f877",
    "crispy-chicken": "photo-1626082927389-6cd097cdc6ec",
    "club-sandwich": "photo-1626700051175-6818013e1d4f",
    "alfredo-pasta": "photo-1473093295043-cdd812d0e601",
    "bbq-platter": "photo-1544025162-d76694265947",
    "chicken-chow-mein": "photo-1585032226651-759b368d7246",
    "coca-cola": "photo-1554866585-cd94860890b7",
    "pepsi": "photo-1629203851122-3726ecdf080e",
    "7up": "photo-1625772299848-391b6a87d7b3",
    "sprite": "photo-1625772299848-391b6a87d7b3",
    "marinda": "photo-1544145945-f90425340c7e",
    "mineral-water": "photo-1560023907-5f339617ea30",
    "fresh-lime": "photo-1544145945-f90425340c7e",
    "orange-juice": "photo-1600271886742-f049cd451bba",
    "chocolate-milkshake": "photo-1572490122747-3968b75cc699",
    "chocolate-brownie": "photo-1606313564200-e75d5e30476c",
    "family-feast": "photo-1513104890138-7c749659a591"
};

let cart = [];
let activeCategory = "All";
let menuData = loadMenuData();
let menuCategories = menuData.categories;
let menuItems = menuData.items;
let isAdminAuthenticated = false;
let imagePreviewObjectUrl = "";

function createId() {
    return window.crypto && crypto.randomUUID
        ? crypto.randomUUID()
        : `item-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}


function loadMenuData() {
    try {
        const stored = JSON.parse(localStorage.getItem(MENU_STORAGE_KEY));

        if (stored && Array.isArray(stored.categories) && Array.isArray(stored.items)) {
            const categories = [...defaultCategories, ...new Set(stored.categories
                .filter(category => typeof category === "string")
                .map(category => category.trim())
                .map(category => legacyCategoryNames[category] || category)
                .filter(category => category && !defaultCategories.includes(category)))];
            let migratedImagePaths = false;
            const items = stored.items
                .filter(item => item && typeof item === "object" && item.name && item.category)
                .map(item => {
                    const defaultItem = defaultItems.find(defaultMenuItem => defaultMenuItem.id === item.id);
                    const legacyPhoto = legacyPhotoIds[item.id];
                    const legacyImage = legacyPhoto
                        ? `https://images.unsplash.com/${legacyPhoto}?auto=format&fit=crop&w=640&q=75`
                        : "";
                    const savedImage = String(item.image || "");
                    const currentImage = savedImage.startsWith("images/")
                        ? `assets/${savedImage}`
                        : savedImage;
                    if (currentImage !== savedImage) migratedImagePaths = true;
                    const image = item.image === legacyImage && defaultItem
                        ? defaultItem.image
                        : currentImage;

                    const migrateSeededPlaceholder = Number(stored.version || 0) < MENU_CATALOG_VERSION
                        && defaultItem
                        && Number(item.price) === 0
                        && item.available === false;

                    return {
                    id: String(item.id || createId()),
                    name: migrateSeededPlaceholder ? defaultItem.name : String(item.name).trim(),
                    price: Math.max(0, migrateSeededPlaceholder ? defaultItem.price : (Number(item.price) || 0)),
                    category: migrateSeededPlaceholder ? defaultItem.category : (legacyCategoryNames[String(item.category)] || String(item.category)),
                    description: migrateSeededPlaceholder ? defaultItem.description : String(item.description || ""),
                    image: migrateSeededPlaceholder ? defaultItem.image : image,
                    sizes: Array.isArray(item.sizes) ? item.sizes
                        .filter(size => size && size.label && Number(size.price) > 0)
                        .map(size => ({ label: String(size.label).trim(), price: Number(size.price) })) : [],
                    available: migrateSeededPlaceholder ? defaultItem.available : item.available !== false
                    };
                });

            if (Number(stored.version || 0) < MENU_CATALOG_VERSION) {
                const existingIds = new Set(items.map(item => item.id));
                defaultItems.forEach(item => {
                    if (!existingIds.has(item.id)) items.push({ ...item });
                });
            }

            items.forEach(item => {
                if (!categories.includes(item.category)) categories.push(item.category);
            });

            const upgradedData = { version: MENU_CATALOG_VERSION, categories, items };
            if (Number(stored.version || 0) < MENU_CATALOG_VERSION || migratedImagePaths) {
                try {
                    localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(upgradedData));
                } catch (error) {
                    console.warn("Taste Hub could not save the menu upgrade.", error);
                }
            }
            return upgradedData;
        }
    } catch (error) {
        console.warn("Taste Hub menu data could not be loaded. Defaults are being used.", error);
    }

    return {
        categories: [...defaultCategories],
        items: defaultItems.map(item => ({ ...item }))
    };
}


function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
    })[character]);
}


function safeImageSource(source) {
    const value = String(source || "").trim();
    const isRemoteImage = /^https:\/\//i.test(value);
    const isDataImage = /^data:image\/(png|jpeg|webp|gif);base64,/i.test(value);
    return isRemoteImage || isDataImage || isLocalImagePath(value)
        ? value
        : "";
}


function isLocalImagePath(source) {
    return /^assets\/images\/(?:[a-z0-9_-]+\/)*[a-z0-9_-]+\.(?:avif|gif|jpe?g|png|svg|webp)$/i.test(source);
}


function updateImagePreview(source = "", label = "") {
    const image = document.getElementById("itemImagePreviewImage");
    const status = document.getElementById("itemImagePreviewStatus");
    const isBlob = source.startsWith("blob:");
    const previewSource = isBlob ? source : safeImageSource(source);

    image.dataset.fallback = "false";
    image.onerror = () => {
        image.dataset.fallback = "true";
        image.onerror = null;
        image.src = MENU_IMAGE_PLACEHOLDER;
        status.textContent = source ? "Image not found. Showing the placeholder." : "Using the Taste Hub placeholder.";
    };
    image.onload = () => {
        if (image.dataset.fallback !== "true") {
            status.textContent = label || (previewSource ? (source.startsWith("data:image/") ? "Uploaded image" : source) : "Using the Taste Hub placeholder.");
        }
    };

    if (source && !previewSource) {
        image.src = MENU_IMAGE_PLACEHOLDER;
        status.textContent = "Use a local images path or an HTTPS image URL.";
        return;
    }

    image.src = previewSource || MENU_IMAGE_PLACEHOLDER;
}


function formatPrice(price) {
    return Number(price).toLocaleString("en-PK");
}


function persistMenu(message = "Menu changes saved in this browser.") {
    menuData = { version: MENU_CATALOG_VERSION, categories: menuCategories, items: menuItems };

    try {
        localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(menuData));
        const status = document.getElementById("saveStatus");
        if (status) status.textContent = message;
        return true;
    } catch (error) {
        const status = document.getElementById("saveStatus");
        if (status) status.textContent = "Could not save. This browser may be out of storage.";
        console.error("Taste Hub could not save menu data.", error);
        return false;
    }
}


function categoryIcon(category) {
    const icons = {
        "Pizzas": "🍕", "Fries & Sides": "🍟", "Wings & Nuggets": "🍗",
        "Sting": "⚡", "Deals": "🍱", "Family Deals": "👨‍👩‍👧‍👦",
        "Special Deals": "⭐",
        "Pizza": "🍕", "Burgers": "🍔", "Shawarma": "🌯", "Fries": "🍟",
        "Chicken": "🍗", "Sandwiches": "🥪", "Pasta": "🍝", "BBQ": "🔥",
        "Chinese": "🥡", "Drinks": "🥤", "Fresh Juices": "🍊", "Shakes": "🥛",
        "Desserts": "🍰", "Deals / Combos": "🍱"
    };
    return icons[category] || "🍽️";
}


function parseSizeOptions(value) {
    return value.split("\n").map(line => {
        const [label, price] = line.split("=");
        return {
            label: (label || "").trim(),
            price: Number((price || "").replace(/[^0-9.]/g, ""))
        };
    }).filter(size => size.label && Number.isFinite(size.price) && size.price > 0);
}


function renderCategories() {
    const categoryGrid = document.getElementById("categoryGrid");
    categoryGrid.innerHTML = menuCategories.map(category => {
        const safeCategory = escapeHTML(category);
        const count = menuItems.filter(item => item.category === category).length;
        return `
            <button class="category-card" type="button" data-category="${safeCategory}">
                <span class="category-icon">${categoryIcon(category)}</span>
                <h3>${safeCategory}</h3>
                <p>${count} ${count === 1 ? "favorite" : "favorites"}</p>
            </button>
        `;
    }).join("");

    categoryGrid.querySelectorAll("[data-category]").forEach(button => {
        button.addEventListener("click", () => {
            setActiveCategory(button.dataset.category);
            document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
        });
    });
}


function renderFilters() {
    const filters = document.getElementById("menuFilters");
    const categories = ["All", ...menuCategories];
    if (!categories.includes(activeCategory)) activeCategory = "All";

    filters.innerHTML = categories.map(category => `
        <button class="menu-filter${category === activeCategory ? " active" : ""}"
                type="button"
                data-category="${escapeHTML(category)}"
                aria-pressed="${category === activeCategory}">
            ${escapeHTML(category)}
        </button>
    `).join("");

    filters.querySelectorAll("[data-category]").forEach(button => {
        button.addEventListener("click", () => setActiveCategory(button.dataset.category));
    });
}


function setActiveCategory(category) {
    activeCategory = category;
    renderFilters();
    renderMenu();
}


function renderMenu() {
    const search = document.getElementById("menuSearch").value.trim().toLocaleLowerCase();
    const allItemsAvailable = menuItems.length > 0 && menuItems.every(item => item.available);
    document.getElementById("allItemsAvailability").textContent = allItemsAvailable
        ? "All Items Available"
        : "Some Items Unavailable";
    const filteredItems = menuItems.filter(item => {
        const matchesCategory = activeCategory === "All" || item.category === activeCategory;
        const searchable = `${item.name} ${item.description} ${item.category}`.toLocaleLowerCase();
        return matchesCategory && searchable.includes(search);
    });
    const menuGrid = document.getElementById("menuGrid");
    document.getElementById("stingShowcase").hidden = activeCategory !== "Sting";

    if (!filteredItems.length) {
        menuGrid.innerHTML = `<div class="menu-empty"><span>🍽️</span><h3>No matching items</h3><p>Try another search or category.</p></div>`;
    } else {
        menuGrid.innerHTML = filteredItems.map(item => {
            const image = safeImageSource(item.image);
            const imageSource = image || MENU_IMAGE_PLACEHOLDER;
            const imageContent = `<img src="${escapeHTML(imageSource)}" alt="${escapeHTML(item.name)}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${MENU_IMAGE_PLACEHOLDER}'">`;
            const sizes = Array.isArray(item.sizes) ? item.sizes.filter(size => size.label && Number(size.price) > 0) : [];
            const displayPrice = sizes.length ? Number(sizes[0].price) : Number(item.price);
            const canOrder = item.available && displayPrice > 0;
            const sizeOptions = sizes.length ? `
                <label class="product-size-control">
                    <span>Size</span>
                    <select data-size-select="${escapeHTML(item.id)}" aria-label="Choose size for ${escapeHTML(item.name)}">
                        ${sizes.map((size, index) => `<option value="${index}">${escapeHTML(size.label)} · Rs. ${formatPrice(size.price)}</option>`).join("")}
                    </select>
                </label>
            ` : "";
            return `
                <article class="food-card${item.available ? "" : " is-unavailable"}${item.category === "Sting" ? " is-sting" : ""}">
                    <div class="food-image">
                        ${imageContent}
                        <span class="food-tag">${escapeHTML(item.category)}</span>
                        <span class="availability-tag${item.available ? " is-available" : ""}">${item.available ? "Available" : "Unavailable"}</span>
                    </div>
                    <div class="food-content">
                        <h3>${escapeHTML(item.name)}</h3>
                        <p>${escapeHTML(item.description)}</p>
                        <button class="product-details-button" type="button" data-view-details="${escapeHTML(item.id)}">
                            View details <span aria-hidden="true">→</span>
                        </button>
                        <div class="food-bottom">
                            <strong data-item-price="${escapeHTML(item.id)}">${displayPrice > 0 ? `${sizes.length ? "From " : ""}Rs. ${formatPrice(displayPrice)}` : "Price to confirm"}</strong>
                        </div>
                        <div class="product-order-controls">
                            ${sizeOptions}
                            <label class="product-quantity-control">
                                <span>Qty</span>
                                <input type="number" min="1" max="99" value="1" data-item-quantity="${escapeHTML(item.id)}" aria-label="Quantity for ${escapeHTML(item.name)}">
                            </label>
                            <button type="button" data-add-item="${escapeHTML(item.id)}" ${canOrder ? "" : "disabled"}>
                                ${canOrder ? "Add to Cart" : (item.available ? "Set price" : "Unavailable")}
                            </button>
                        </div>
                    </div>
                </article>
            `;
        }).join("");

        menuGrid.querySelectorAll("[data-add-item]").forEach(button => {
            button.addEventListener("click", () => {
                const item = menuItems.find(menuItem => menuItem.id === button.dataset.addItem);
                if (!item || !item.available) return;
                const sizeSelect = menuGrid.querySelector(`[data-size-select="${CSS.escape(item.id)}"]`);
                const selectedSize = sizeSelect ? item.sizes[Number(sizeSelect.value)] : null;
                const quantityInput = menuGrid.querySelector(`[data-item-quantity="${CSS.escape(item.id)}"]`);
                const price = selectedSize ? Number(selectedSize.price) : Number(item.price);
                const quantity = Math.max(1, Math.min(99, Number(quantityInput.value) || 1));
                if (price > 0) addToCart(item.name, price, item.id, selectedSize ? selectedSize.label : "", quantity);
            });
        });

        menuGrid.querySelectorAll("[data-size-select]").forEach(select => {
            select.addEventListener("change", () => {
                const item = menuItems.find(menuItem => menuItem.id === select.dataset.sizeSelect);
                const size = item && item.sizes[Number(select.value)];
                const price = menuGrid.querySelector(`[data-item-price="${CSS.escape(select.dataset.sizeSelect)}"]`);
                if (size && price) price.textContent = `Rs. ${formatPrice(size.price)}`;
            });
        });

        menuGrid.querySelectorAll("[data-view-details]").forEach(button => {
            button.addEventListener("click", () => openItemDetails(button.dataset.viewDetails));
        });

    }

    document.getElementById("menuResultCount").textContent =
        `${filteredItems.length} ${filteredItems.length === 1 ? "item" : "items"}`;
}

function openItemDetails(itemId) {
    const item = menuItems.find(menuItem => menuItem.id === itemId);
    if (!item) return;

    const dialog = document.getElementById("itemDetailsDialog");
    const content = document.getElementById("itemDetailsContent");
    const image = safeImageSource(item.image) || MENU_IMAGE_PLACEHOLDER;
    const sizes = Array.isArray(item.sizes)
        ? item.sizes.filter(size => size.label && Number(size.price) > 0)
        : [];
    const price = sizes.length ? Number(sizes[0].price) : Number(item.price);
    const canOrder = item.available && price > 0;

    content.innerHTML = `
        <button class="item-details-close" type="button" aria-label="Close item details">✕</button>
        <div class="item-details-layout">
            <div class="item-details-image">
                <img src="${escapeHTML(image)}" alt="${escapeHTML(item.name)}" onerror="this.onerror=null;this.src='${MENU_IMAGE_PLACEHOLDER}'">
            </div>
            <div class="item-details-copy">
                <div class="item-details-tags">
                    <span>${escapeHTML(item.category)}</span>
                    <span class="${item.available ? "is-available" : "is-unavailable"}">${item.available ? "Available" : "Unavailable"}</span>
                </div>
                <h2 id="itemDetailsTitle">${escapeHTML(item.name)}</h2>
                <p class="item-details-description">${escapeHTML(item.description)}</p>
                <strong class="item-details-price" data-details-price>
                    ${price > 0 ? `${sizes.length ? "From " : ""}Rs. ${formatPrice(price)}` : "Price to confirm"}
                </strong>
                ${sizes.length ? `
                    <label class="item-details-size">Choose size
                        <select data-details-size aria-label="Choose size for ${escapeHTML(item.name)}">
                            ${sizes.map((size, index) => `<option value="${index}">${escapeHTML(size.label)} · Rs. ${formatPrice(size.price)}</option>`).join("")}
                        </select>
                    </label>
                ` : ""}
                <div class="item-details-actions">
                    <label>Quantity
                        <input type="number" min="1" max="99" value="1" data-details-quantity aria-label="Quantity for ${escapeHTML(item.name)}">
                    </label>
                    <button class="item-details-add" type="button" data-details-add ${canOrder ? "" : "disabled"}>
                        ${canOrder ? "Add to Cart" : (item.available ? "Price to confirm" : "Unavailable")}
                    </button>
                </div>
            </div>
        </div>
    `;
    dialog.showModal();

    content.querySelector(".item-details-close").addEventListener("click", () => dialog.close());
    const sizeSelect = content.querySelector("[data-details-size]");
    if (sizeSelect) {
        sizeSelect.addEventListener("change", () => {
            const selected = sizes[Number(sizeSelect.value)];
            content.querySelector("[data-details-price]").textContent = `Rs. ${formatPrice(selected.price)}`;
        });
    }

    content.querySelector("[data-details-add]").addEventListener("click", () => {
        const selectedSize = sizeSelect ? sizes[Number(sizeSelect.value)] : null;
        const selectedPrice = selectedSize ? Number(selectedSize.price) : Number(item.price);
        const quantity = Math.max(1, Math.min(99, Number(content.querySelector("[data-details-quantity]").value) || 1));
        if (item.available && selectedPrice > 0) {
            dialog.close();
            addToCart(item.name, selectedPrice, item.id, selectedSize ? selectedSize.label : "", quantity);
        }
    });
}


function toggleMobileMenu() {
    const navigation = document.getElementById("siteNavigation");
    const menuButton = document.querySelector(".menu-toggle");
    const isOpen = navigation.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}


function closeMobileMenu() {
    const navigation = document.getElementById("siteNavigation");
    const menuButton = document.querySelector(".menu-toggle");
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
}


function addToCart(name, price, itemId = name, sizeLabel = "", quantity = 1) {
    const cartId = `${itemId}::${sizeLabel}`;
    const existingItem = cart.find(item => item.id === cartId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ id: cartId, name: sizeLabel ? `${name} (${sizeLabel})` : name, price: Number(price), quantity });
    }

    updateCart();
    openCart();
}


function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");
    let totalItems = 0;
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                🛒
                <h3>Your cart is empty</h3>
                <p>Add something delicious!</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = "";
        cart.forEach((item, index) => {
            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;
            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";
            cartItem.innerHTML = `
                <div>
                    <h4>${escapeHTML(item.name)}</h4>
                    <p>Rs. ${formatPrice(item.price * item.quantity)}</p>
                </div>
                <div class="quantity">
                    <button onclick="decreaseQuantity(${index})" aria-label="Decrease ${escapeHTML(item.name)} quantity">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${index})" aria-label="Increase ${escapeHTML(item.name)} quantity">+</button>
                    <button class="remove-cart-item" onclick="removeCartItem(${index})" aria-label="Remove ${escapeHTML(item.name)} from cart">Remove</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    cartCount.textContent = totalItems;
    document.getElementById("mobileCartCount").textContent = totalItems;
    cartTotal.textContent = `Rs. ${formatPrice(totalPrice)}`;
}


function increaseQuantity(index) {
    cart[index].quantity++;
    updateCart();
}


function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
}


function removeCartItem(index) {
    cart.splice(index, 1);
    updateCart();
}


function openCart() {
    document.getElementById("cartPanel").classList.add("active");
    document.getElementById("cartOverlay").style.display = "block";
}


function closeCart() {
    document.getElementById("cartPanel").classList.remove("active");
    document.getElementById("cartOverlay").style.display = "none";
}


function orderNow() {
    const message = "Assalam-o-Alaikum! I want to place an order from Taste Hub. Delivery request: Free home delivery.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
}


function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Please add some items to your cart first.");
        return;
    }

    let total = 0;
    const lines = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `• ${item.name} × ${item.quantity} @ Rs. ${formatPrice(item.price)} each = Rs. ${formatPrice(itemTotal)}`;
    });
    const message = [
        "🍕 TASTE HUB ORDER",
        "",
        ...lines,
        "",
        `💰 Total: Rs. ${formatPrice(total)}`,
        "",
        "🚗 Delivery request: Free home delivery, please deliver to my address."
    ].join("\n");
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
}


function openAdminPanel() {
    isAdminAuthenticated = false;
    document.getElementById("adminLogin").hidden = false;
    document.getElementById("adminWorkspace").hidden = true;
    document.getElementById("adminLoginError").textContent = "";
    document.getElementById("adminPassword").value = "";
    document.getElementById("adminDialog").showModal();
    document.getElementById("adminPassword").focus();
}


function closeAdminPanel() {
    const dialog = document.getElementById("adminDialog");
    if (dialog.open) dialog.close();
    isAdminAuthenticated = false;
    document.getElementById("adminLogin").hidden = false;
    document.getElementById("adminWorkspace").hidden = true;
    document.getElementById("manageMenuButton").focus();
}


function saveMenu() {
    if (isAdminAuthenticated) persistMenu("All menu changes saved.");
}


function renderCategoryOptions(selectedCategory = "") {
    const select = document.getElementById("itemCategory");
    select.innerHTML = menuCategories.map(category => `
        <option value="${escapeHTML(category)}" ${category === selectedCategory ? "selected" : ""}>
            ${escapeHTML(category)}
        </option>
    `).join("");
}


function renderAdminItems() {
    const list = document.getElementById("adminItemList");
    const search = document.getElementById("adminSearch").value.trim().toLocaleLowerCase();
    const filteredItems = menuItems.filter(item =>
        `${item.name} ${item.category} ${item.description}`.toLocaleLowerCase().includes(search)
    );

    if (!filteredItems.length) {
        list.innerHTML = `<p class="admin-empty">No menu items match your search.</p>`;
        return;
    }

    list.innerHTML = filteredItems.map(item => `
        <article class="admin-item-row">
            <div class="admin-item-details">
                <span class="admin-item-category">${escapeHTML(item.category)} · ${item.available ? "Available" : "Unavailable"}</span>
                <h4>${escapeHTML(item.name)}</h4>
                <p>${item.price > 0 ? `Rs. ${formatPrice(item.price)}` : "Price to confirm"}${item.sizes && item.sizes.length ? ` · ${item.sizes.length} sizes` : ""} <span>·</span> ${escapeHTML(item.description)}</p>
            </div>
            <div class="admin-item-actions">
                <button type="button" class="admin-secondary" data-edit-item="${escapeHTML(item.id)}">Edit</button>
                <button type="button" class="admin-danger" data-delete-item="${escapeHTML(item.id)}">Delete</button>
            </div>
        </article>
    `).join("");
}


function renderAdminCategories() {
    document.getElementById("adminCategoryList").innerHTML = menuCategories.map(category => `
        <form class="admin-category-row" data-category-form="${escapeHTML(category)}">
            <input type="text" value="${escapeHTML(category)}" maxlength="40" aria-label="Category name">
            <button class="admin-secondary" type="submit">Save name</button>
        </form>
    `).join("");
}


function renderAdmin() {
    if (!isAdminAuthenticated) return;
    document.getElementById("adminTotalItems").textContent = menuItems.length;
    document.getElementById("adminAvailableItems").textContent = menuItems.filter(item => item.available).length;
    document.getElementById("adminTotalCategories").textContent = menuCategories.length;
    renderCategoryOptions();
    renderAdminItems();
    renderAdminCategories();
}

document.getElementById("itemDetailsDialog").addEventListener("click", event => {
    if (event.target === event.currentTarget) event.currentTarget.close();
});


function beginMenuItemEdit(itemId = "") {
    const form = document.getElementById("menuItemForm");
    const item = menuItems.find(menuItem => menuItem.id === itemId);
    form.reset();
    form.hidden = false;
    document.getElementById("menuItemId").value = item ? item.id : "";
    document.getElementById("menuItemFormTitle").textContent = item ? "Edit menu item" : "Add menu item";
    document.getElementById("itemName").value = item ? item.name : "";
    document.getElementById("itemPrice").value = item ? item.price : "";
    document.getElementById("itemDescription").value = item ? item.description : "";
    document.getElementById("itemSizes").value = item && Array.isArray(item.sizes)
        ? item.sizes.map(size => `${size.label}=${size.price}`).join("\n")
        : "";
    document.getElementById("itemImage").value = item && !item.image.startsWith("data:image/") ? item.image : "";
    document.getElementById("itemAvailable").checked = item ? item.available : true;
    document.getElementById("itemImageRemoved").value = "false";
    updateImagePreview(item ? item.image : "", item && item.image.startsWith("data:image/") ? "Uploaded image" : "");
    renderCategoryOptions(item ? item.category : (activeCategory === "All" ? menuCategories[0] : activeCategory));
    form.scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById("itemName").focus({ preventScroll: true });
}


function compressImage(file) {
    return createImageBitmap(file).then(bitmap => {
        const scale = Math.min(1, 1000 / Math.max(bitmap.width, bitmap.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(bitmap.width * scale);
        canvas.height = Math.round(bitmap.height * scale);
        canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
        bitmap.close();
        return canvas.toDataURL("image/webp", 0.78);
    });
}


document.querySelectorAll("#siteNavigation a").forEach(link => {
    link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMobileMenu();
});

document.getElementById("menuSearch").addEventListener("input", renderMenu);

document.getElementById("adminLoginForm").addEventListener("submit", event => {
    event.preventDefault();
    const password = document.getElementById("adminPassword").value;
    if (password !== ADMIN_PASSWORD) {
        document.getElementById("adminLoginError").textContent = "That password did not match. Try again.";
        return;
    }

    isAdminAuthenticated = true;
    document.getElementById("adminLogin").hidden = true;
    document.getElementById("adminWorkspace").hidden = false;
    document.getElementById("adminLoginError").textContent = "";
    renderAdmin();
}
);

document.getElementById("newMenuItemButton").addEventListener("click", () => beginMenuItemEdit());
document.getElementById("cancelMenuItemEdit").addEventListener("click", () => {
    document.getElementById("menuItemForm").hidden = true;
    document.getElementById("menuItemForm").reset();
    updateImagePreview();
});
document.getElementById("adminSearch").addEventListener("input", renderAdminItems);

document.getElementById("itemImage").addEventListener("input", event => {
    const fileInput = document.getElementById("itemImageFile");
    fileInput.value = "";
    if (imagePreviewObjectUrl) URL.revokeObjectURL(imagePreviewObjectUrl);
    imagePreviewObjectUrl = "";
    document.getElementById("itemImageRemoved").value = event.target.value.trim() ? "false" : "true";
    updateImagePreview(event.target.value.trim());
});

document.getElementById("itemImageFile").addEventListener("change", event => {
    const file = event.target.files[0];
    if (!file) return;
    document.getElementById("itemImage").value = "";
    document.getElementById("itemImageRemoved").value = "false";
    if (imagePreviewObjectUrl) URL.revokeObjectURL(imagePreviewObjectUrl);
    imagePreviewObjectUrl = URL.createObjectURL(file);
    updateImagePreview(imagePreviewObjectUrl, file.name);
});

document.getElementById("removeItemImage").addEventListener("click", () => {
    document.getElementById("itemImage").value = "";
    document.getElementById("itemImageFile").value = "";
    document.getElementById("itemImageRemoved").value = "true";
    if (imagePreviewObjectUrl) URL.revokeObjectURL(imagePreviewObjectUrl);
    imagePreviewObjectUrl = "";
    updateImagePreview();
});

document.getElementById("menuItemForm").addEventListener("submit", async event => {
    event.preventDefault();
    if (!isAdminAuthenticated) return;

    const id = document.getElementById("menuItemId").value;
    const existingItem = menuItems.find(item => item.id === id);
    const file = document.getElementById("itemImageFile").files[0];
    let image = document.getElementById("itemImage").value.trim();

    try {
        if (file) image = await compressImage(file);
    } catch (error) {
        document.getElementById("saveStatus").textContent = "That image could not be processed. Try another file.";
        return;
    }

    if (image && !safeImageSource(image)) {
        document.getElementById("saveStatus").textContent = "Use an assets/images/ path, an HTTPS image URL, or upload an image file.";
        return;
    }

    const item = {
        id: existingItem ? existingItem.id : createId(),
        name: document.getElementById("itemName").value.trim(),
        price: Number(document.getElementById("itemPrice").value),
        category: document.getElementById("itemCategory").value,
        description: document.getElementById("itemDescription").value.trim(),
        sizes: parseSizeOptions(document.getElementById("itemSizes").value),
        image: document.getElementById("itemImageRemoved").value === "true"
            ? ""
            : (image || (existingItem ? existingItem.image : "")),
        available: document.getElementById("itemAvailable").checked
    };

    if (existingItem) {
        menuItems = menuItems.map(menuItem => menuItem.id === id ? item : menuItem);
    } else {
        menuItems.push(item);
    }

    document.getElementById("menuItemForm").hidden = true;
    document.getElementById("menuItemForm").reset();
    if (imagePreviewObjectUrl) URL.revokeObjectURL(imagePreviewObjectUrl);
    imagePreviewObjectUrl = "";
    updateImagePreview();
    refreshMenu("Menu item saved.");
});

document.getElementById("adminItemList").addEventListener("click", event => {
    const editButton = event.target.closest("[data-edit-item]");
    const deleteButton = event.target.closest("[data-delete-item]");

    if (editButton) beginMenuItemEdit(editButton.dataset.editItem);
    if (deleteButton && isAdminAuthenticated) {
        const item = menuItems.find(menuItem => menuItem.id === deleteButton.dataset.deleteItem);
        if (item && window.confirm(`Delete ${item.name} from the menu?`)) {
            menuItems = menuItems.filter(menuItem => menuItem.id !== item.id);
            refreshMenu("Menu item deleted.");
        }
    }
});

document.getElementById("categoryCreateForm").addEventListener("submit", event => {
    event.preventDefault();
    const input = document.getElementById("newCategoryName");
    const name = input.value.trim();
    if (!name) return;
    if (menuCategories.some(category => category.toLocaleLowerCase() === name.toLocaleLowerCase())) {
        document.getElementById("saveStatus").textContent = "That category already exists.";
        return;
    }

    menuCategories.push(name);
    input.value = "";
    refreshMenu("Category added.");
});

document.getElementById("adminCategoryList").addEventListener("submit", event => {
    const form = event.target.closest("[data-category-form]");
    if (!form) return;
    event.preventDefault();

    const oldName = form.dataset.categoryForm;
    const newName = form.querySelector("input").value.trim();
    if (!newName) return;
    if (newName !== oldName && menuCategories.some(category => category.toLocaleLowerCase() === newName.toLocaleLowerCase())) {
        document.getElementById("saveStatus").textContent = "That category name is already in use.";
        return;
    }

    menuCategories = menuCategories.map(category => category === oldName ? newName : category);
    menuItems = menuItems.map(item => item.category === oldName ? { ...item, category: newName } : item);
    if (activeCategory === oldName) activeCategory = newName;
    refreshMenu("Category name updated.");
});


function refreshMenu(message) {
    persistMenu(message);
    renderCategories();
    renderFilters();
    renderMenu();
    renderAdmin();
}


function initializeMenu() {
    renderCategories();
    renderFilters();
    renderMenu();
    updateCart();
}


initializeMenu();