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
# After SUBMIT commands
```HTML
Return function showAlert(alertType, Message) if exists. if not exists return alert(Message)
echo json_encode(['msg' => 'Message text']);

Return function showAlert(alertType, Message) if exists. if not exists return alert(Message)
echo json_encode(['error' => 'Error text']);

Redirect to url after submit
echo json_encode(['redirect' => 'https://example.com']);
```
