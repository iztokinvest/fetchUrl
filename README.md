# JS parameters
- <b>formId</b>: <i>[expected: id]</i> - Form Id for POST submit only
- <b>fetchUrl</b>: <i>[expected: php url, required]</i> - Fetched file url
- <b>fetchMethod</b>: <i>[expected: POST]</i> - Only for form submitting
- <b>fetchDisplayId</b>: <i>[expected: id]</i> - ID of element when display content
- <b>addClassToId</b>: <i>[expected: object {class: id, class2: id2}]</i> - Adding chosen classes to ids
- <b>removeClassFromId</b>: <i>[expected: object {class: id, class2: id2}]</i> - Removing chosen classes from ids
- <b>addAttributeToId</b>: <i>[expected: object {attribute: id, attribute: id2}]</i> - Adding chosen atributes to ids
- <b>removeAttributeFromId</b>: <i>[expected: object {attribute: id, attribute: id2}]</i> - Removing chosen atributes from ids
- <b>msgConfirm</b>: <i>[expected: message]</i> - Showing confirmation dialog with this text before submit
- <b>emptyData</b>: <i>[expected: true]</i> - Clear all form values after submit
- <b>reloadPage</b>: <i>[expected: true]</i> - Reload page after submit

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

Return function showAlert(alertType, Message) if exists. if not exists return alert(Message)
```php
echo json_encode(['msg' => 'Message text']);
```
Return function showAlert(alertType, Message) if exists. if not exists return alert(Message)
```php
echo json_encode(['error' => 'Error text']);
```
Redirect to url after submit
```php
echo json_encode(['redirect' => 'https://example.com']);
```
