const dynamicDbUrl = document.getElementById("dbUrl");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", async (event) => {
  let isLoading = false;
  console.log("click");

  const randomId = Math.floor(Math.random() * 200 + 1);
  const imageUrl = `https://picsum.photos/id/${randomId}/200/300`;

  const productDataObject = {
    title: document.getElementById("title").value,
    dbUrl: document.getElementById("dbUrl").value,
    // title: document.getElementById("title").value + randomId,
    description: document.getElementById("description").value,
    stock: Number(document.getElementById("stock").value),
    price: Number(document.getElementById("price").value),
    imgUrl: imageUrl,
  };

  const productDataJson = JSON.stringify(productDataObject);

  console.log("데이터 확인", productDataJson);
  try {
    isLoading = true;
    submitButton.setAttribute("disabled", true);
    const createProduct = await fetch("/api/product", {
      method: "post",
      body: productDataJson,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (createProduct.ok) {
      // document.getElementById("productForm").reset();

      const product = await createProduct.json();
      console.log("생성제품", product);
    }
  } catch (error) {
    alert("제품생성 실패 ㅜㅜ");
    console.log("제품생성 실패", error);
  } finally {
    isLoading = false;
    submitButton.removeAttribute("disabled");
  }
});
