let article = {
	name: "John Kioko",
	age: 22,
	publish_status: "Yes",
	blogs : ["Git Guide", "Intro to CSS3 & HTML5"],
	//getblogs is a method article object
	getblogs: function(){
		this.blogs.forEach(blog =>{
			console.log(blog);
		});
	}

}
article.getblogs()