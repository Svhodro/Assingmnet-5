// om namah shivy 

// select all button\

//all importent code element value..!
let buttons = document.querySelectorAll(".buton");
let nextBtn = document.querySelector(".next");
let numberInput = document.querySelector(".numin");
let disInput = document.querySelector(".disin");
let applyDis = document.querySelector(".apply");
let totalPriceValue = document.querySelector(".total");
let addDiscountDiv = document.querySelector(".info");
let totalDiv = document.querySelector(".totaldiv");
let badghValue = document.querySelector(".badge");
let setOne = document.querySelector(".set1");
let setTwo = document.querySelector(".set2");
let setThree = document.querySelector(".set3");
let setFour = document.querySelector(".set4");
let setFive = document.querySelector(".set5")
let freeSeatValue = document.querySelector(".Freeseat");


//add event on this button
let add = 0;
let totalPrice = 0;

buttons.forEach(function (button) {

    button.addEventListener("click", function (buton) {


        if (add <= 3) {
            add++
            button.style.backgroundColor = "green";
            badghValue.innerHTML = add;
            let setabal = 40 - add;
            freeSeatValue.innerHTML = setabal;
            if (add == 1) {
                let fastP = document.querySelector('.set1 :nth-child(1)')
                let secondP = document.querySelector('.set1 :nth-child(2)')
                let thirdP = document.querySelector('.set1 :nth-child(3)')
                fastP.innerHTML = button.innerHTML;
                secondP.innerHTML = "Economoy";
                thirdP.innerHTML = "550"
                totalPrice += 550
                totalPriceValue.innerHTML = totalPrice;


            }
            if (add == 2) {
                let fastP = document.querySelector('.set2 :nth-child(1)')
                let secondP = document.querySelector('.set2 :nth-child(2)')
                let thirdP = document.querySelector('.set2 :nth-child(3)')
                fastP.innerHTML = button.innerHTML;
                secondP.innerHTML = "Economoy";
                thirdP.innerHTML = "550"
                totalPrice += 550
                totalPriceValue.innerHTML = totalPrice;
            }
            if (add == 3) {
                let fastP = document.querySelector('.set3 :nth-child(1)')
                let secondP = document.querySelector('.set3 :nth-child(2)')
                let thirdP = document.querySelector('.set3 :nth-child(3)')
                fastP.innerHTML = button.innerHTML;
                secondP.innerHTML = "Economoy";
                thirdP.innerHTML = "550"
                totalPrice += 550
                totalPriceValue.innerHTML = totalPrice;
            }
            if (add == 4) {
                let fastP = document.querySelector('.set4 :nth-child(1)')
                let secondP = document.querySelector('.set4 :nth-child(2)')
                let thirdP = document.querySelector('.set4 :nth-child(3)')
                fastP.innerHTML = button.innerHTML;
                secondP.innerHTML = "Economoy";
                thirdP.innerHTML = "550"
                totalPrice += 550
                totalPriceValue.innerHTML = totalPrice;
                applyDis.removeAttribute("disabled")
                disInput.removeAttribute("disabled")

                applyDis.addEventListener("click", function () {
                    let inputValue = disInput.value;
                    if (inputValue === "NEW15") {
                        let parsentcal = 15 * totalPrice / 100;
                        let discaunt = totalPrice - parsentcal;
                        document.querySelector(".set5 :nth-child(1)").innerHTML = "discount";
                        document.querySelector(".set5 :nth-child(2)").innerHTML = parsentcal;
                        document.querySelector(".Grand :nth-child(2)").innerHTML = discaunt;
                        let inputDiv = document.querySelector(".lable")
                        inputDiv.classList.add("hidden")
                        
                    }else if (inputValue === "Couple20") {
                            let parsentcal = 15 * totalPrice / 100;
                            let discaunt = totalPrice - parsentcal;
                            document.querySelector(".set5 :nth-child(1)").innerHTML = "discount";
                            document.querySelector(".set5 :nth-child(2)").innerHTML = parsentcal;
                            document.querySelector(".Grand :nth-child(2)").innerHTML = discaunt;
                            let inputDiv = document.querySelector(".lable")
                            inputDiv.classList.add("hidden")
                           
                        } else {
                            let alart = document.querySelector(".alart");
                            console.log(alart);
                            alart.classList.remove("hidden")
                            alart
                        }
                    })
            }

        }
    })

});


