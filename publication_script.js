const get_First_Section_Heading = document.querySelector(".first_section_heading");

function first_Section_Heading_Animation(entries, target){
	
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("animate_first_section_heading");
		}
	});
	
}


const first_Section_Heading_Animation_API = new IntersectionObserver(first_Section_Heading_Animation);


first_Section_Heading_Animation_API.observe(get_First_Section_Heading);





