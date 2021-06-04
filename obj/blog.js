let article = {
	name: "John Kioko",
	publish_status: "Yes",
	blogs : ["Git Guide", "Intro to CSS3 & HTML5"],
	getblogs: function(){
		this.blogs.forEach(blog =>{
			console.log(blog);
		});
	}

}
article.getblogs()