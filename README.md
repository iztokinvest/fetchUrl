# JS parameters
- <b>formId</b>: [expected: id] - Form Id for POST submit only
- <b>fetchUrl</b>: [expected: php url, required] - Fetched file url
- <b>fetchMethod</b>: [expected: POST] - Only for form submitting
- <b>fetchDisplayId</b>: [expected: id] - ID of element when display content
- <b>addClassToId</b>: [expected: object {class:id, class2:id2}] - Adding chosen classes to ids
- <b>removeClassFromId</b>: [expected: object {class:id, class2:id2}] - Removing chosen classes from ids
- <b>addAttributeToId</b>: [expected: object {attribute:id, attribute:id2}] - Adding chosen atributes to ids
- <b>removeAttributeFromId</b>: [expected: object {attribute:id, attribute:id2}] - Removing chosen atributes from ids
- <b>msgConfirm</b>: [expected: message] - Showing confirmation dialog with this text before submit
- <b>emptyData</b>: [expected: true] - Clear all form values after submit
- <b>reloadPage</b>: [expected: true] - Reload page after submit

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
