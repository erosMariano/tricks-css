const ulTag = document.querySelector("ul");
let totalPages = 20

function element(totalPages, page) {
	let liTag = "";
	let activeLi;

	let beforePages = page - 1 // 5 - 1 = 4
	let afterPages = page  + 1// 5 + 1 = 6

	
	if (page >= 1) {//if page value is greater than 1 then add new li which is previus button
		liTag += `
		<li class="btn prev" onclick="element(totalPages, ${page-1})">
			<span>
			<svg width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
			d="M8.46804 0.806181C8.57358 0.80648 8.67668 0.837938 8.76441 0.896605C8.85214 0.955273 8.9206 1.03853 8.96119 1.13596C9.00178 1.23338 9.01272 1.34062 8.9926 1.44423C8.97248 1.54783 8.92221 1.64319 8.8481 1.71834L1.35697 9.20948C1.26583 9.30054 1.19354 9.40867 1.14422 9.52768C1.0949 9.6467 1.06952 9.77427 1.06952 9.9031C1.06952 10.0319 1.0949 10.1595 1.14422 10.2785C1.19354 10.3975 1.26583 10.5057 1.35697 10.5967L8.8481 18.0879C8.89821 18.1377 8.93798 18.1969 8.96511 18.2621C8.99224 18.3273 9.0062 18.3973 9.0062 18.4679C9.0062 18.5386 8.99224 18.6085 8.96511 18.6737C8.93798 18.739 8.89821 18.7982 8.8481 18.848C8.74702 18.9483 8.61041 19.0045 8.46804 19.0045C8.32566 19.0045 8.18905 18.9483 8.08797 18.848L0.596829 11.3531C0.215037 10.9686 0.000793457 10.4487 0.000793457 9.9069C0.000793457 9.36506 0.215037 8.84521 0.596829 8.46074L8.08797 0.965803C8.18962 0.866484 8.32592 0.810612 8.46804 0.809986"
			fill="#DF0814" />
			</svg>
			</span>
		</li>
		`;
		
		if(page > 2){ //if page value is greater than 2 add new li tag with  1 value
			liTag += `<li class="numb" onclick="element(totalPages, 1)" ><span>1</span></li>`

			if(page > 3){//if page value is greater than 3 then add new li tag (...)
				liTag += `<li class="dots"><span>...</span></li>`
			}
		}
		
		
	
		//how many pages or li show before the current li

		if(page == totalPages){//if page value is equal to totalpages the substract by -2 to the beforepages value
			beforePages = beforePages - 2
		}else if(page == totalPages -1){ //else if page value is equal to totalpages by -1 to the beforespages value
			beforePages = beforePages - 1
		}

		if(page == totalPages){//if page value is equal 1  the add by +2 to the afterpages value
			afterPages = afterPages + 2
		}else if(page == 2){
			afterPages = afterPages + 1
		}

		for(let pageLength = beforePages; pageLength <= afterPages; pageLength++){
			if(pageLength > totalPages){
				continue
			}

			if(pageLength == 0){
				pageLength = pageLength + 1
			}


			if(page == pageLength){ //if page value is equal to pagelength then assing the active string in the activeLi  variable
				activeLi = "active"
			}else{//else leave empty to the activeLi variable
				activeLi = ""
			}

			liTag += `<li class="numb ${activeLi}" onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`
		}


		if(page < totalPages - 1){ //if page value is less than totalpages by -1 then show then last li or page wich is 20			
			if(page <  totalPages - 2){//if page value is less than totalpages by -2 then show then show last (...) before
				liTag += `<li class="dots"><span>...</span></li>`
			}
			liTag += `<li class="numb" onclick="element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`
		}



		if(page < totalPages){//if page value is greater than 1 then add new li which is next button
			liTag += `
					<li class="btn next" onclick="element(totalPages, ${page + 1})">
						<span>
							<svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M0.52623 17.9999C0.421814 17.9996 0.319814 17.9685 0.233016 17.9105C0.146218 17.8524 0.0784888 17.7701 0.0383286 17.6737C-0.00183166 17.5773 -0.0126505 17.4712 0.00725383 17.3687C0.0271582 17.2662 0.0768973 17.1718 0.150211 17.0975L7.56154 9.68617C7.6517 9.59608 7.72322 9.4891 7.77202 9.37135C7.82082 9.25361 7.84592 9.12739 7.84592 8.99994C7.84592 8.87248 7.82082 8.74627 7.77202 8.62852C7.72322 8.51077 7.6517 8.4038 7.56154 8.3137L0.150211 0.902378C0.100643 0.853105 0.0612931 0.794518 0.03445 0.729986C0.00760686 0.665454 -0.00619507 0.596251 -0.00619507 0.526359C-0.00619507 0.456467 0.00760686 0.387264 0.03445 0.322732C0.0612931 0.258201 0.100643 0.199614 0.150211 0.150341C0.250218 0.0511443 0.385371 -0.0045166 0.52623 -0.0045166C0.667089 -0.0045166 0.802242 0.0511443 0.902248 0.150341L8.31358 7.56542C8.6913 7.9458 8.90326 8.46012 8.90326 8.99618C8.90326 9.53224 8.6913 10.0465 8.31358 10.4269L0.902248 17.842C0.801679 17.9403 0.666832 17.9956 0.52623 17.9962"
									fill="#DF0814" />
							</svg>
						</span>
					</li> 
			`
		}
		ulTag.innerHTML = liTag
	}
}

element(totalPages, 5); //calling above function with passings values
