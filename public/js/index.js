import { addStock } from "./stock.js";
import { addBranch } from "./branch.js";
import { addEmployee } from "./employee.js";
import { addProduct } from "./product.js";

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

// Add Branch
const addBranchForm = document.querySelector(".form-add-branch");
if (addBranchForm) {
  addBranchForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const phone = form.get("phone");
    const owner = form.get("owner");
    const city = form.get("city");
    const street = form.get("street");
    const alley = form.get("alley");
    const pelaque = form.get("pelaque");
    const postalCode = form.get("postal");

    await addBranch({
      br_name: name,
      br_owner: owner,
      br_phone: phone,
      br_address: {
        city,
        street,
        alley,
        pelaque,
        postalCode,
      },
    });
    addBranchForm.reset();
    alert("Branch Added Successfully");
  });
}

// add Employee
const addEmployeeForm = document.querySelector(".form-add-employee");
if (addEmployeeForm) {
  const roleInput = document.querySelector("#roles");
  const bremForm = document.querySelector(".brem-form");
  const stemForm = document.querySelector(".stem-form");
  const stemFormInputs = document.querySelectorAll(".stem-form__input");
  const bremFormInputs = document.querySelectorAll(".brem-form__input");

  roleInput.addEventListener("change", function () {
    if (roleInput.value === "branch") {
      bremForm.classList.remove("hidden");
      bremFormInputs.forEach((input) => {
        input.disabled = false;
      });
      stemFormInputs.forEach((input) => {
        input.disabled = true;
      });
      stemForm.classList.add("hidden");
    } else if (roleInput.value === "stock") {
      stemForm.classList.remove("hidden");
      stemFormInputs.forEach((input) => {
        input.disabled = false;
      });
      bremFormInputs.forEach((input) => {
        input.disabled = true;
      });
      bremForm.classList.add("hidden");
    } else {
      bremForm.classList.add("hidden");
      stemForm.classList.add("hidden");
      stemFormInputs.forEach((input) => {
        input.disabled = true;
      });
      bremFormInputs.forEach((input) => {
        input.disabled = true;
      });
    }
  });
  addEmployeeForm.addEventListener("submit", async function (e) {
    try {
      e.preventDefault();
      const form = new FormData(e.target);
      const name = form.get("name");
      const lastname = form.get("lastname");
      const father = form.get("father");
      const phone = form.get("phone");
      const id = form.get("id");
      const naid = form.get("naid");
      const birth = form.get("birth");
      const personnel = form.get("personnel");
      const password = form.get("password");
      const password2 = form.get("password2");
      const city = form.get("city");
      const street = form.get("street");
      const alley = form.get("alley");
      const pelaque = form.get("pelaque");
      const postalCode = form.get("postal");
      let brem_work;
      let brem_employ;
      let stem_work;
      let stem_employ;
      let section;
      let manager;
      let url;

      if (roleInput.value === "branch") {
        brem_work = form.get("brem_work");
        brem_employ = form.get("brem_employ");
      } else if (roleInput.value === "stock") {
        stem_work = form.get("stem_work");
        stem_employ = form.get("stem_employ");
        section = form.get("section");
        manager = form.get("manager");
      }
      const data = {
        em_name: name,
        em_lastname: lastname,
        em_fatherName: father,
        em_phone: phone,
        em_id: id,
        em_naid: naid,
        em_brithDate: birth,
        em_personnelCode: personnel,
        em_password: password,
        em_passwordConfirm: password2,
        em_address: {
          city,
          street,
          alley,
          pelaque,
          postalCode,
        },
      };
      if (roleInput.value === "branch") {
        data["brem_work"] = brem_work;
        data["brem_employmentDate"] = brem_employ;
        url = "/api/v1/employee/branch";
      } else if (roleInput.value === "stock") {
        data["stem_work"] = stem_work;
        data["stem_employmentDate"] = stem_employ;
        data["stem_section"] = section;
        data["stem_manager"] = manager === "True";
        url = "/api/v1/employee/stock";
      } else {
        url = "/api/v1/employee/central";
      }
      console.log(data);
      await addEmployee(url, data);
    } catch (err) {
      console.log(err);
    }
  });
}

