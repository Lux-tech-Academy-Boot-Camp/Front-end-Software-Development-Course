```html
<!DOCTYPE html>
<html>
<head>
	<title>Title</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
	<style type="text/css">
		.main{
			height: 638px;
			width:100%;
			background-color:blue;
			display:grid;
			place-items:center;
		}
		.app{
			height: 300px;
			width: 350px;
			background-color: grey;
			display:grid;
			justify-items:center;
			align-items: center;
			/*place-items:center;*/
		}
		button{
			height: 36px;
			width: 150px;
			border-radius: 10px;
			background-color: white;
			color: black;
			font-weight: bold;
		}
	</style>
</head>
<body>
	<div data class="main">
		<div class="app">
			<button> Read More</button>
		</div>
	</div>

</body>
</html> 

``` 
## css


```css
[data]{
	color:red;
}
```