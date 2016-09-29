$(document).ready(function(){
	$.getJSON('feed.json')
	.done(function(data){
		console.log(data);
		// get id to show data
		var books = document.getElementById("books");
		// Define Book Variables.
		// first book
		var titleOne = data.books[0].title;
		var priceOne = data.books[0].price;
		var imageUrlOne = data.books[0].imageUrl;
		// second book
		var titleTwo = data.books[1].title;
		var priceTwo = data.books[1].price;
		var imageUrlTwo = data.books[1].imageUrl;
		// Third book
		var titleThree = data.books[2].title;
		var priceThree = data.books[2].price;
		var imageUrlThree = data.books[2].imageUrl;
		// ******************************
	 	// Create Elements in the HTML file
	 	// ******************************
	 	var columnOne = document.createElement("div");
	 	columnOne.setAttribute("class", "col-sm-6 col-md-4 thumbnail");

	 	var columnTwo = document.createElement("div");
	 	columnTwo.setAttribute("class", "col-sm-6 col-md-4 thumbnail");

	 	var columnThree = document.createElement("div");
	 	columnThree.setAttribute("class", "col-sm-6 col-md-4 thumbnail");

	 	var cartButton1 = document.createElement("input");
	 	cartButton1.setAttribute("class", "btn btn-success price1");
	 	cartButton1.setAttribute("type", "button");
	 	cartButton1.setAttribute("value", "Add to cart");

	 	var cartButton2 = document.createElement("input");
	 	cartButton2.setAttribute("class", "btn btn-success price2");
	 	cartButton2.setAttribute("type", "button");
	 	cartButton2.setAttribute("value", "Add to cart");

	 	var cartButton3 = document.createElement("input");
	 	cartButton3.setAttribute("class", "btn btn-success price3");
	 	cartButton3.setAttribute("type", "button");
	 	cartButton3.setAttribute("value", "Add to cart");

	 	var emptyCart = document.createElement("input");
	 	emptyCart.setAttribute("class", "btn btn-danger empty");
	 	emptyCart.setAttribute("type", "button");
	 	emptyCart.setAttribute("value", "Empty Cart");
	 	var empty = document.getElementById("empty");
	 	empty.appendChild(emptyCart);

	 	// name1
	 	var bookOne = document.createElement("h3");
	 	var oneNode = document.createTextNode(titleOne);
	 	bookOne.appendChild(oneNode);
	 	columnOne.appendChild(bookOne);
	 	
	 	// image1
	 	var imageOne = document.createElement("img");
	 	imageOne.src = imageUrlOne;
	 	columnOne.appendChild(imageOne);
	 	// price1
	 	var feeOne = document.createElement("p");
	 	var feeNode = document.createTextNode("$" + priceOne);
	 	feeOne.appendChild(feeNode);
	 	columnOne.appendChild(feeOne);
	 	// button
	 	columnOne.appendChild(cartButton1);

	 	// name2
	 	var bookTwo = document.createElement("h3");
	 	var TwoNode = document.createTextNode(titleTwo);
	 	bookTwo.appendChild(TwoNode);
	 	columnTwo.appendChild(bookTwo);
	 	// image2
	 	var imageTwo = document.createElement("img");
	 	imageTwo.src = imageUrlTwo;
	 	columnTwo.appendChild(imageTwo);
	 	// price2
	 	var feeTwo = document.createElement("p");
	 	var feeNode = document.createTextNode("$" + priceTwo);
	 	feeTwo.appendChild(feeNode);
	 	columnTwo.appendChild(feeTwo);
	 	// button
	 	columnTwo.appendChild(cartButton2);



	 	// name3
	 	var bookThree = document.createElement("h3");
	 	var ThreeNode = document.createTextNode(titleThree);
	 	bookThree.appendChild(ThreeNode);
	 	columnThree.appendChild(bookThree);
	 	// image3
	 	var imageThree = document.createElement("img");
	 	imageThree.src = imageUrlThree;
	 	columnThree.appendChild(imageThree);
	 	// price3
	 	var feeThree = document.createElement("p");
	 	var feeNode = document.createTextNode("$" + priceThree);
	 	feeThree.appendChild(feeNode);
	 	columnThree.appendChild(feeThree);
	 	// button
	 	columnThree.appendChild(cartButton3);

		books.appendChild(columnOne);
		books.appendChild(columnTwo);
		books.appendChild(columnThree);

// Cart functionality
$('#empty').hide();
		var myCart = 0;
		var price = 0;
		var cartContent = document.getElementById("cartContent");
		var cartValue = document.getElementById("cartValue");

		var priceArr = [];
		cartContent.innerHTML = myCart;
		cartValue.innerHTML = "$ " + price + ".00";


			$(".price1").click(function(){
				var item = document.getElementsByTagName("p")[0].innerHTML;
				priceArr.push(parseFloat(item.substring(1,item.length)));
				price = priceArr.reduce(function(prev, current){return prev + current })
				$('#empty').fadeIn(300);
				myCart = priceArr.length;
				cartContent.innerHTML = myCart;
				cartValue.innerHTML = "$ " + price + ".00";
			})
			$(".price2").click(function(){
				var item = document.getElementsByTagName("p")[1].innerHTML;
				priceArr.push(parseFloat(item.substring(1,item.length)));
				price = priceArr.reduce(function(prev, current){return prev + current })
				$('#empty').fadeIn(300);
				myCart = priceArr.length;
				cartContent.innerHTML = myCart;
				cartValue.innerHTML = "$ " + price + ".00";
			})
			$(".price3").click(function(){
				var item = document.getElementsByTagName("p")[2].innerHTML;
				priceArr.push(parseFloat(item.substring(1,item.length)));
				price = priceArr.reduce(function(prev, current){return prev + current })
				$('#empty').fadeIn(300);
				myCart = priceArr.length;
				cartContent.innerHTML = myCart;
				cartValue.innerHTML = "$ " + price + ".00";
			});

			// empty cart
			$("#empty").click(function(){
				myCart = 0;
				price = 0;
				priceArr = [];
				cartContent.innerHTML = myCart;
				cartValue.innerHTML = "$ " + price + ".00";
				$("#empty").fadeOut(400);
			}) 

	})
	.fail(function(){
		console.log("error")
	})
	.always(function(){
		console.log("finished")
	});
})