const addProductForm = document.querySelector(".form-add-product");
if (addProductForm) {
  const catagoryInput = document.querySelector("#catagories");
  const foodForm = document.querySelector(".food-form");
  const homeForm = document.querySelector(".home-form");
  const staForm = document.querySelector(".sta-form");
  const clForm = document.querySelector(".cl-form");
  const foodFormInputs = document.querySelectorAll(".food-form__input");
  const homeFormInputs = document.querySelectorAll(".home-form__input");
  const staFormInputs = document.querySelectorAll(".sta-form__input");
  const clFormInputs = document.querySelectorAll(".cl-form__input");

  catagoryInput.addEventListener("change", function () {
    if (catagoryInput.value === "FoodStuff") {
      foodFormInputs.forEach((el) => {
        el.disabled = false;
      });
      homeFormInputs.forEach((el) => {
        el.disabled = true;
      });
      staFormInputs.forEach((el) => {
        el.disabled = true;
      });
      clFormInputs.forEach((el) => {
        el.disabled = true;
      });
      foodForm.classList.remove("hidden");
      homeForm.classList.add("hidden");
      staForm.classList.add("hidden");
      clForm.classList.add("hidden");
    } else if (catagoryInput.value === "HomeAppliance") {
      homeFormInputs.forEach((el) => {
        el.disabled = false;
      });
      foodFormInputs.forEach((el) => {
        el.disabled = true;
      });
      staFormInputs.forEach((el) => {
        el.disabled = true;
      });
      clFormInputs.forEach((el) => {
        el.disabled = true;
      });
      homeForm.classList.remove("hidden");
      foodForm.classList.add("hidden");
      staForm.classList.add("hidden");
      clForm.classList.add("hidden");
    } else if (catagoryInput.value === "Stationery") {
      staFormInputs.forEach((el) => {
        el.disabled = false;
      });
      foodFormInputs.forEach((el) => {
        el.disabled = true;
      });
      clFormInputs.forEach((el) => {
        el.disabled = true;
      });
      homeFormInputs.forEach((el) => {
        el.disabled = true;
      });
      staForm.classList.remove("hidden");
      foodForm.classList.add("hidden");
      clForm.classList.add("hidden");
      homeForm.classList.add("hidden");
    } else if (catagoryInput.value === "Clothing") {
      clFormInputs.forEach((el) => {
        el.disabled = false;
      });
      foodFormInputs.forEach((el) => {
        el.disabled = true;
      });
      homeFormInputs.forEach((el) => {
        el.disabled = true;
      });
      staFormInputs.forEach((el) => {
        el.disabled = true;
      });
      clForm.classList.remove("hidden");
      foodForm.classList.add("hidden");
      staForm.classList.add("hidden");
      homeForm.classList.add("hidden");
    }
  });

  addProductForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const brand = form.get("brand");
    const barcode = form.get("barcode");
    const prdoction = form.get("prdoction");
    const price = form.get("price");
    const image = form.get("image");
    const fo_ep = form.get("fo_ep");
    const fo_weight = form.get("fo_weight");
    const fo_pack = form.get("fo_pack");
    const ho_energy = form.get("ho_energy");
    const ho_power = form.get("ho_power");
    const ho_height = form.get("ho_height");
    const ho_width = form.get("ho_width");
    const ho_weight = form.get("ho_weight");
    const st_color = form.get("st_color");
    const cl_size = form.get("cl_size");
    let url;

    const data = {
      pr_name: name,
      pr_brand: brand,
      pr_price: price,
      pr_barcode: barcode,
      pr_pd: prdoction,
      pr_image: image ? image : "product.jpg",
    };

    if (catagoryInput.value === "FoodStuff") {
      data["fo_ep"] = fo_ep;
      data["fo_weight"] = fo_weight;
      data["fo_packType"] = fo_pack;
      url = "/api/v1/product/foodstuff";
    } else if (catagoryInput.value === "HomeAppliance") {
      (data["ho_energyCh"] = ho_energy), (data["ho_power"] = ho_power);
      data["ho_height"] = ho_height;
      data["ho_width"] = ho_width;
      data["ho_weight"] = ho_weight;
      url = "/api/v1/product/homeappliance";
    } else if (catagoryInput.value === "Stationery") {
      data["sta_color"] = st_color;
      url = "/api/v1/product/stationery";
    } else if (catagoryInput.value === "Clothing") {
      data["cl_size"] = cl_size;
      url = "/api/v1/product/clothing";
    }

    await addProduct(url, data);
    addProductForm.reset();
    alert("Your Product added successfully!");
  });
}
