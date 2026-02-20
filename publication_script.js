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


const get_Thought_Heading = document.querySelector(".thought_heading");

function thought_Heading_Animation(entries, target){
	
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("animate_thought_heading");
		}
	});
	
}


const thought_Heading_Animation_API = new IntersectionObserver(thought_Heading_Animation);


thought_Heading_Animation_API.observe(get_Thought_Heading);



const get_First_Section_Image = document.querySelector(".office_image");

function first_Section_Image_Animation(entries, target){
	
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("animate_first_section_image");
		}
	});
	
}


const first_Section_Image_Animation_API = new IntersectionObserver(first_Section_Image_Animation);


first_Section_Image_Animation_API.observe(get_First_Section_Image);
