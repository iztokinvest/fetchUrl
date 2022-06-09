# Simple HTML FORM SUBMIT example
```HTML
<form id="test-form">
	<input type="text" name="test">
	<button name="test" type="button" onClick="fetchUrl({
		formId: 'test-form',
		fetchUrl: 'example_post.php',
		fetchMethod: 'POST'
	});">Submit</button>
</form>
```
# Simple HTML LOAD RESOURCE example
```HTML
<span onClick="onClick="fetchUrl({
	  fetchUrl: 'example_json.php',
	  fetchDisplayId: 'hidden-content'
})"></span>
<span id="hidden-content"></span>
```
