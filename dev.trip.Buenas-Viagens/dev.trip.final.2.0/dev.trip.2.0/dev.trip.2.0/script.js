document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".carousel");
    let items = carousel.querySelectorAll(".cliente");

  
    // Function to show a specific item
    function showItem(index) {
      items.forEach((cliente, idx) => {
        cliente.classList.remove("active");
        if (idx === index) {
          cliente.classList.add("active");
        }
      });
    }
  
    // Event listeners for buttons
    document.querySelector(".anterior").addEventListener("click", () => {
      let index = [...cliente].findIndex((cliente) =>
        cliente.classList.contains("active")
      );
      showCliente((index - 1 + items.length) % items.length);
    });
  
    document.querySelector(".proximo").addEventListener("click", () => {
      let index = [...clientes].findIndex((cliente) =>
        cliente.classList.contains("active")
      );
      showCliente((index + 1) % cliente.length);
    });
  
  });


  
  // Sofia Avaliação
  document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".carousel");
    let items = carousel.querySelectorAll(".item");
    
    // Function to show a specific item
    function showItem(index) {
      items.forEach((item, idx) => {
        item.classList.remove("active");
        
        if (idx === index) {
          item.classList.add("active");
          
        }
      });
    }
  
    // Event listeners for buttons
    document.querySelector(".prev").addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      showItem((index - 1 + items.length) % items.length);
    });
  
    document.querySelector(".next").addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      showItem((index + 1) % items.length);
    });
  
  });