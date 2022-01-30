import { addStock } from "./stock.js";

const addStockForm = document.querySelector(".form-add-stock");
if (addStockForm) {
  addStockForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const capacity = form.get("capacity");
    const phone = form.get("phone");
    const city = form.get("city");
    const street = form.get("street");
    const alley = form.get("alley");
    const pelaque = form.get("pelaque");
    const postalCode = form.get("postal");

    await addStock({
      st_name: name,
      st_capacity: capacity,
      st_phone: phone,
      st_address: {
        city,
        street,
        alley,
        pelaque,
        postalCode,
      },
    });
    addStockForm.reset();
    alert("Stock Added Successfully");
  });
}

// Add Stock
